package com.i1.tde.service;

import com.i1.base.service.CrudService;
import com.i1.base.service.QueryService;
import com.i1.tde.domain.Duty;
import com.i1.tde.web.dto.DutyUpdateInput;

import java.util.List;

/**
 * Created by Sai on 2016/12/6.
 */
public interface DutyService extends CrudService<Duty>, QueryService<Duty> {
    List<Duty> findByActive(String active);
    Duty findSysDuty();
    void cascadeUpdate(Duty duty, DutyUpdateInput dutyUpdateInput);
}
