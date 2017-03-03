package com.i1.tde.service;

import com.i1.tde.dao.OrderRepository;
import com.i1.tde.domain.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;

/**
 * Created by Sai on 2017/3/3.
 */
public class OrderServiceImpl implements OrderService {
    private OrderRepository repository;
    private EntityManager entityManager;

    @Override
    public JpaRepository<Order, String> getRepository() {
        return repository;
    }

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Autowired
    public void setRepository(OrderRepository repository) {
        this.repository = repository;
    }

    @Autowired
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
}
