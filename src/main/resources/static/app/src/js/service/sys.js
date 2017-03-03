angular.module('IOne-Production').service('SYSResService', function ($http, Constant) {
    this.getAll = function () {
        return $http.get(Constant.BACKEND_BASE + '/sysRess');
    };

    this.getAllwithParam = function (sizePerPage, page, no, name) {
        var url = '/sysRess?size=' + sizePerPage + '&page=' + page;
        if (no !== undefined && no !== null && no !== '') {
            url = url + '&no=' + no;
        }
        if (name !== undefined && name !== null && name !== '') {
            url = url + '&name=' + name;
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.getForParent = function (parentUuid) {
        return $http.get(Constant.BACKEND_BASE + '/sysRess?parentUuid=' + parentUuid);
    };

    this.getForGrade = function (type) {
        return $http.get(Constant.BACKEND_BASE + '/sysRess?type=' + type);
    };

    this.get = function (uuid) {
        return $http.get(Constant.BACKEND_BASE + '/sysRess/' + uuid);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/sysRess/' + uuid);
    };

    this.modify = function (uuid, UpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/sysRess/' + uuid, UpdateInput);
    };

    this.add = function (AddInput) {
        return $http.post(Constant.BACKEND_BASE + '/sysRess/', AddInput);
    };
});

angular.module('IOne-Production').service('SYSMenusService', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, no, name, keyWord, sysResUuid, resUuid) {

        var url = '/sysMenus?size=' + sizePerPage + '&page=' + page;

        if (no !== undefined && no !== null && no !== '') {
            url = url + '&no=' + no;
        }
        if (name !== undefined && name !== null && name !== '') {
            url = url + '&name=' + name;
        }
        if (keyWord !== undefined && keyWord !== null && keyWord !== '') {
            url = url + '&keyWord=' + keyWord;
        }
        if (sysResUuid !== undefined && sysResUuid !== null && sysResUuid !== '') {
            url = url + '&sysResUuid=' + sysResUuid;
        }
        if (resUuid !== undefined && resUuid !== null) {
            url = url + '&resUuid=' + resUuid;
        }

        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.get = function (uuid) {
        return $http.get(Constant.BACKEND_BASE + '/sysMenus/' + uuid);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/sysMenus/' + uuid);
    };

    this.modify = function (uuid, UpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/sysMenus/' + uuid, UpdateInput);
    };

    this.add = function (AddInput) {
        return $http.post(Constant.BACKEND_BASE + '/sysMenus/', AddInput);
    };
});

