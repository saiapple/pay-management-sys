package com.i1.tde.domain;

import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Sai on 2017/3/7.
 */
@Entity
@Table(name = "duty_profit")
public class DutyProfit extends MaintainDomainObj {
    private Duty duty;
    private BigDecimal card1Count;
    private BigDecimal card5Count;
    private BigDecimal card10Count;
    private BigDecimal profit;
    private String tableNumber;

    @NotFound(action = NotFoundAction.EXCEPTION)
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "duty_uuid")
    public Duty getDuty() {
        return duty;
    }

    public void setDuty(Duty duty) {
        this.duty = duty;
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

    @Column(name = "profit")
    public BigDecimal getProfit() {
        return profit;
    }

    public void setProfit(BigDecimal profit) {
        this.profit = profit;
    }

    @Column(name = "table_number")
    public String getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(String tableNumber) {
        this.tableNumber = tableNumber;
    }
}
