package com.i1.tde.web;

import com.i1.tde.domain.User;
import com.i1.tde.security.UserAwareUserDetails;
import com.i1.tde.service.UserService;
import com.i1.tde.web.dto.UserLoginInput;
import com.i1.tde.web.dto.UserLoginOutput;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by Sai on 2017/3/2.
 */
@Controller
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private ShaPasswordEncoder encoder;

    @RequestMapping(value = "/auth/login", method = RequestMethod.POST)
    @ResponseBody
    public UserLoginOutput login(@RequestBody UserLoginInput userLoginInput) {
        if (userLoginInput != null) {
            UserDetails user = userService.loadUserByUsername(userLoginInput.getUserName());

            UserAwareUserDetails userDetails = (UserAwareUserDetails) user;
            if (StringUtils.isBlank(user.getPassword())) {
                if (userLoginInput.getPassword() == null && StringUtils.isBlank(userLoginInput.getPassword())) {
                    return createUserLoginOutput(userDetails.getUser());
                }
            } else {
                String encodedPwd = encoder.encodePassword(userLoginInput.getPassword(), userDetails.getSalt());

                if (user.getPassword().equals(encodedPwd)) {
                    return createUserLoginOutput(userDetails.getUser());
                }
            }
        }
        throw new RuntimeException("登陆失败!");
    }

    private UserLoginOutput createUserLoginOutput(User user) {
        //return new UserLoginOutput(user.getName(), Integer.parseInt(user.getType()), user.getUserUuid());
        return new UserLoginOutput(user.getName(), 1, user.getUuid());
    }

    @RequestMapping(value = "/auth/logout", method = RequestMethod.POST)
    @ResponseBody
    public void logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
    }
}
