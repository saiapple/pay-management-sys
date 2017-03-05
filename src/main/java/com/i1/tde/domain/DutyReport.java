package com.i1.tde.domain;

import javax.persistence.Entity;
import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/5.
 */
public class DutyReport {
    private BigDecimal totalAmount = BigDecimal.ZERO;
    private BigDecimal cashAmount = BigDecimal.ZERO;
    private BigDecimal wxAmount = BigDecimal.ZERO;
    private BigDecimal zfbAmount = BigDecimal.ZERO;
    private BigDecimal cardAmount = BigDecimal.ZERO;
    private BigDecimal posAmount = BigDecimal.ONE.ZERO;

    private BigDecimal currentTotalAmount = BigDecimal.ZERO;
    private BigDecimal currentCashAmount = BigDecimal.ZERO;
    private BigDecimal currentWxAmount = BigDecimal.ZERO;
    private BigDecimal currentZfbAmount = BigDecimal.ZERO;
    private BigDecimal currentCardAmount = BigDecimal.ZERO;
    private BigDecimal currentPosAmount = BigDecimal.ZERO;

    private BigDecimal upAmount = BigDecimal.ZERO;
    private BigDecimal cashUpAmount = BigDecimal.ZERO;
    private BigDecimal wxUpAmount = BigDecimal.ZERO;
    private BigDecimal zfbUpAmount = BigDecimal.ZERO;
    //private BigDecimal cardUpAmount = BigDecimal.ZERO;
    private BigDecimal posUpAmount = BigDecimal.ZERO;

    private BigDecimal downAmount = BigDecimal.ZERO;
    private BigDecimal cashDownAmount = BigDecimal.ZERO;
    private BigDecimal wxDownAmount = BigDecimal.ZERO;
    private BigDecimal zfbDownAmount = BigDecimal.ZERO;
    //private BigDecimal cardUpAmount = BigDecimal.ZERO;
    private BigDecimal posDownAmount = BigDecimal.ZERO;


    private BigDecimal saleAmount = BigDecimal.ZERO;
    private BigDecimal cashSaleAmount = BigDecimal.ZERO;
    private BigDecimal wxSaleAmount = BigDecimal.ZERO;
    private BigDecimal zfbSaleAmount = BigDecimal.ZERO;
    private BigDecimal cardSaleAmount = BigDecimal.ZERO;
    private BigDecimal posSaleAmount = BigDecimal.ZERO;

    private BigDecimal payAmount = BigDecimal.ZERO;
    private BigDecimal cashPayAmount = BigDecimal.ZERO;
    private BigDecimal wxPayAmount = BigDecimal.ZERO;
    private BigDecimal zfbPayAmount = BigDecimal.ZERO;
    //private BigDecimal cardPayAmount = BigDecimal.ZERO;
    private BigDecimal posPayAmount = BigDecimal.ZERO;

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal totalAmount) {
        this.totalAmount = totalAmount;
    }

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

    public BigDecimal getPosAmount() {
        return posAmount;
    }

    public void setPosAmount(BigDecimal posAmount) {
        this.posAmount = posAmount;
    }

    public BigDecimal getCurrentTotalAmount() {
        return currentTotalAmount;
    }

    public void setCurrentTotalAmount(BigDecimal currentTotalAmount) {
        this.currentTotalAmount = currentTotalAmount;
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

    public BigDecimal getCurrentPosAmount() {
        return currentPosAmount;
    }

    public void setCurrentPosAmount(BigDecimal currentPosAmount) {
        this.currentPosAmount = currentPosAmount;
    }

    public BigDecimal getUpAmount() {
        return upAmount;
    }

    public void setUpAmount(BigDecimal upAmount) {
        this.upAmount = upAmount;
    }

    public BigDecimal getCashUpAmount() {
        return cashUpAmount;
    }

    public void setCashUpAmount(BigDecimal cashUpAmount) {
        this.cashUpAmount = cashUpAmount;
    }

    public BigDecimal getWxUpAmount() {
        return wxUpAmount;
    }

    public void setWxUpAmount(BigDecimal wxUpAmount) {
        this.wxUpAmount = wxUpAmount;
    }

    public BigDecimal getZfbUpAmount() {
        return zfbUpAmount;
    }

    public void setZfbUpAmount(BigDecimal zfbUpAmount) {
        this.zfbUpAmount = zfbUpAmount;
    }

    public BigDecimal getPosUpAmount() {
        return posUpAmount;
    }

    public void setPosUpAmount(BigDecimal posUpAmount) {
        this.posUpAmount = posUpAmount;
    }

    public BigDecimal getDownAmount() {
        return downAmount;
    }

    public void setDownAmount(BigDecimal downAmount) {
        this.downAmount = downAmount;
    }

    public BigDecimal getCashDownAmount() {
        return cashDownAmount;
    }

    public void setCashDownAmount(BigDecimal cashDownAmount) {
        this.cashDownAmount = cashDownAmount;
    }

    public BigDecimal getWxDownAmount() {
        return wxDownAmount;
    }

    public void setWxDownAmount(BigDecimal wxDownAmount) {
        this.wxDownAmount = wxDownAmount;
    }

    public BigDecimal getZfbDownAmount() {
        return zfbDownAmount;
    }

    public void setZfbDownAmount(BigDecimal zfbDownAmount) {
        this.zfbDownAmount = zfbDownAmount;
    }

    public BigDecimal getPosDownAmount() {
        return posDownAmount;
    }

    public void setPosDownAmount(BigDecimal posDownAmount) {
        this.posDownAmount = posDownAmount;
    }

    public BigDecimal getSaleAmount() {
        return saleAmount;
    }

    public void setSaleAmount(BigDecimal saleAmount) {
        this.saleAmount = saleAmount;
    }

    public BigDecimal getCashSaleAmount() {
        return cashSaleAmount;
    }

    public void setCashSaleAmount(BigDecimal cashSaleAmount) {
        this.cashSaleAmount = cashSaleAmount;
    }

    public BigDecimal getWxSaleAmount() {
        return wxSaleAmount;
    }

    public void setWxSaleAmount(BigDecimal wxSaleAmount) {
        this.wxSaleAmount = wxSaleAmount;
    }

    public BigDecimal getZfbSaleAmount() {
        return zfbSaleAmount;
    }

    public void setZfbSaleAmount(BigDecimal zfbSaleAmount) {
        this.zfbSaleAmount = zfbSaleAmount;
    }

    public BigDecimal getCardSaleAmount() {
        return cardSaleAmount;
    }

    public void setCardSaleAmount(BigDecimal cardSaleAmount) {
        this.cardSaleAmount = cardSaleAmount;
    }

    public BigDecimal getPosSaleAmount() {
        return posSaleAmount;
    }

    public void setPosSaleAmount(BigDecimal posSaleAmount) {
        this.posSaleAmount = posSaleAmount;
    }

    public BigDecimal getPayAmount() {
        return payAmount;
    }

    public void setPayAmount(BigDecimal payAmount) {
        this.payAmount = payAmount;
    }

    public BigDecimal getCashPayAmount() {
        return cashPayAmount;
    }

    public void setCashPayAmount(BigDecimal cashPayAmount) {
        this.cashPayAmount = cashPayAmount;
    }

    public BigDecimal getWxPayAmount() {
        return wxPayAmount;
    }

    public void setWxPayAmount(BigDecimal wxPayAmount) {
        this.wxPayAmount = wxPayAmount;
    }

    public BigDecimal getZfbPayAmount() {
        return zfbPayAmount;
    }

    public void setZfbPayAmount(BigDecimal zfbPayAmount) {
        this.zfbPayAmount = zfbPayAmount;
    }

    public BigDecimal getPosPayAmount() {
        return posPayAmount;
    }

    public void setPosPayAmount(BigDecimal posPayAmount) {
        this.posPayAmount = posPayAmount;
    }
}
