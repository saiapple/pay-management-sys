package com.i1.tde.service;

import com.i1.tde.dao.ShopRepository;
import com.i1.tde.domain.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;

/**
 * Created by Sai on 2017/3/5.
 */
@Service
public class ShopServiceImpl implements ShopService {
    private ShopRepository repository;
    private EntityManager entityManager;

    @Override
    public JpaRepository<Shop, String> getRepository() {
        return repository;
    }

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Autowired
    public void setRepository(ShopRepository repository) {
        this.repository = repository;
    }

    @Autowired
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
}
