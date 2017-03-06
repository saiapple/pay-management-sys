angular.module('IOne-Production').service('OrderService', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, filter) {
        var type = filter.type == 0 ? '' : filter.type;
        var url = 'orders?size=' + sizePerPage
            + '&page=' + page;

        /*if (confirm !== '') {
            url = url + '&confirm=' + confirm;
        }
        if (status !== '') {
            url = url + '&status=' + status;
        }
        if (filter.no != null) {
            url = url + '&no=' + filter.no;
        }
        if (filter.name != null) {
            url = url + '&name=' + filter.name;
        }*/
        if (filter.dutyUuid != null) {
            url = url + '&dutyUuid=' + filter.dutyUuid;
        }
        if (filter.type != null) {
            url = url + '&type=' + type;
        }
        if (filter.searchKeyWord != null) {
            url = url + '&comment=' + filter.searchKeyWord;
        }
        if (filter.startDate !== null && filter.startDate !== undefined) {
            var startDate = new Date(filter.startDate);
            startDate = moment(startDate).format('YYYY-MM-DD 00:00:00');
            url = url + '&startDate=' + startDate;
        }
        if (filter.endDate !== null && filter.endDate !== undefined) {
            var endDate = new Date(filter.endDate);
            endDate = moment(endDate).format('YYYY-MM-DD 23:59:59');
            url = url + '&endDate=' + endDate;
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.modify = function (uuid, departmentUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/orders/' + uuid, departmentUpdateInput);
    };

    this.add = function (departmentInput) {
        return $http.post(Constant.BACKEND_BASE + '/orders/', departmentInput);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/orders/' + uuid);
    };

    this.getForParent = function (parentUuid) {
        return $http.get(Constant.BACKEND_BASE + '/orders?parentUuid=' + parentUuid);
    };
});