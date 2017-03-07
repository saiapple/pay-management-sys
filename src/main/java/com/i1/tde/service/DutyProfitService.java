package com.i1.tde.service;

import com.i1.base.service.CrudService;
import com.i1.base.service.QueryService;
import com.i1.tde.domain.DutyProfit;
import com.i1.tde.web.dto.DutyProfitUpdateInput;

/**
 * Created by Sai on 2017/3/7.
 */
public interface DutyProfitService extends CrudService<DutyProfit>, QueryService<DutyProfit> {
    DutyProfit cascadeAdd(DutyProfit dutyProfit);
    DutyProfit cascadeUpdate(DutyProfit dutyProfit, DutyProfitUpdateInput input);
    void cascadeDelete(DutyProfit dutyProfit);
}
