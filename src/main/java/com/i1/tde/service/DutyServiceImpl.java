package com.i1.tde.service;

import com.i1.tde.dao.DutyRepository;
import com.i1.tde.domain.Duty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by Sai on 2017/2/22.
 */
@Service
public class DutyServiceImpl implements DutyService {
    private DutyRepository repository;
    private EntityManager entityManager;

    @Override
    public JpaRepository<Duty, String> getRepository() {
        return repository;
    }

    @Autowired
    public void setRepository(DutyRepository repository) {
        this.repository = repository;
    }

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Autowired
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Duty> findByActive(String active) {
        return repository.findByActive(active);
    }

    @Override
    public Duty findSysDuty() {
        List<Duty> dutyList = repository.findByActive(Duty.ACTIVE_SYS);
        if(dutyList == null || dutyList.size() != 1){
            throw new RuntimeException("找不到系统内部班次");
        }

        return dutyList.get(0);
    }
}
