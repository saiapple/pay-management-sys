package com.i1.tde.security;

import com.i1.tde.domain.User;
import com.i1.tde.security.UserAwareUserDetails;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.security.core.context.SecurityContextHolder;

@Component
public class SpringSecurityAuditorAware implements AuditorAware<User> {
    @Override
    public User getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return null;
        }

        if (authentication.getPrincipal() instanceof UserAwareUserDetails) {
            return ((UserAwareUserDetails) authentication.getPrincipal()).getUser();
        } else {
            return null;
        }
    }
}
