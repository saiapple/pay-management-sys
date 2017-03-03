package com.i1.tde.web.dto;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Sai on 2017/2/28.
 */
public class DutyUpdateInput {
    private BigDecimal cashAmount;
    private BigDecimal wxAmount;
    private BigDecimal zfbAmount;
    private BigDecimal cardAmount;
    private BigDecimal currentCashAmount;
    private BigDecimal currentWxAmount;
    private BigDecimal currentZfbAmount;
    private BigDecimal currentCardAmount;
    private BigDecimal card1Count;
    private BigDecimal card5Count;
    private BigDecimal card10Count;
    private Date startTime;
    private Date endTime;
    private String ownerUuid;
    private String managerUuid;
    private String active;

    public BigDecimal getCashAmount() {
        return cashAmount;
    }

    public void setCashAmount(BigDecimal cashAmount) {
        this.cashAmount = cashAmount;
    }

    public BigDecimal getWxAmount() {
        return wxAmount;
    }

    public void setWxAmount(BigDecimal wxAmount) {
        this.wxAmount = wxAmount;
    }

    public BigDecimal getZfbAmount() {
        return zfbAmount;
    }

    public void setZfbAmount(BigDecimal zfbAmount) {
        this.zfbAmount = zfbAmount;
    }

    public BigDecimal getCardAmount() {
        return cardAmount;
    }

    public void setCardAmount(BigDecimal cardAmount) {
        this.cardAmount = cardAmount;
    }

    public BigDecimal getCurrentCashAmount() {
        return currentCashAmount;
    }

    public void setCurrentCashAmount(BigDecimal currentCashAmount) {
        this.currentCashAmount = currentCashAmount;
    }

    public BigDecimal getCurrentWxAmount() {
        return currentWxAmount;
    }

    public void setCurrentWxAmount(BigDecimal currentWxAmount) {
        this.currentWxAmount = currentWxAmount;
    }

    public BigDecimal getCurrentZfbAmount() {
        return currentZfbAmount;
    }

    public void setCurrentZfbAmount(BigDecimal currentZfbAmount) {
        this.currentZfbAmount = currentZfbAmount;
    }

    public BigDecimal getCurrentCardAmount() {
        return currentCardAmount;
    }

    public void setCurrentCardAmount(BigDecimal currentCardAmount) {
        this.currentCardAmount = currentCardAmount;
    }

    public BigDecimal getCard1Count() {
        return card1Count;
    }

    public void setCard1Count(BigDecimal card1Count) {
        this.card1Count = card1Count;
    }

    public BigDecimal getCard5Count() {
        return card5Count;
    }

    public void setCard5Count(BigDecimal card5Count) {
        this.card5Count = card5Count;
    }

    public BigDecimal getCard10Count() {
        return card10Count;
    }

    public void setCard10Count(BigDecimal card10Count) {
        this.card10Count = card10Count;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getOwnerUuid() {
        return ownerUuid;
    }

    public void setOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
    }

    public String getManagerUuid() {
        return managerUuid;
    }

    public void setManagerUuid(String managerUuid) {
        this.managerUuid = managerUuid;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }
}
