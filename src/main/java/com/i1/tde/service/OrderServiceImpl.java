package com.i1.tde.service;

import com.i1.base.domain.DomainUtil;
import com.i1.tde.Constant;
import com.i1.tde.dao.OrderRepository;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Order;
import com.i1.tde.domain.Shop;
import com.i1.tde.web.dto.OrderUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/3.
 */
@Service
public class OrderServiceImpl implements OrderService {
    private OrderRepository repository;
    private EntityManager entityManager;
    private DutyService dutyService;
    private ShopService shopService;

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
    public void cascadeAdd(Order order) {
        String billType = order.getType();
        String payType = order.getPayType();
        BigDecimal amount = order.getAmount();
        Duty duty = order.getDuty();
        Shop shop = duty.getShop();

        count(duty, shop, billType, payType, amount);

        this.add(order);
        dutyService.update(duty);
        shopService.update(shop);
    }

    @Transactional
    @Override
    public void cascadeUpdate(Order order, OrderUpdateInput orderUpdateInput) {
        Duty duty = order.getDuty();
        Shop shop = duty.getShop();

        rollback_count(duty, shop, order.getType(), order.getPayType(), order.getAmount());
        count(duty, shop, orderUpdateInput.getType(), orderUpdateInput.getPayType(), orderUpdateInput.getAmount());

        DomainUtil.copyNotNullProperties(orderUpdateInput, order);

        this.update(order);
        dutyService.update(duty);
        shopService.update(shop);
    }

    @Transactional
    @Override
    public void cascadeDelete(Order order) {
        String billType = order.getType();
        String payType = order.getPayType();
        BigDecimal amount = order.getAmount();
        Duty duty = order.getDuty();
        Shop shop = duty.getShop();

        rollback_count(duty, shop, billType, payType, amount);

        this.delete(order);
        dutyService.update(duty);
        shopService.update(shop);
    }

    /***
     * 根据当前操作计算更新各项金额
     * @param billType
     * @param payType
     * @param amount
     * @param duty
     * @param shop
     */
    private void count(Duty duty, Shop shop, String billType, String payType, BigDecimal amount) {
        switch (billType){
            case Constant.PMS_BILL_TYPES.UP:
                up(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.DOWN:
                down(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.SALE:
                sale(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.INCREASE_BYJ:
                increaseBYJ(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.DECREASE_BYJ:
                decreaseBYJ(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.PAY_SALARY:
            case Constant.PMS_BILL_TYPES.PAY_SMOKE:
            case Constant.PMS_BILL_TYPES.PAY_DRINK:
            case Constant.PMS_BILL_TYPES.PAY_VEGETABLES:
            case Constant.PMS_BILL_TYPES.PAY_RENT:
            case Constant.PMS_BILL_TYPES.PAY_OTHER:
                pay(payType, amount, duty, shop);
                break;

            default: throw new RuntimeException("不支持的操作类型，BILL_TYPE: " + billType);
        }
    }

    /***
     * 根据当前操作回滚各项金额
     * @param duty
     * @param shop
     * @param billType
     * @param payType
     * @param amount
     */
    private void rollback_count(Duty duty, Shop shop, String billType, String payType, BigDecimal amount) {
        switch (billType){
            case Constant.PMS_BILL_TYPES.UP:
                rollback_up(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.DOWN:
                rollback_down(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.SALE:
                rollback_sale(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.INCREASE_BYJ:
                rollback_increaseBYJ(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.DECREASE_BYJ:
                rollback_decreaseBYJ(payType, amount, duty, shop);
                break;
            case Constant.PMS_BILL_TYPES.PAY_SALARY:
            case Constant.PMS_BILL_TYPES.PAY_SMOKE:
            case Constant.PMS_BILL_TYPES.PAY_DRINK:
            case Constant.PMS_BILL_TYPES.PAY_VEGETABLES:
            case Constant.PMS_BILL_TYPES.PAY_RENT:
            case Constant.PMS_BILL_TYPES.PAY_OTHER:
                rollback_pay(payType, amount, duty, shop);
                break;

            default: throw new RuntimeException("不支持的操作类型，BILL_TYPE: " + billType);
        }
    }

    private void up(String payType, BigDecimal amount, Duty duty, Shop shop){
        //筹码
        duty.setCurrentCardAmount(duty.getCurrentCardAmount().subtract(amount));
        shop.setCurrentCardAmount(shop.getCurrentCardAmount().subtract(amount));

        //上分总额
        duty.setUpAmount(duty.getUpAmount().add(amount));
        shop.setUpAmount(shop.getUpAmount().add(amount));

        addCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void rollback_up(String payType, BigDecimal amount, Duty duty, Shop shop){
        //筹码
        duty.setCurrentCardAmount(duty.getCurrentCardAmount().add(amount));
        shop.setCurrentCardAmount(shop.getCurrentCardAmount().add(amount));

        //上分总额
        duty.setUpAmount(duty.getUpAmount().subtract(amount));
        shop.setUpAmount(shop.getUpAmount().subtract(amount));

        subtractCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void down(String payType, BigDecimal amount, Duty duty, Shop shop){
        //筹码
        duty.setCurrentCardAmount(duty.getCurrentCardAmount().add(amount));
        shop.setCurrentCardAmount(shop.getCurrentCardAmount().add(amount));

        //上分总额
        duty.setUpAmount(duty.getDownAmount().add(amount));
        shop.setUpAmount(shop.getDownAmount().add(amount));

        subtractCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void rollback_down(String payType, BigDecimal amount, Duty duty, Shop shop){
        //筹码
        duty.setCurrentCardAmount(duty.getCurrentCardAmount().subtract(amount));
        shop.setCurrentCardAmount(shop.getCurrentCardAmount().subtract(amount));

        //上分总额
        duty.setUpAmount(duty.getDownAmount().subtract(amount));
        shop.setUpAmount(shop.getDownAmount().subtract(amount));

        addCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void sale(String payType, BigDecimal amount, Duty duty, Shop shop){
        duty.setSaleAmount(duty.getSaleAmount().add(amount));
        shop.setSaleAmount(shop.getSaleAmount().add(amount));

        addCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void rollback_sale(String payType, BigDecimal amount, Duty duty, Shop shop){
        duty.setSaleAmount(duty.getSaleAmount().subtract(amount));
        shop.setSaleAmount(shop.getSaleAmount().subtract(amount));

        subtractCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    // 支出
    private void pay(String payType, BigDecimal amount, Duty duty, Shop shop){
        duty.setPayAmount(duty.getPayAmount().add(amount));
        shop.setPayAmount(shop.getPayAmount().add(amount));

        switch(payType){
            case Constant.PMS_PAY_TYPES.CASH:
                duty.setCurrentCashAmount(duty.getCashAmount().add(amount));
                shop.setCurrentCashAmount(shop.getCashAmount().add(amount));
                break;
            /*case Constant.PMS_PAY_TYPES.WX:
                duty.setCurrentWxAmount(duty.getCurrentWxAmount().add(amount));
                shop.setCurrentWxAmount(shop.getCurrentWxAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.ZFB:
                duty.setCurrentZfbAmount(duty.getCurrentZfbAmount().add(amount));
                shop.setCurrentZfbAmount(shop.getCurrentZfbAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.POS:
                duty.setCurrentPosAmount(duty.getCurrentPosAmount().add(amount));
                shop.setCurrentPosAmount(shop.getCurrentPosAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.LEND:
                break;
            case Constant.PMS_PAY_TYPES.CARD:
                break;*/

            default: throw new RuntimeException("不支持的支付类型, PAY_TYPE: " + payType);
        }
    }

    private void rollback_pay(String payType, BigDecimal amount, Duty duty, Shop shop){
        duty.setPayAmount(duty.getPayAmount().subtract(amount));
        shop.setPayAmount(shop.getPayAmount().subtract(amount));

        switch(payType){
            case Constant.PMS_PAY_TYPES.CASH:
                duty.setCurrentCashAmount(duty.getCashAmount().subtract(amount));
                shop.setCurrentCashAmount(shop.getCashAmount().subtract(amount));
                break;
            /*case Constant.PMS_PAY_TYPES.WX:
                duty.setCurrentWxAmount(duty.getCurrentWxAmount().add(amount));
                shop.setCurrentWxAmount(shop.getCurrentWxAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.ZFB:
                duty.setCurrentZfbAmount(duty.getCurrentZfbAmount().add(amount));
                shop.setCurrentZfbAmount(shop.getCurrentZfbAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.POS:
                duty.setCurrentPosAmount(duty.getCurrentPosAmount().add(amount));
                shop.setCurrentPosAmount(shop.getCurrentPosAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.LEND:
                break;
            case Constant.PMS_PAY_TYPES.CARD:
                break;*/

            default: throw new RuntimeException("不支持的支付类型, PAY_TYPE: " + payType);
        }
    }

    private void increaseBYJ(String payType, BigDecimal amount, Duty duty, Shop shop){
        // 更新备用金
        switch(payType){
            case Constant.PMS_PAY_TYPES.CASH:
                duty.setCashAmount(duty.getCashAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.WX:
                duty.setWxAmount(duty.getWxAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.ZFB:
                duty.setZfbAmount(duty.getZfbAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.POS:
                duty.setPosAmount(duty.getPosAmount().add(amount));
                break;
            /*case Constant.PMS_PAY_TYPES.LEND:
                break;*/
            case Constant.PMS_PAY_TYPES.CARD:
                duty.setCardAmount(duty.getCardAmount().add(amount));
                break;

            default: throw new RuntimeException("不支持的支付类型, PAY_TYPE: " + payType);
        }

        addCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void rollback_increaseBYJ(String payType, BigDecimal amount, Duty duty, Shop shop){
        decreaseBYJ(payType, amount, duty, shop);
    }

    private void decreaseBYJ(String payType, BigDecimal amount, Duty duty, Shop shop){
        // 更新备用金
        switch(payType){
            case Constant.PMS_PAY_TYPES.CASH:
                duty.setCashAmount(duty.getCashAmount().subtract(amount));
                break;
            case Constant.PMS_PAY_TYPES.WX:
                duty.setWxAmount(duty.getWxAmount().subtract(amount));
                break;
            case Constant.PMS_PAY_TYPES.ZFB:
                duty.setZfbAmount(duty.getZfbAmount().subtract(amount));
                break;
            case Constant.PMS_PAY_TYPES.POS:
                duty.setPosAmount(duty.getPosAmount().subtract(amount));
                break;
            /*case Constant.PMS_PAY_TYPES.LEND:
                break;*/
            case Constant.PMS_PAY_TYPES.CARD:
                duty.setCardAmount(duty.getCardAmount().subtract(amount));
                break;

            default: throw new RuntimeException("不支持的支付类型, PAY_TYPE: " + payType);
        }

        subtractCurrentAmount(payType, amount, duty, shop, isSysDuty(duty));
    }

    private void rollback_decreaseBYJ(String payType, BigDecimal amount, Duty duty, Shop shop){
        increaseBYJ(payType, amount, duty, shop);
    }

    private boolean isSysDuty(Duty duty){
        return Duty.ACTIVE_SYS.equalsIgnoreCase(duty.getActive());
    }

    /***
     * 进钱操作调用此更新当前剩余金额
     */
    private void addCurrentAmount(String payType, BigDecimal amount, Duty duty, Shop shop, boolean isInternalDuty) {
        switch(payType){
            case Constant.PMS_PAY_TYPES.CASH:
                duty.setCurrentCashAmount(duty.getCurrentCashAmount().add(amount));
                if(isInternalDuty)
                    shop.setCurrentCashAmount(shop.getCurrentCashAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.WX:
                duty.setCurrentWxAmount(duty.getCurrentWxAmount().add(amount));
                if(isInternalDuty)
                    shop.setCurrentWxAmount(shop.getCurrentWxAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.ZFB:
                duty.setCurrentZfbAmount(duty.getCurrentZfbAmount().add(amount));
                if(isInternalDuty)
                    shop.setCurrentZfbAmount(shop.getCurrentZfbAmount().add(amount));
                break;
            case Constant.PMS_PAY_TYPES.POS:
                duty.setCurrentPosAmount(duty.getCurrentPosAmount().add(amount));
                if(isInternalDuty)
                    shop.setCurrentPosAmount(shop.getCurrentPosAmount().add(amount));
                break;
            /*case Constant.PMS_PAY_TYPES.LEND:
                break;*/
            case Constant.PMS_PAY_TYPES.CARD:
                duty.setCurrentCardAmount(duty.getCurrentCardAmount().add(amount));
                if(isInternalDuty)
                    shop.setCurrentCardAmount(shop.getCurrentCardAmount().add(amount));
                break;

            default: throw new RuntimeException("不支持的支付类型, PAY_TYPE: " + payType);
        }
    }

    /***
     * 出钱操作调用此更新当前剩余金额
     */
    private void subtractCurrentAmount(String payType, BigDecimal amount, Duty duty, Shop shop, boolean isInternalDuty) {
        switch(payType){
            case Constant.PMS_PAY_TYPES.CASH:
                duty.setCurrentCashAmount(duty.getCurrentCashAmount().subtract(amount));
                if(isInternalDuty)
                    shop.setCurrentCashAmount(shop.getCurrentCashAmount().subtract(amount));
                break;
            case Constant.PMS_PAY_TYPES.WX:
                duty.setCurrentWxAmount(duty.getCurrentWxAmount().subtract(amount));
                if(isInternalDuty)
                    shop.setCurrentWxAmount(shop.getCurrentWxAmount().subtract(amount));
                break;
            case Constant.PMS_PAY_TYPES.ZFB:
                duty.setCurrentZfbAmount(duty.getCurrentZfbAmount().subtract(amount));
                if(isInternalDuty)
                    shop.setCurrentZfbAmount(shop.getCurrentZfbAmount().subtract(amount));
                break;
            case Constant.PMS_PAY_TYPES.POS:
                duty.setCurrentPosAmount(duty.getCurrentPosAmount().subtract(amount));
                if(isInternalDuty)
                    shop.setCurrentPosAmount(shop.getCurrentPosAmount().subtract(amount));
                break;
            /*case Constant.PMS_PAY_TYPES.LEND:
                break;*/
            case Constant.PMS_PAY_TYPES.CARD:
                duty.setCurrentCardAmount(duty.getCurrentCardAmount().subtract(amount));
                if(isInternalDuty)
                    shop.setCurrentCardAmount(shop.getCurrentCardAmount().subtract(amount));
                break;

            default: throw new RuntimeException("不支持的支付类型, PAY_TYPE: " + payType);
        }
    }
}
