/**
 * Created by xavier on 2016/9/5.
 */
angular.module('IOne').service('TaoBaoAdapterService', function ($http, $rootScope) {
    this.syncByTids = function (tids, controllerScope, successCallBack) {
        var url = $rootScope.globals.adapterInfo['ec-adapter'].url + '/taobao/trades?';
        angular.forEach(tids, function (tid) {
            url += '&tids=' + tid;
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

    this.syncByDate = function (startDate, endDate, controllerScope, successCallBack) {
        var url = $rootScope.globals.adapterInfo.ecAdapterServerUrl + '/taobao/trades?sync=byTime';
        var obj = {
            'startTime': startDate,
            'endTime': endDate
        };

        return $http.post(url, obj).success(function (response, status) {
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

    this.updateProfile = function (updateProfileObj, controllerScope, successCallBack) {
        var url = $rootScope.globals.adapterInfo.ecAdapterServerUrl + '/taobao/updateProfile';
        return $http.post(url, updateProfileObj).success(function (response, status) {
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