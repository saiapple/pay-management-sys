angular.module('IOne-Production').service('DeliverWay', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, filter) {
        var confirm = filter.confirm == 0 ? '' : filter.confirm;
        var status = filter.status == 0 ? '' : filter.status;
        var url = 'deliverWays?size=' + sizePerPage
            + '&page=' + page;

        if (confirm !== '') {
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
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.modify = function (uuid, deliverWayUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/deliverWays/' + uuid, deliverWayUpdateInput);
    };

    this.add = function (DeliveryWayInput) {
        return $http.post(Constant.BACKEND_BASE + '/deliverWays/', DeliveryWayInput);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/deliverWays/' + uuid);
    };
});