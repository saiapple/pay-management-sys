package com.i1.tde.dao;

import com.i1.tde.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by Sai on 2017/3/2.
 */
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUuid(String userUuid);
}
