package com.i1.tde.service;

import com.google.common.collect.ImmutableMap;
import com.i1.tde.dao.UserRepository;
import com.i1.tde.domain.User;
import com.i1.tde.security.UserAwareUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;

/**
 * Created by Sai on 2017/3/2.
 */
@Service
public class UserServiceImpl implements UserService{
    private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    public static final String ADMIN = "admin";
    public static final String ADMIN_UUID = "9CCB1898-C964-4B6E-AF48-EEBA18C31C5E";

    @Autowired
    private UserRepository repository;

    @Autowired
    private EntityManager entityManager;
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public JpaRepository<User, String> getRepository() {
        return repository;
    }

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        String SQL_FIND_USER_BY_NAME = "SELECT uuid, name, nick_name as NICKNAME, password from user where name=:name";
        try {
            Map<String, Object> user = jdbcTemplate.queryForMap(SQL_FIND_USER_BY_NAME, ImmutableMap.of("name", userName));
            // NOTICE : key must be upper case
            String uuid = (String) user.getOrDefault("UUID", "");
            String nickName = (String) user.getOrDefault("NICKNAME", "");
            String name = (String) user.getOrDefault("NAME", "");
            String password = (String) user.getOrDefault("PASSWORD", "");
            //String status = (String) user.getOrDefault("STATUS", "");

            return setUserDetails(uuid, nickName, name, password);
        } catch (EmptyResultDataAccessException e) {
            logger.info("user not exist: {}", userName);
            return null;
        } catch (DataAccessException e) {
            logger.error("perform sql query fail: user name=" + userName, e);
            return null;
        }
    }

    private UserAwareUserDetails setUserDetails(String uuid, String nickName, String name, String password) {
        Optional<User> user = repository.findByUuid(uuid);

        if (user.isPresent()) {
            user.get().setNickName(nickName);
            user.get().setName(name);
            user.get().setPassword(password);
            //user.get().setStatus(status);
            return createUserDetails(user.get());
        } else {
            return null;
        }
    }

    private UserAwareUserDetails createUserDetails(User user) {
        SimpleGrantedAuthority userAuthority = new SimpleGrantedAuthority("ROLE_USER");
        Collection<GrantedAuthority> authorities = new ArrayList() {{
            add(userAuthority);
        }};

        return new UserAwareUserDetails(user, authorities);
    }
}
