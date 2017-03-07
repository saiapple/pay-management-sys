package com.i1.tde.web.dto;

import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/7.
 */
public class DutyProfitUpdateInput {
    private BigDecimal card1Count;
    private BigDecimal card5Count;
    private BigDecimal card10Count;
    private BigDecimal profit;
    private String tableNumber;

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

    public BigDecimal getProfit() {
        return profit;
    }

    public void setProfit(BigDecimal profit) {
        this.profit = profit;
    }

    public String getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(String tableNumber) {
        this.tableNumber = tableNumber;
    }
}
