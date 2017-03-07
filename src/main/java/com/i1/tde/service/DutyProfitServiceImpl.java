package com.i1.tde.service;

import com.i1.base.domain.DomainUtil;
import com.i1.tde.dao.DutyProfitRepository;
import com.i1.tde.dao.DutyRepository;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.DutyProfit;
import com.i1.tde.domain.Shop;
import com.i1.tde.web.dto.DutyProfitUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/7.
 */
@Service
public class DutyProfitServiceImpl implements DutyProfitService {
    private DutyProfitRepository repository;
    private EntityManager entityManager;
    private DutyService dutyService;
    private ShopService shopService;

    @Override
    public JpaRepository<DutyProfit, String> getRepository() {
        return repository;
    }

    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }

    @Autowired
    public void setRepository(DutyProfitRepository repository) {
        this.repository = repository;
    }

    @Autowired
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Autowired
    public void setDutyService(DutyService dutyService) {
        this.dutyService = dutyService;
    }

    @Autowired
    public void setShopService(ShopService shopService) {
        this.shopService = shopService;
    }

    @Transactional
    @Override
    public DutyProfit cascadeAdd(DutyProfit dutyProfit) {
        BigDecimal profit = countProfitWithCards(dutyProfit.getCard1Count(), dutyProfit.getCard5Count(), dutyProfit.getCard10Count());


        dutyProfit.setProfit(profit);

        Duty duty = dutyProfit.getDuty();
        duty.setProfit(duty.getProfit().add(profit));
        dutyService.update(duty);

        Shop shop = duty.getShop();
        shop.setProfit(shop.getProfit().add(profit));
        shopService.update(shop);

        this.add(dutyProfit);
        return dutyProfit;
    }

    @Transactional
    @Override
    public DutyProfit cascadeUpdate(DutyProfit dutyProfit, DutyProfitUpdateInput updateInput) {
        BigDecimal newProfit = countProfitWithCards(updateInput.getCard1Count(), updateInput.getCard5Count(), updateInput.getCard10Count());

        Duty duty = dutyProfit.getDuty();
        duty.setProfit(duty.getProfit().subtract(dutyProfit.getProfit())); // 减掉之前的水额
        duty.setProfit(duty.getProfit().add(newProfit));
        dutyService.update(duty);

        Shop shop = duty.getShop();
        shop.setProfit(shop.getProfit().subtract(dutyProfit.getProfit())); // 减掉之前的水额
        shop.setProfit(shop.getProfit().add(newProfit));
        shopService.update(shop);

        DomainUtil.copyNotNullProperties(updateInput, dutyProfit);
        dutyProfit.setProfit(newProfit);
        this.update(dutyProfit);

        return dutyProfit;
    }

    @Transactional
    @Override
    public void cascadeDelete(DutyProfit dutyProfit) {
        BigDecimal profit = countProfitWithCards(dutyProfit.getCard1Count(), dutyProfit.getCard5Count(), dutyProfit.getCard10Count());

        Duty duty = dutyProfit.getDuty();
        duty.setProfit(duty.getProfit().subtract(profit));
        dutyService.update(duty);

        Shop shop = duty.getShop();
        shop.setProfit(shop.getProfit().subtract(profit));
        shopService.update(shop);

        this.delete(dutyProfit);
    }

    private BigDecimal countProfitWithCards(BigDecimal card1Count, BigDecimal card5Count, BigDecimal card10Count){
        BigDecimal profit = card1Count.multiply(BigDecimal.TEN);
        profit = profit.add(card5Count.multiply(BigDecimal.valueOf(50)));
        profit = profit.add(card10Count.multiply(BigDecimal.valueOf(100)));

        return profit;
    }
}
