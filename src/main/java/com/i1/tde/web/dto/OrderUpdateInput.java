package com.i1.tde.web.dto;

import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/3.
 */
public class OrderUpdateInput {
    private BigDecimal amount;
    private String type;
    private String payType;
    private String comment;

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPayType() {
        return payType;
    }

    public void setPayType(String payType) {
        this.payType = payType;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
