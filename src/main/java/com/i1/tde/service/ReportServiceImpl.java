package com.i1.tde.service;

import com.google.common.collect.ImmutableMap;
import com.i1.base.domain.DomainUtil;
import com.i1.tde.Constant;
import com.i1.tde.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

/**
 * Created by Sai on 2017/3/5.
 */
@Service
public class ReportServiceImpl implements ReportService {
//    private OrderRepository orderRepository;
//
//    @Autowired
//    private OrderReportRepository orderReportRepository;

    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(DataSource dataSource) {
        this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

//    @Autowired
//    public void setOrderRepository(OrderRepository orderRepository) {
//        this.orderRepository = orderRepository;
//    }


    @Override
    public ShopReport generateShopReport(Shop shop) {
        ShopReport shopReport = new ShopReport();
        DomainUtil.copyNotNullProperties(shop, shopReport);

        List<Map<String, Object>> orderReports  = jdbcTemplate.queryForList("select type as billType, pay_type as payType, sum(amount) as amount from bill group by type, pay_type", ImmutableMap.of());
        for(Map<String, Object> orderReportMap : orderReports){
            OrderReport orderReport = new OrderReport();
            orderReport.setAmount((BigDecimal) orderReportMap.get("amount"));
            orderReport.setBillType((String)orderReportMap.get("billType"));
            orderReport.setPayType((String)orderReportMap.get("payType"));
            countOrderIntoReport(shopReport, orderReportMap);
        }

        BigDecimal totalAmount = shop.getCashAmount()
                .add(shop.getWxAmount())
                .add(shop.getZfbAmount())
                .add(shop.getPosAmount())
                .add(shop.getCardAmount());
        shopReport.setTotalAmount(totalAmount);

        BigDecimal currentTotalAmount = shop.getCurrentCashAmount()
                .add(shop.getCurrentWxAmount())
                .add(shop.getCurrentZfbAmount())
                .add(shop.getCurrentPosAmount())
                .add(shop.getCurrentCardAmount());
        shopReport.setCurrentTotalAmount(currentTotalAmount);

        return shopReport;
    }

    @Override
    public DutyReport generateDutyReport(Duty duty) {
        ShopReport report = new ShopReport();
        DomainUtil.copyNotNullProperties(duty, report);

        List<Map<String, Object>> orderReports  = jdbcTemplate.queryForList("select type as billType, pay_type as payType, sum(amount) as amount from bill where duty_uuid = :dutyUuid group by type, pay_type", ImmutableMap.of("dutyUuid", duty.getUuid()));
        for(Map<String, Object> orderReportMap : orderReports){
            countOrderIntoReport(report, orderReportMap);
        }

        BigDecimal totalAmount = duty.getCashAmount()
                .add(duty.getWxAmount())
                .add(duty.getZfbAmount())
                .add(duty.getPosAmount())
                .add(duty.getCardAmount());
        report.setTotalAmount(totalAmount);

        BigDecimal currentTotalAmount = duty.getCurrentCashAmount()
                .add(duty.getCurrentWxAmount())
                .add(duty.getCurrentZfbAmount())
                .add(duty.getCurrentPosAmount())
                .add(duty.getCurrentCardAmount());
        report.setCurrentTotalAmount(currentTotalAmount);

        return report;
    }

    private void countOrderIntoReport(ShopReport report, Map<String, Object> orderReportMap){
        OrderReport orderReport = new OrderReport();
        orderReport.setAmount((BigDecimal) orderReportMap.get("amount"));
        orderReport.setBillType((String)orderReportMap.get("billType"));
        orderReport.setPayType((String)orderReportMap.get("payType"));

        // 上分
        if(Constant.PMS_BILL_TYPES.UP.equalsIgnoreCase(orderReport.getBillType())){
            switch (orderReport.getPayType()){
                case Constant.PMS_PAY_TYPES.CASH:
                    report.setCashUpAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.WX:
                    report.setWxUpAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.ZFB:
                    report.setZfbUpAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.POS:
                    report.setPosUpAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.LEND:
                    //report.setLendUpAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.CARD:
                    //report.setCardUpAmount(orderReport.getAmount());
                    break;

                default: throw new RuntimeException("无法识别的付款类型, PAY_TYPE: " + orderReport.getPayType());
            }
        }

        // 下分
        else if(Constant.PMS_BILL_TYPES.DOWN.equalsIgnoreCase(orderReport.getBillType())){
            switch (orderReport.getPayType()){
                case Constant.PMS_PAY_TYPES.CASH:
                    report.setCashDownAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.WX:
                    report.setWxDownAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.ZFB:
                    report.setZfbDownAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.POS:
                    report.setPosDownAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.LEND:
                    //report.setLendDownAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.CARD:
                    //report.setCardDownAmount(orderReport.getAmount());
                    break;

                default: throw new RuntimeException("无法识别的付款类型, PAY_TYPE: " + orderReport.getPayType());
            }
        }

        // 售卖
        else if(Constant.PMS_BILL_TYPES.SALE.equalsIgnoreCase(orderReport.getBillType())){
            switch (orderReport.getPayType()){
                case Constant.PMS_PAY_TYPES.CASH:
                    report.setCashSaleAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.WX:
                    report.setWxSaleAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.ZFB:
                    report.setZfbSaleAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.POS:
                    report.setPosSaleAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.LEND:
                    //report.setLendSaleAmount(orderReport.getAmount());
                    break;

                case Constant.PMS_PAY_TYPES.CARD:
                    report.setCardSaleAmount(orderReport.getAmount());
                    break;

                default: throw new RuntimeException("无法识别的付款类型, PAY_TYPE: " + orderReport.getPayType());
            }
        }
    }
}
