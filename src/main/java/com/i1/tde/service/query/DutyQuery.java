package com.i1.tde.service.query;


import com.i1.base.service.query.PageableQuery;
import com.i1.tde.domain.Duty;
import org.apache.commons.lang3.StringUtils;
import org.springframework.format.annotation.DateTimeFormat;
import org.torpedoquery.jpa.OnGoingLogicalCondition;
import org.torpedoquery.jpa.Query;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.torpedoquery.jpa.Torpedo.*;

/**
 * Created by Sai on 2017/2/22.
 */
public class DutyQuery extends PageableQuery<Duty> {
    String name;
    String noShowSys;
    String active;
    private Date startDate;
    private Date endDate;
    String uuid;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNoShowSys() {
        return noShowSys;
    }

    public void setNoShowSys(String noShowSys) {
        this.noShowSys = noShowSys;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
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

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }

    @Override
    public Query<Duty> buildQuery() {
        Duty from = from(Duty.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

        if (StringUtils.isNotBlank(noShowSys)) {
            conditions.add(condition(from.getActive()).neq(Duty.ACTIVE_SYS));
        }

        if (StringUtils.isNotBlank(active)) {
            conditions.add(condition(from.getActive()).eq(active));
        }

        if(startDate != null){
            conditions.add(condition(from.getStartTime()).gte(startDate));
        }

        if(endDate != null){
            conditions.add(condition(from.getStartTime()).lte(endDate));
        }

        if (StringUtils.isNotBlank(uuid)) {
            conditions.add(condition(from.getUuid()).eq(uuid));
        }

        if (!conditions.isEmpty()) {
            where(and(conditions));
        }

        //setSort("-createTime");
        ///setSort("-startTime");
        orderBy(desc(from.getCreateTime()));

        return select(from);
    }
}
