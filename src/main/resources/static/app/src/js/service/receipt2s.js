angular.module('IOne-Production').service('Receipt2s', function ($http, Constant) {
    this.get = function (masterUuid, scope) {
        var url = '/salesOrders/' + masterUuid + '/receipts?';

        if (scope != null) {
            url = url + 'scope=' + scope;
        }

        return $http.get(Constant.BACKEND_BASE + url);
    };
    this.modify = function (masterUuid, detailUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/salesOrders/' + masterUuid + '/receipts/' + detailUpdateInput.uuid, detailUpdateInput);
    };
});
