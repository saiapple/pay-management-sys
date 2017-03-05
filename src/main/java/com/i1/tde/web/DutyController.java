package com.i1.tde.web;

import com.i1.base.domain.DomainUtil;
import com.i1.base.domain.validator.Validators;
import com.i1.base.service.exception.ResourceNotFoundException;
import com.i1.tde.domain.Duty;
import com.i1.tde.domain.StatisticsReport;
import com.i1.tde.service.ReportService;
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
    private ReportService dutyReportService;

    @Autowired
    public void setDutyService(DutyService dutyService) {
        this.dutyService = dutyService;
    }

    @Autowired
    public void setDutyReportService(ReportService dutyReportService) {
        this.dutyReportService = dutyReportService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Page<Duty> getAll(@Valid DutyQuery query) {
        return dutyService.findAll(query);
    }

    @RequestMapping(value = "/{uuid}", method = RequestMethod.GET)
    public Duty getOne(@PathVariable String uuid) {

        Duty rule = dutyService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, uuid));
        return rule;
    }

    @RequestMapping(value = "/{uuid}/report", method = RequestMethod.GET)
    public StatisticsReport getReport(@PathVariable String uuid) {
        Duty duty = dutyService.findOne(uuid).orElseThrow(() -> new ResourceNotFoundException(Duty.class, uuid));
        StatisticsReport dutyReport = dutyReportService.generateReport(duty);
        return dutyReport;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(method = RequestMethod.POST)
    public Duty add(@Valid @RequestBody DutyInput dutyInput) throws BindException {
        Duty duty = new Duty();
        DomainUtil.copyNotNullProperties(dutyInput, duty);

        duty.setCurrentCashAmount(duty.getCashAmount());
        duty.setCurrentCardAmount(duty.getCardAmount());
        duty.setCurrentPosAmount(duty.getPosAmount());
        duty.setCurrentWxAmount(duty.getWxAmount());
        duty.setCurrentZfbAmount(duty.getZfbAmount());

        BindException exception = new BindException(duty, duty.getClass().getSimpleName());
        Validators.validateBean(exception, duty);

        if (exception.hasErrors()) {
            throw exception;
        }

        dutyService.add(duty);

        return duty;
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
