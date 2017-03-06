package com.i1.tde.service;

import com.i1.base.service.CrudService;
import com.i1.base.service.QueryService;
import com.i1.tde.domain.User;
import com.i1.tde.web.dto.UserInput;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * Created by Sai on 2017/3/2.
 */
public interface UserService extends CrudService<User>, QueryService<User>, UserDetailsService {
    void resetPassword(User user, UserInput input, Boolean isAdmin);
    boolean checkExists(String userName);
    User findByName(String userName);
}
