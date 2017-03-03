/**
 * Created by xavier on 2016/9/5.
 */
angular.module('IOne').service('JdAdapterService', function ($http, $rootScope) {
    this.syncByOrderId = function (orderIds, controllerScope, successCallBack) {
        var url = $rootScope.globals.adapterInfo['ec-adapter'].url + '/jd/trades?sync=orderId';
        angular.forEach(orderIds, function (orderId) {
            url += '&orderIds=' + orderId;
        });

        return $http.get(url).success(function (response, status) {
            if (status == 200) {
                successCallBack(response);
            } else {
                controllerScope.showError('執行失敗');
            }
        }).error(function (response) {
            if (response == null) {
                controllerScope.showError("[" + (status + '') + "]Connect Server Fail");
            } else {
                controllerScope.showError("[" + (status + '') + "]" + response.message);
            }
        });
    };

    this.syncByDate = function (start, end, controllerScope, successCallBack) {
        var url = $rootScope.globals.adapterInfo.ecAdapterServerUrl + '/jd/trades?'
            + 'start=' + start
            + 'end=' + end;

        return $http.get(url).success(function (response, status) {
            if (status == 200) {
                successCallBack(response);
            } else {
                controllerScope.showError('執行失敗');
            }
        }).error(function (response) {
            if (response == null) {
                controllerScope.showError("[" + (status + '') + "]Connect Server Fail");
            } else {
                controllerScope.showError("[" + (status + '') + "]" + response.message);
            }
        });
    };
});