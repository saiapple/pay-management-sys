package com.i1.tde.service;

import com.i1.base.service.CrudService;
import com.i1.base.service.QueryService;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Order;

/**
 * Created by Sai on 2017/3/3.
 */
public interface OrderService extends CrudService<Order>, QueryService<Order> {
    void cascadeAdd(Order order);
    void cascadeUpdate(Order order);
    void cascadeDelete(Order order);
}
