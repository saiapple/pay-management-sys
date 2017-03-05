package com.i1.tde.service;

import com.i1.tde.domain.Duty;
import com.i1.tde.domain.StatisticsReport;
import com.i1.tde.domain.Shop;

/**
 * Created by Sai on 2017/3/5.
 */
public interface ReportService {
    StatisticsReport generateReport(Duty duty);
    StatisticsReport generateReport(Shop shop);
}
