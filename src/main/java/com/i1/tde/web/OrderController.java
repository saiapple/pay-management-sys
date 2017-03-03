package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.Order;
import com.i1.tde.service.OrderService;
import com.i1.tde.service.query.OrderQuery;
import com.i1.tde.web.dto.OrderInput;
import com.i1.tde.web.dto.OrderUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Sai on 2017/3/3.
 */
@RestController
@RequestMapping("orders")
public class OrderController {
    private OrderService orderService;

    @Autowired
    public void setOrderService(OrderService orderService) {
        this.orderService = orderService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Order> getAll(@Valid OrderQuery query) {
        return orderService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public Order getRule(@PathVariable String uuid) {

        Order order = orderService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Order.class, uuid));
        return order;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public Order add(@Valid @RequestBody OrderInput orderInput) throws BindException {
        Order order = new Order();
        DomainUtil.copyNotNullProperties(orderInput, order);

        BindException exception = new BindException(order, order.getClass().getSimpleName());
        Validators.validateBean(exception, order);

        if (exception.hasErrors()) {
            throw exception;
        }

        orderService.add(order);

        return order;
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.PATCH)
    public Order update(@PathVariable String uuid, @Valid @RequestBody OrderUpdateInput orderUpdateInput) throws BindException {
        Order order = orderService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Order.class, uuid));
        DomainUtil.copyNotNullProperties(orderUpdateInput, order);

        BindException exception = new BindException(order, Order.class.getSimpleName());
        Validators.validateBean(exception, order);

        if (exception.hasErrors()) {
            throw exception;
        }

        orderService.update(order);

        return order;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{uuid}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String uuid) {
        orderService.delete(uuid);
    }

}
