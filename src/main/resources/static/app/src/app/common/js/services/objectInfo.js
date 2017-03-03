angular.module('IOne').service('ObjectInfoService', function ($http, Constant) {
    this.cacheList = {};
    this.getCustomer = function(name, type, sysResUuid) {
            return this.cacheList[name + type+ sysResUuid] = $http.get('/app/assets/model/SYS_CUSTOMIZE_DATA/DATA.json?' + (new Date()).getTime(), {cache: false});

    };
    this.get = function (name, type) {
            return $http.get('/src/app/model/' + name + '/' + type + '.json?' + (new Date()).getTime(), {cache: false});
    }
});