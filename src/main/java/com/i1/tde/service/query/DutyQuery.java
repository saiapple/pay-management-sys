package com.i1.tde.service.query;


import com.i1.base.service.query.PageableQuery;
import com.i1.tde.domain.Duty;
import org.apache.commons.lang3.StringUtils;
import org.torpedoquery.jpa.OnGoingLogicalCondition;
import org.torpedoquery.jpa.Query;

import java.util.ArrayList;
import java.util.List;

import static org.torpedoquery.jpa.Torpedo.*;

/**
 * Created by Sai on 2017/2/22.
 */
public class DutyQuery extends PageableQuery<Duty> {
    String name;
    String showSys;
    String active;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShowSys() {
        return showSys;
    }

    public void setShowSys(String showSys) {
        this.showSys = showSys;
    }

    public String getActive() {
        return active;
    }

    public void setActive(String active) {
        this.active = active;
    }

    @Override
    public Query<Duty> buildQuery() {
        Duty from = from(Duty.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

        if (!StringUtils.isNotBlank(showSys)) {
            conditions.add(condition(from.getActive()).neq(Duty.ACTIVE_SYS));
        }

        if (StringUtils.isNotBlank(active)) {
            conditions.add(condition(from.getActive()).eq(active));
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
