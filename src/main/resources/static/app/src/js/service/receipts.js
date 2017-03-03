angular.module('IOne-Production').service('Receipts', function ($http, Constant) {
    this.get = function (masterUuid, scope) {
        var url = '/orders/' + masterUuid + '/receipts?';

        if (scope != null) {
            url = url + 'scope=' + scope;
        }

        return $http.get(Constant.BACKEND_BASE + url);
    };
    this.modify = function (masterUuid, detailUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/orders/' + masterUuid + '/receipts/' + detailUpdateInput.uuid, detailUpdateInput);
    };
});




