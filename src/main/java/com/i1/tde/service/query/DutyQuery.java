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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Query<Duty> buildQuery() {
        Duty from = from(Duty.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

//        if (StringUtils.isNotBlank(name)) {
//            conditions.add(condition(from.getName()).eq(name));
//        }

        //setSort("-createTime");
        ///setSort("-startTime");
        orderBy(desc(from.getCreateTime()));

        return select(from);
    }
}
