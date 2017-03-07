package com.i1.tde.service.query;

import com.i1.base.service.query.PageableQuery;
import com.i1.tde.domain.DutyProfit;
import org.apache.commons.lang.StringUtils;
import org.torpedoquery.jpa.OnGoingLogicalCondition;
import org.torpedoquery.jpa.Query;

import java.util.ArrayList;
import java.util.List;

import static org.torpedoquery.jpa.Torpedo.*;

/**
 * Created by Sai on 2017/3/7.
 */
public class DutyProfitQuery extends PageableQuery<DutyProfit> {
    String dutyUuid;

    public String getDutyUuid() {
        return dutyUuid;
    }

    public void setDutyUuid(String dutyUuid) {
        this.dutyUuid = dutyUuid;
    }

    @Override
    public Query<DutyProfit> buildQuery() {
        DutyProfit from = from(DutyProfit.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

        if (StringUtils.isNotBlank(dutyUuid)) {
            conditions.add(condition(from.getDuty().getUuid()).eq(dutyUuid));
        }

        if (!conditions.isEmpty()) {
            where(and(conditions));
        }

        return select(from);
    }
}
