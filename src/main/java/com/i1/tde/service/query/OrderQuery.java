package com.i1.tde.service.query;

import com.i1.base.service.query.PageableQuery;
import com.i1.tde.domain.Order;
import org.apache.commons.lang.StringUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.torpedoquery.jpa.OnGoingLogicalCondition;
import org.torpedoquery.jpa.Query;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.torpedoquery.jpa.Torpedo.*;

/**
 * Created by Sai on 2017/3/3.
 */
public class OrderQuery extends PageableQuery<Order> {
    private String name;
    private String dutyUuid;
    private String comment;
    private Date startDate;
    private Date endDate;
    private String type;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDutyUuid() {
        return dutyUuid;
    }

    public void setDutyUuid(String dutyUuid) {
        this.dutyUuid = dutyUuid;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public Query<Order> buildQuery() {
        Order from = from(Order.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

        if (StringUtils.isNotBlank(dutyUuid)) {
            conditions.add(condition(from.getDuty().getUuid()).eq(dutyUuid));
        }

        if (StringUtils.isNotBlank(type)) {
            conditions.add(condition(from.getType()).eq(type));
        }

        if (StringUtils.isNotBlank(comment)) {
            conditions.add(condition(from.getComment()).like().any(comment));
        }

        if(startDate != null){
            conditions.add(condition(from.getCreateTime()).gte(startDate));
        }

        if(endDate != null){
            conditions.add(condition(from.getCreateTime()).lte(endDate));
        }

        if (!conditions.isEmpty()) {
            where(and(conditions));
        }

        orderBy(desc(from.getCreateTime()));
        return select(from);
    }
}
