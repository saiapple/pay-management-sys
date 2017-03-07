package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.DutyProfit;
import com.i1.tde.service.DutyProfitService;
import com.i1.tde.service.DutyService;
import com.i1.tde.service.query.DutyProfitQuery;
import com.i1.tde.web.dto.DutyProfitInput;
import com.i1.tde.web.dto.DutyProfitUpdateInput;
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
@RequestMapping("duties/{dutyUuid}/profits")
public class DutyProfitController {
    private DutyProfitService dutyProfitService;
    private DutyService dutyService;

    @Autowired
    public void setDutyProfitService(DutyProfitService dutyService) {
        this.dutyProfitService = dutyService;
    }

    @Autowired
    public void setDutyService(DutyService dutyService) {
        this.dutyService = dutyService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<DutyProfit> getAll(@PathVariable String dutyUuid, @Valid DutyProfitQuery query) {
        return dutyProfitService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public DutyProfit getOne(@PathVariable String dutyUuid, @PathVariable String uuid) {
        dutyService.findOne(dutyUuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, dutyUuid));

        DutyProfit dutyProfit = dutyProfitService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(DutyProfit.class, uuid));
        return dutyProfit;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public DutyProfit add(@PathVariable String dutyUuid, @Valid @RequestBody DutyProfitInput dutyInput) throws BindException {
        Duty duty = dutyService.findOne(dutyUuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, dutyUuid));

        DutyProfit dutyProfit = new DutyProfit();
        dutyProfit.setDuty(duty);
        DomainUtil.copyNotNullProperties(dutyInput, dutyProfit);

        BindException exception = new BindException(dutyProfit, dutyProfit.getClass().getSimpleName());
        Validators.validateBean(exception, dutyProfit);

        if (exception.hasErrors()) {
            throw exception;
        }

        dutyProfitService.cascadeAdd(dutyProfit);

        return dutyProfit;
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.PATCH)
    public DutyProfit update(@PathVariable String dutyUuid, @PathVariable String uuid, @Valid @RequestBody DutyProfitUpdateInput dutyUpdateInput) throws BindException {
        Duty duty = dutyService.findOne(dutyUuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, dutyUuid));

        DutyProfit dutyProfit = dutyProfitService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(DutyProfit.class, uuid));
        dutyProfit.setDuty(duty);
//        DomainUtil.copyNotNullProperties(dutyUpdateInput, dutyProfit);

        BindException exception = new BindException(dutyProfit, DutyProfit.class.getSimpleName());
        Validators.validateBean(exception, dutyProfit);

        if (exception.hasErrors()) {
            throw exception;
        }

        dutyProfitService.cascadeUpdate(dutyProfit, dutyUpdateInput);

        return dutyProfit;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{uuid}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String dutyUuid, @PathVariable String uuid) {
        Duty duty = dutyService.findOne(dutyUuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, dutyUuid));
        DutyProfit dutyProfit = dutyProfitService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(DutyProfit.class, uuid));
        dutyProfitService.cascadeDelete(dutyProfit);
    }

}
