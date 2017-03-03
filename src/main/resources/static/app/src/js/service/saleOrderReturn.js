angular.module('IOne-Production').service('PsoOrderReturnMaster', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, filter) {
        var confirm = filter.confirm == 0 ? '' : filter.confirm;
        var transferPsoFlag = filter.transferPsoFlag == 0 ? '' : filter.transferPsoFlag;
        var status = filter.status == 0 ? '' : filter.status;
        //默认参数有confirm taobaoStatus
        var url = 'orders?size=' + sizePerPage
            + '&page=' + page
            + '&onlyReturn=1';

        if (confirm !== '') {
            url = url + '&returnOrderDetailConfirm=' + confirm;
        }
        if (transferPsoFlag !== '') {
            url = url + '&returnOrderDetailTransferPsoFlag=' + transferPsoFlag;
        }
        if (status !== '') {
            url = url + '&returnOrderDetailStatus=' + status;
        }
        if (filter.no !== null && filter.no !== undefined) {
            url = url + '&orderMasterNo=' + filter.no;
        }
        if (filter.employeeName !== null && filter.employeeName !== undefined) {
            url = url + '&employeeName=' + filter.employeeName;
        }
        if (filter.employeeNo !== null && filter.employeeNo !== undefined) {
            url = url + '&employeeNo=' + filter.employeeNo;
        }
        if (filter.customerName !== null && filter.customerName !== undefined) {
            url = url + '&customerName=' + filter.customerName;
        }
        if (filter.startOrderDate !== null && filter.startOrderDate !== undefined) {
            var startOrderDate = new Date(filter.startOrderDate);
            startOrderDate = moment(startOrderDate).format('YYYY-MM-DD 00:00:00');
            url = url + '&orderDateBegin=' + startOrderDate;
        }
        if (filter.endOrderDate !== null && filter.endOrderDate !== undefined) {
            var endOrderDate = new Date(filter.endOrderDate);
            endOrderDate = moment(endOrderDate).format('YYYY-MM-DD 23:59:59');
            url = url + '&orderDateEnd=' + endOrderDate;
        }

        //console.info(Constant.BACKEND_BASE + url);
        return $http.get(Constant.BACKEND_BASE + url);
    };

    ////审核
    //this.confirm = function (uuids) {
    //    return $http.patch(Constant.BACKEND_BASE + '/orders/' + uuids, {'modifyOnly': '1', 'confirm': '2'});
    //};
    //
    ////抛转
    //this.transfer = function (uuids) {
    //    return $http.patch(Constant.BACKEND_BASE + '/orders/' + uuids, {
    //        'modifyOnly': '1',
    //        'transferPsoFlag': '2'
    //    });
    //};
    //
    //this.modify = function (uuid, orderChangeUpdateInput) {
    //    return $http.patch(Constant.BACKEND_BASE + '/orders/' + uuid, orderChangeUpdateInput);
    //};
});


angular.module('IOne-Production').service('PsoOrderReturnDetail', function ($http, Constant) {
    this.get = function (masterUuid) {
        return $http.get(Constant.BACKEND_BASE + '/orders/' + masterUuid + '/returnOrders');
    };

    //this.modify = function (masterUuid, uuid, orderChangeDetailUpdateInput) {
    //    return $http.patch(Constant.BACKEND_BASE + '/orders/' + masterUuid + '/returnOrders/' + uuid, orderChangeDetailUpdateInput);
    //};

    this.confirm = function (masterUuid, uuids, val) {
        return $http.patch(Constant.BACKEND_BASE + '/orders/' + masterUuid + '/returnOrders/' + uuids, {
            'modifyOnly': '1',
            'confirm': val
        });
    };

    this.transfer = function (masterUuid, uuids) {
        return $http.patch(Constant.BACKEND_BASE + '/orders/' + masterUuid + '/returnOrders/' + uuids, {
            'modifyOnly': '1',
            'transferReturnFlag': '1'
        });
    };
});

angular.module('IOne-Production').service('PsoOrderReturnExtendDetail', function ($http, Constant) {
    this.get = function (masterUuid, returnDetailUuid) {
        return $http.get(Constant.BACKEND_BASE + '/orders/' + masterUuid + '/returnOrders/' + returnDetailUuid + "/extends");
    };
});