package com.i1.tde.service.query;

import com.i1.base.service.query.PageableQuery;
import com.i1.tde.domain.Shop;
import org.torpedoquery.jpa.OnGoingLogicalCondition;
import org.torpedoquery.jpa.Query;

import java.util.ArrayList;
import java.util.List;

import static org.torpedoquery.jpa.Torpedo.*;
import static org.torpedoquery.jpa.Torpedo.and;
import static org.torpedoquery.jpa.TorpedoFunction.desc;

/**
 * Created by Sai on 2017/3/5.
 */
public class ShopQuery extends PageableQuery<Shop> {
    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Query<Shop> buildQuery() {
        Shop from = from(Shop.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

//        if (StringUtils.isNotBlank(name)) {
//            conditions.add(condition(from.getName()).eq(name));
//        }

        if (!conditions.isEmpty()) {
            where(and(conditions));
        }

        //setSort("-createTime");
        ///setSort("-startTime");
        orderBy(desc(from.getCreateTime()));

        return select(from);
    }
}
