package com.i1.tde.domain;

import javax.persistence.Entity;
import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/5.
 */
public class OrderReport {
    private String billType;
    private String payType;
    private BigDecimal amount;

    public String getBillType() {
        return billType;
    }

    public void setBillType(String billType) {
        this.billType = billType;
    }

    public String getPayType() {
        return payType;
    }

    public void setPayType(String payType) {
        this.payType = payType;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}
