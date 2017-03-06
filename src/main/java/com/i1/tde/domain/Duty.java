package com.i1.tde.domain;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Sai on 2017/3/2.
 */
@Entity
@Table(name = "duty")
public class Duty extends MaintainDomainObj {
    /**
     * 状态码 : 系统
     */
    public static final String ACTIVE_SYS = "-1";
    /**
     * 状态码 : 未开始
     */
    public static final String ACTIVE_0 = "0";
    /**
     * 状态码 : 已开始
     */
    public static final String ACTIVE_1 = "1";
    /**
     * 状态码 : 结束
     */
    public static final String ACTIVE_2 = "2";


    private BigDecimal cashAmount = BigDecimal.ZERO;
    private BigDecimal wxAmount = BigDecimal.ZERO;
    private BigDecimal zfbAmount = BigDecimal.ZERO;
    private BigDecimal cardAmount = BigDecimal.ZERO;
    private BigDecimal posAmount = BigDecimal.ONE.ZERO;
    private BigDecimal currentCashAmount = BigDecimal.ZERO;
    private BigDecimal currentWxAmount = BigDecimal.ZERO;
    private BigDecimal currentZfbAmount = BigDecimal.ZERO;
    private BigDecimal currentCardAmount = BigDecimal.ZERO;
    private BigDecimal currentPosAmount = BigDecimal.ZERO;
    private BigDecimal upAmount = BigDecimal.ZERO;
    private BigDecimal downAmount = BigDecimal.ZERO;
    private BigDecimal saleAmount = BigDecimal.ZERO;
    private BigDecimal payAmount = BigDecimal.ZERO;
    private BigDecimal card1Count = BigDecimal.ZERO;
    private BigDecimal card5Count = BigDecimal.ZERO;
    private BigDecimal card10Count = BigDecimal.ZERO;
    private Shop shop;
    private Date startTime;
    private Date endTime;
    private User owner;
    private User manager;
    private String active;
    private BigDecimal profit = BigDecimal.ZERO;

    @Column(name = "amount_cash")
    public BigDecimal getCashAmount() {
        return cashAmount;
    }

    public void setCashAmount(BigDecimal cashAmount) {
        this.cashAmount = cashAmount;
    }

    @Column(name = "amount_wx")
    public BigDecimal getWxAmount() {
        return wxAmount;
    }

    public void setWxAmount(BigDecimal wxAmount) {
        this.wxAmount = wxAmount;
    }

    @Column(name = "amount_zfb")
    public BigDecimal getZfbAmount() {
        return zfbAmount;
    }

    public void setZfbAmount(BigDecimal zfbAmount) {
        this.zfbAmount = zfbAmount;
    }

    @Column(name = "amount_pos")
    public BigDecimal getPosAmount() {
        return posAmount;
    }

    public void setPosAmount(BigDecimal posAmount) {
        this.posAmount = posAmount;
    }

    @Column(name = "amount_card")
    public BigDecimal getCardAmount() {
        return cardAmount;
    }

    public void setCardAmount(BigDecimal cardAmount) {
        this.cardAmount = cardAmount;
    }

    @Column(name = "current_amount_cash")
    public BigDecimal getCurrentCashAmount() {
        return currentCashAmount;
    }

    public void setCurrentCashAmount(BigDecimal currentCashAmount) {
        this.currentCashAmount = currentCashAmount;
    }

    @Column(name = "current_amount_wx")
    public BigDecimal getCurrentWxAmount() {
        return currentWxAmount;
    }

    public void setCurrentWxAmount(BigDecimal currentWxAmount) {
        this.currentWxAmount = currentWxAmount;
    }

    @Column(name = "current_amount_zfb")
    public BigDecimal getCurrentZfbAmount() {
        return currentZfbAmount;
    }

    public void setCurrentZfbAmount(BigDecimal currentZfbAmount) {
        this.currentZfbAmount = currentZfbAmount;
    }

    @Column(name = "current_amount_card")
    public BigDecimal getCurrentCardAmount() {
        return currentCardAmount;
    }

    public void setCurrentCardAmount(BigDecimal currentCardAmount) {
        this.currentCardAmount = currentCardAmount;
    }

    @Column(name = "current_amount_pos")
    public BigDecimal getCurrentPosAmount() {
        return currentPosAmount;
    }

    public void setCurrentPosAmount(BigDecimal currentPosAmount) {
        this.currentPosAmount = currentPosAmount;
    }

    @Column(name = "up_amount")
    public BigDecimal getUpAmount() {
        return upAmount;
    }

    public void setUpAmount(BigDecimal upAmount) {
        this.upAmount = upAmount;
    }

    @Column(name = "down_amount")
    public BigDecimal getDownAmount() {
        return downAmount;
    }

    public void setDownAmount(BigDecimal downAmount) {
        this.downAmount = downAmount;
    }

    @Column(name = "sale_amount")
    public BigDecimal getSaleAmount() {
        return saleAmount;
    }

    public void setSaleAmount(BigDecimal saleAmount) {
        this.saleAmount = saleAmount;
    }

    @Column(name = "pay_amount")
    public BigDecimal getPayAmount() {
        return payAmount;
    }

    public void setPayAmount(BigDecimal payAmount) {
        this.payAmount = payAmount;
    }

    @Column(name = "card1_count")
    public BigDecimal getCard1Count() {
        return card1Count;
    }

    public void setCard1Count(BigDecimal card1Count) {
        this.card1Count = card1Count;
    }

    @Column(name = "card5_count")
    public BigDecimal getCard5Count() {
        return card5Count;
    }

    public void setCard5Count(BigDecimal card5Count) {
        this.card5Count = card5Count;
    }

    @Column(name = "card10_count")
    public BigDecimal getCard10Count() {
        return card10Count;
    }

    public void setCard10Count(BigDecimal card10Count) {
        this.card10Count = card10Count;
    }

    @NotFound(action = NotFoundAction.EXCEPTION)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "shop_uuid")
    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }

    @Column(name = "start_time")
    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    @Column(name = "end_time")
    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_uuid")
    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @NotFound(action = NotFoundAction.IGNORE)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "manager_uuid")
    public User getManager() {
        return manager;
    }

    public void setManager(User manager) {
        this.manager = manager;
    }

    @Column(name = "active")
    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    @Column(name = "profit")
    public BigDecimal getProfit() {
        return profit;
    }

    public void setProfit(BigDecimal profit) {
        this.profit = profit;
    }
}
