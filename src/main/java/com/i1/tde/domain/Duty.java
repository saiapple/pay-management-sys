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
    private BigDecimal amount;
    private BigDecimal card1Count;
    private BigDecimal card5Count;
    private BigDecimal card10Count;
    private Date startTime;
    private Date endTime;
    private User owner;
    private User manager;

    @Column(name = "amount")
    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
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
}
