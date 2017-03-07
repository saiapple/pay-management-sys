package com.i1.tde.service;

import com.i1.base.service.CrudService;
import com.i1.base.service.QueryService;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Order;
import com.i1.tde.web.dto.OrderInput;
import com.i1.tde.web.dto.OrderUpdateInput;
import org.springframework.validation.BindException;

import java.util.List;

/**
 * Created by Sai on 2017/3/3.
 */
public interface OrderService extends CrudService<Order>, QueryService<Order> {
    List<Order> cascadeAdd(List<OrderInput> orderInputList) throws BindException;
    void cascadeUpdate(Order order, OrderUpdateInput orderUpdateInput);
    void cascadeDelete(Order order);
}
