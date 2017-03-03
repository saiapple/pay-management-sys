/**
 * Created by xavier on 2016/9/5.
 */

angular.module('IOne').service('ErpAdapterService', function ($http, $rootScope, $cookieStore) {

    this.transferErpAdapter = function (path, transferObj, serviceScope, callBack) {

        $http.post($rootScope.globals.adapterInfo['tiptop-adapter'].url + '/adapter/tasks' + path, transferObj).success(function (response, status) {
            if (status == 201) {
                callBack(response);
            } else {
                serviceScope.showError('抛转失败！');
            }
        }).error(function (response, status) {
            if (response == null) {
                serviceScope.showError("[" + (status + '') + "]Connect Server Fail");
            } else {
                serviceScope.showError("[" + (status + '') + "]" + response.message);
            }
        });
    };
});