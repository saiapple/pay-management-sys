/**
 * Created by xavier on 2016/9/5..
 * Clone from ErpAdapterService.js by ruka on 2016/9/25..
 */
angular.module('IOne').service('IoneAdapterService', function ($http, $rootScope, $cookieStore) {

    this.transferAdapter = function (path, transferObj, serviceScope, callBack) {
        return $http.post($rootScope.globals.adapterInfo['i1-adapter'].url + '/adapter/tasks' + path, transferObj).success(function (response, status) {
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