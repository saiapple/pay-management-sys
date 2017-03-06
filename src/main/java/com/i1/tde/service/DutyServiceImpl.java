package com.i1.tde.service;

import com.i1.base.domain.DomainUtil;
import com.i1.tde.dao.DutyRepository;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Shop;
import com.i1.tde.web.dto.DutyUpdateInput;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.RuntimeBeanNameReference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.Calendar;
import java.util.List;

/**
 * Created by Sai on 2017/2/22.
 */
@Service
public class DutyServiceImpl implements DutyService {
    private DutyRepository repository;
    private EntityManager entityManager;
    private ShopService shopService;

    @Override
    public JpaRepository<Duty, String> getRepository() {
        return repository;
    }

    @Autowired
    public void setRepository(DutyRepository repository) {
        this.repository = repository;
    }

    @Autowired
    public void setShopService(ShopService shopService) {
        this.shopService = shopService;
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

    @Transactional
    @Override
    public void cascadeUpdate(Duty duty, DutyUpdateInput input) {
        if(StringUtils.isNotBlank(input.getActive())){
            duty.setActive(input.getActive());
            if(Duty.ACTIVE_1.equalsIgnoreCase(input.getActive())){ //开始
                List<Duty> dutyList = repository.findByActive(Duty.ACTIVE_1);
                if(dutyList != null && dutyList.size() > 0){
                    throw new RuntimeException("已经有开始的班次，请先完成正在进行的班次");
                }

                duty.setStartTime(Calendar.getInstance().getTime());
            } else if(Duty.ACTIVE_2.equalsIgnoreCase(input.getActive())){ //完成
                if(Duty.ACTIVE_1.equalsIgnoreCase(duty.getActive())){
                    throw new RuntimeException("班次尚未开始，无法直接完成");
                }

                duty.setEndTime(Calendar.getInstance().getTime());
            }
        } else if(input.getProfit() != null){
            // 把之前设置的水额从店面中去掉后加上新的水额
            Shop shop = duty.getShop();
            shop.setProfit(shop.getProfit().subtract(duty.getProfit()));
            shop.setProfit(shop.getProfit().add(input.getProfit()));
            shopService.update(shop);

            duty.setProfit(input.getProfit());
        } else if(Duty.ACTIVE_0.equalsIgnoreCase(duty.getActive())){ //只有未开始的班次才能设置备用金
            DomainUtil.copyNotNullProperties(input, duty);
            duty.setCurrentCashAmount(duty.getCashAmount());
            duty.setCurrentWxAmount(duty.getWxAmount());
            duty.setCurrentZfbAmount(duty.getZfbAmount());
            duty.setCurrentCardAmount(duty.getCardAmount());
            duty.setCurrentPosAmount(duty.getPosAmount());
        }

        this.update(duty);
    }
}
