package com.i1.tde.web.dto;

import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/3.
 */
public class OrderInput {
    public static final String SHOP_LEVEL_YES = "1";
    public static final String SHOP_LEVEL_NO = "0";

    private BigDecimal amount;
    private String type;
    private String payType;
    private String comment;
    private String dutyUuid;
    //private String isShopLevel;

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

    public String getDutyUuid() {
        return dutyUuid;
    }

    public void setDutyUuid(String dutyUuid) {
        this.dutyUuid = dutyUuid;
    }

//    public String getIsShopLevel() {
//        return isShopLevel;
//    }
//
//    public void setIsShopLevel(String isShopLevel) {
//        this.isShopLevel = isShopLevel;
//    }
}
