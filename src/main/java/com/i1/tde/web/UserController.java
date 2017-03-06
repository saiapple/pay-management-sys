package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.User;
import com.i1.tde.security.SpringSecurityAuditorAware;
import com.i1.tde.security.UserAwareUserDetails;
import com.i1.tde.service.UserService;
import com.i1.tde.service.query.UserQuery;
import com.i1.tde.web.dto.UserInput;
import com.i1.tde.web.dto.UserUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Sai on 2017/3/3.
 */
@RestController
@RequestMapping("users")
public class UserController {
    private UserService userService;
    protected SpringSecurityAuditorAware springSecurityAuditorAware;

    @Autowired
    private ShaPasswordEncoder encoder;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    public void setSpringSecurityAuditorAware(SpringSecurityAuditorAware springSecurityAuditorAware) {
        this.springSecurityAuditorAware = springSecurityAuditorAware;
    }

    protected User currentUser() {
        return springSecurityAuditorAware.getCurrentAuditor();
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<User> getAll(@Valid UserQuery query) {
        return userService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public User getOne(@PathVariable String uuid) {

        User user = userService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(User.class, uuid));
        return user;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public User add(@Valid @RequestBody UserInput userInput) throws BindException {
        User user = new User();
        DomainUtil.copyNotNullProperties(userInput, user);

        if(userInput.getName() == null){
            throw new RuntimeException("账户不能为空");
        }
        if(userInput.getRole() == null){
            throw new RuntimeException("角色不能为空");
        }
        if(userInput.getPassword() == null){
            throw new RuntimeException("密码不能为空");
        }
        if(!userInput.getPassword().equalsIgnoreCase(userInput.getConfirmPassword())){
            throw new RuntimeException("两次密码输入不一致");
        }

        if(userService.checkExists(userInput.getName())){
            throw new RuntimeException("用户名已存在");
        }

        String encodedPwd = encoder.encodePassword(user.getPassword(), User.getSalt());
        user.setPassword(encodedPwd);

        BindException exception = new BindException(user, user.getClass().getSimpleName());
        Validators.validateBean(exception, user);

        if (exception.hasErrors()) {
            throw exception;
        }

        userService.add(user);

        return user;
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.PATCH)
    public User update(@PathVariable String uuid, @Valid @RequestBody UserUpdateInput userUpdateInput) throws BindException {
        //User user = userService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(User.class, uuid));
        //DomainUtil.copyNotNullProperties(userUpdateInput, user);

        User user = userService.findByName(uuid);
        if(user == null){
            throw new ResourceNotFoundException(User.class, uuid);
        }

        if(userUpdateInput.getPassword() == null){
            throw new RuntimeException("密码不能为空");
        }
        if(userUpdateInput.getNewPassword() == null){
            throw new RuntimeException("密码不能为空");
        }
        if(!userUpdateInput.getNewPassword().equalsIgnoreCase(userUpdateInput.getNewPasswordConfirm())){
            throw new RuntimeException("两次密码输入不一致");
        }

        String encodedPwd = encoder.encodePassword(userUpdateInput.getPassword(), User.getSalt());
        if(!user.getPassword().equals(encodedPwd)){
            throw new RuntimeException("输入密码错误");
        }

        encodedPwd = encoder.encodePassword(userUpdateInput.getNewPassword(), User.getSalt());
        user.setPassword(encodedPwd);

        BindException exception = new BindException(user, User.class.getSimpleName());
        Validators.validateBean(exception, user);

        if (exception.hasErrors()) {
            throw exception;
        }

        userService.update(user);

        return user;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{uuid}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String uuid) {
        userService.delete(uuid);
    }

    @RequestMapping(value = "/resetPassword/", method = RequestMethod.PATCH)
    public User resetPassword(@Valid @RequestBody UserInput input) throws BindException {
        User user = null;
        boolean isAdmin = false;
        if (input.getName() != null) {
            UserDetails userDetails = userService.loadUserByUsername(input.getName());
            if (userDetails != null && ((UserAwareUserDetails) userDetails).getUser().getRole().equals(User.ROLE_1)) {
                user = ((UserAwareUserDetails) userDetails).getUser();
                isAdmin = true;
            } else {
                throw new RuntimeException("用户不存在！");
            }
        } else {
            user = currentUser();
        }

        userService.resetPassword(user, input, isAdmin);
        return user;

    }

}
