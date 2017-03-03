package com.i1.tde.dao;

import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Sai on 2017/3/3.
 */
public interface OrderRepository extends JpaRepository<Order, String> {
}
