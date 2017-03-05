package com.i1.tde.dao;

import com.i1.tde.domain.OrderReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by Sai on 2017/3/5.
 */
public interface OrderReportRepository {//extends JpaRepository<OrderReport, String> {
//    @Query(value = "select type as billType, pay_type as payType, sum(amount) as amount from bill where duty_uuid = :dutyUuid group by type, pay_type", nativeQuery = true)
//    List<OrderReport> countOrdersOfDuty(@Param("dutyUuid") String dutyUuid);
}
