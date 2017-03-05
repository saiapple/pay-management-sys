package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Shop;
import com.i1.tde.domain.ShopReport;
import com.i1.tde.service.ReportService;
import com.i1.tde.service.ShopService;
import com.i1.tde.service.query.ShopQuery;
import com.i1.tde.web.dto.ShopInput;
import com.i1.tde.web.dto.ShopUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Sai on 2016/3/5.
 */
@RestController
@RequestMapping("shops")
public class ShopController {
    private ShopService shopService;
    private ReportService reportService;

    @Autowired
    public void setShopService(ShopService dutyService) {
        this.shopService = dutyService;
    }

    @Autowired
    public void setReportService(ReportService reportService) {
        this.reportService = reportService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Shop> getAll(@Valid ShopQuery query) {
        return shopService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public Shop getOne(@PathVariable String uuid) {

        Shop shop = shopService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Shop.class, uuid));
        return shop;
    }

    @RequestMapping(value = "/{uuid}/report", method = RequestMethod.GET)
    public ShopReport getReport(@PathVariable String uuid) {
        Shop shop = shopService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Shop.class, uuid));
        ShopReport shopReport = reportService.generateShopReport(shop);
        return shopReport;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public Shop add(@Valid @RequestBody ShopInput dutyInput) throws BindException {
        Shop shop = new Shop();
        DomainUtil.copyNotNullProperties(dutyInput, shop);

        BindException exception = new BindException(shop, shop.getClass().getSimpleName());
        Validators.validateBean(exception, shop);

        if (exception.hasErrors()) {
            throw exception;
        }

        shopService.add(shop);

        return shop;
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.PATCH)
    public Shop update(@PathVariable String uuid, @Valid @RequestBody ShopUpdateInput dutyUpdateInput) throws BindException {
        Shop shop = shopService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Shop.class, uuid));
        DomainUtil.copyNotNullProperties(dutyUpdateInput, shop);

        BindException exception = new BindException(shop, Shop.class.getSimpleName());
        Validators.validateBean(exception, shop);

        if (exception.hasErrors()) {
            throw exception;
        }

        shopService.update(shop);

        return shop;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{uuid}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String uuid) {
        shopService.delete(uuid);
    }

}
