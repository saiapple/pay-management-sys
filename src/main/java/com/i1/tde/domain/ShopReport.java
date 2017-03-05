package com.i1.tde.domain;

import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/5.
 */
public class ShopReport extends DutyReport {
    private BigDecimal payAmount = BigDecimal.ZERO;
    private BigDecimal cashPayAmount = BigDecimal.ZERO;

    @Override
    public BigDecimal getPayAmount() {
        return payAmount;
    }

    @Override
    public void setPayAmount(BigDecimal payAmount) {
        this.payAmount = payAmount;
    }

    @Override
    public BigDecimal getCashPayAmount() {
        return cashPayAmount;
    }

    @Override
    public void setCashPayAmount(BigDecimal cashPayAmount) {
        this.cashPayAmount = cashPayAmount;
    }
}
