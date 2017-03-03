package com.i1.tde.security;

import com.i1.tde.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class UserAwareUserDetails implements UserDetails {

    private final User user;
    private final Collection<? extends GrantedAuthority> grantedAuthorities;
    private String salt;

    public UserAwareUserDetails(User user) {
        this(user, new ArrayList<GrantedAuthority>());
    }

    public UserAwareUserDetails(User user, Collection<? extends GrantedAuthority> grantedAuthorities) {
        this.user = user;
        this.grantedAuthorities = grantedAuthorities;
        setSalt(user.getSalt());
    }

    public User getUser() {
        return user;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    /**
     * Spring needs the original name to user the cache
     *
     * @return
     */
    @Override
    public String getUsername() {
        return user.getNickName();
    }

    public String getRealName() {
        return user.getName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
