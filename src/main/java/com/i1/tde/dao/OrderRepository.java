package com.i1.tde.dao;

import com.i1.tde.domain.Duty;
import com.i1.tde.domain.Order;
import com.i1.tde.domain.OrderReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;

/**
 * Created by Sai on 2017/3/3.
 */
public interface OrderRepository extends JpaRepository<Order, String> {
//    @Query(value = "select type as billType, pay_type as payType, sum(amount) as amount from bill where duty_uuid = :dutyUuid group by type, pay_type", nativeQuery = true)
//    List<Map<String, Object>> countOrdersOfDuty(@Param("dutyUuid") String dutyUuid);

    @Query(value = "select max(no) from bill where duty_uuid = :dutyUuid", nativeQuery = true)
    Long findMaxNo(@Param("dutyUuid") String dutyUuid);
}
