package com.i1.tde.dao;

import com.i1.tde.domain.Duty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * Created by Sai on 2017/3/2.
 */
public interface DutyRepository extends JpaRepository<Duty, String> {
    List<Duty> findByActive(String active);
}
