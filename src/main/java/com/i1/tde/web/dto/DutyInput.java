package com.i1.tde.web.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.i1.tde.domain.User;
import org.hibernate.validator.constraints.NotBlank;

import java.math.BigDecimal;
import java.util.Date;

/**
 * Created by Sai on 2017/2/28.
 */
public class DutyInput {
    private BigDecimal cashAmount;
    private BigDecimal wxAmount;
    private BigDecimal zfbAmount;
    private BigDecimal cardAmount;
    private BigDecimal posAmount;
    private String shopUuid;

    //@NotBlank
    public BigDecimal getCashAmount() {
        return cashAmount;
    }

    public void setCashAmount(BigDecimal cashAmount) {
        this.cashAmount = cashAmount;
    }

    //@NotBlank
    public BigDecimal getWxAmount() {
        return wxAmount;
    }

    public void setWxAmount(BigDecimal wxAmount) {
        this.wxAmount = wxAmount;
    }

    //@NotBlank
    public BigDecimal getZfbAmount() {
        return zfbAmount;
    }

    public void setZfbAmount(BigDecimal zfbAmount) {
        this.zfbAmount = zfbAmount;
    }

    //@NotBlank
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

    public String getShopUuid() {
        return shopUuid;
    }

    public void setShopUuid(String shopUuid) {
        this.shopUuid = shopUuid;
    }
}
