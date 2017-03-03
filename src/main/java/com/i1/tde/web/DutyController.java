package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.Duty;
import com.i1.tde.service.DutyService;
import com.i1.tde.service.query.DutyQuery;
import com.i1.tde.web.dto.DutyInput;
import com.i1.tde.web.dto.DutyUpdateInput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by Sai on 2016/12/6.
 */
@RestController
@RequestMapping("duties")
public class DutyController {
    private DutyService dutyService;

    @Autowired
    public void setDutyService(DutyService dutyService) {
        this.dutyService = dutyService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Duty> getAll(@Valid DutyQuery query) {
        return dutyService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public Duty getRule(@PathVariable String uuid) {

        Duty rule = dutyService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, uuid));
        return rule;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public Duty add(@Valid @RequestBody DutyInput dutyInput) throws BindException {
        Duty rule = new Duty();
        DomainUtil.copyNotNullProperties(dutyInput, rule);

        BindException exception = new BindException(rule, rule.getClass().getSimpleName());
        Validators.validateBean(exception, rule);

        if (exception.hasErrors()) {
            throw exception;
        }

        dutyService.add(rule);

        return rule;
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.PATCH)
    public Duty update(@PathVariable String uuid, @Valid @RequestBody DutyUpdateInput dutyUpdateInput) throws BindException {
        Duty rule = dutyService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, uuid));
        DomainUtil.copyNotNullProperties(dutyUpdateInput, rule);

        BindException exception = new BindException(rule, Duty.class.getSimpleName());
        Validators.validateBean(exception, rule);

        if (exception.hasErrors()) {
            throw exception;
        }

        dutyService.update(rule);

        return rule;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(value = "/{uuid}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String uuid) {
        dutyService.delete(uuid);
    }

}
