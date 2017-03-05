package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Order;
import com.i1.tde.service.DutyService;
import com.i1.tde.service.OrderService;
import com.i1.tde.service.query.OrderQuery;
import com.i1.tde.web.dto.OrderInput;
import com.i1.tde.web.dto.OrderUpdateInput;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by Sai on 2017/3/3.
 */
@RestController
@RequestMapping("orders")
public class OrderController {
    private OrderService orderService;
    private DutyService dutyService;

    @Autowired
    public void setOrderService(OrderService orderService) {
        this.orderService = orderService;
    }

    @Autowired
    public void setDutyService(DutyService dutyService) {
        this.dutyService = dutyService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Order> getAll(@Valid OrderQuery query) {
        if(!StringUtils.isNotBlank(query.getDutyUuid())){
            List<Duty> dutyList = dutyService.findByActive(Duty.ACTIVE_1);
            if(dutyList == null || dutyList.size() != 1){
                throw new RuntimeException("无法获取当前班次，请检查是否有正在进行中的班次");
            }
            query.setDutyUuid(dutyList.get(0).getUuid());
        }
        return orderService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public Order getOne(@PathVariable String uuid) {
        Order order = orderService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Order.class, uuid));
        return order;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public Order add(@Valid @RequestBody OrderInput orderInput) throws BindException {
        Order order = new Order();
        DomainUtil.copyNotNullProperties(orderInput, order);

        Duty duty;
        if(OrderInput.SHOP_LEVEL_YES.equalsIgnoreCase(orderInput.getIsShopLevel())){
            duty = dutyService.findSysDuty();
        } else {
            duty = dutyService.findOne(orderInput.getDutyUuid()).orElseThrow(() -> new ResourceNotFoundException(Duty.class, orderInput.getDutyUuid()));
        }
        order.setDuty(duty);

        BindException exception = new BindException(order, order.getClass().getSimpleName());
        Validators.validateBean(exception, order);

        if (exception.hasErrors()) {
            throw exception;
        }

        orderService.cascadeAdd(order);

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

        //orderService.update(order);
        orderService.cascadeAdd(order);

        return order;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{uuid}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String uuid) {
        Order order = orderService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Order.class, uuid));
        orderService.cascadeDelete(order);
    }

}
