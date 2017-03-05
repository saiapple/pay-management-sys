package com.i1.tde.service;

import com.i1.tde.domain.Duty;
import com.i1.tde.domain.DutyReport;
import com.i1.tde.domain.Shop;
import com.i1.tde.domain.ShopReport;

/**
 * Created by Sai on 2017/3/5.
 */
public interface ReportService {
    DutyReport generateDutyReport(Duty duty);
    ShopReport generateShopReport(Shop shop);
}
