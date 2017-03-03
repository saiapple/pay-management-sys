package com.i1.tde.service.query;

import com.i1.base.service.query.PageableQuery;
import com.i1.tde.domain.Order;
import org.torpedoquery.jpa.OnGoingLogicalCondition;
import org.torpedoquery.jpa.Query;

import java.util.ArrayList;
import java.util.List;

import static org.torpedoquery.jpa.Torpedo.from;
import static org.torpedoquery.jpa.Torpedo.select;

/**
 * Created by Sai on 2017/3/3.
 */
public class OrderQuery extends PageableQuery<Order> {
    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Query<Order> buildQuery() {
        Order from = from(Order.class);
        List<OnGoingLogicalCondition> conditions = new ArrayList<>();

//        if (StringUtils.isNotBlank(name)) {
//            conditions.add(condition(from.getName()).eq(name));
//        }

        return select(from);
    }
}
