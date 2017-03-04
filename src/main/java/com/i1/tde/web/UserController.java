package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.User;
import com.i1.tde.service.UserService;
import com.i1.tde.service.query.UserQuery;
import com.i1.tde.web.dto.UserInput;
import com.i1.tde.web.dto.UserUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
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

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
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
    public User add(@Valid @RequestBody UserInput orderInput) throws BindException {
        User user = new User();
        DomainUtil.copyNotNullProperties(orderInput, user);

        BindException exception = new BindException(user, user.getClass().getSimpleName());
        Validators.validateBean(exception, user);

        if (exception.hasErrors()) {
            throw exception;
        }

        userService.add(user);

        return user;
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.PATCH)
    public User update(@PathVariable String uuid, @Valid @RequestBody UserUpdateInput orderUpdateInput) throws BindException {
        User user = userService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(User.class, uuid));
        DomainUtil.copyNotNullProperties(orderUpdateInput, user);

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

}
