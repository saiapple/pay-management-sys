angular.module('IOne-Production').service('WalkThroughMaster', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, filter) {
        var confirm = filter.confirm == 0 ? '' : filter.confirm;
        var confStatus = filter.confStatus == 0 ? '' : filter.confStatus;
        var url = 'walkThroughs?size=' + sizePerPage
            + '&page=' + page;

        if (confirm !== '') {
            url = url + '&confirm=' + confirm;
        }
        if (confStatus !== '') {
            url = url + '&confStatus=' + confStatus;
        }
        if (filter.startWalkThroughDate != null) {
            var startWalkThroughDate = new Date(filter.startWalkThroughDate);
            startWalkThroughDate = moment(startWalkThroughDate).format('YYYY-MM-DD 00:00:00');
            url = url + '&startWalkThroughDate=' + startWalkThroughDate;
        }
        if (filter.endWalkThroughDate !== null && filter.endWalkThroughDate !== undefined) {
            var endWalkThroughDate = new Date(filter.endWalkThroughDate);
            endWalkThroughDate = moment(endWalkThroughDate).format('YYYY-MM-DD 23:59:59');
            url = url + '&endWalkThroughDate=' + endWalkThroughDate;
        }
        if (filter.buyerNick !== null && filter.buyerNick !== undefined) {
            url = url + '&buyerNick=' + filter.buyerNick;
        }
        if (filter.epsOrderNo !== null && filter.epsOrderNo !== undefined) {
            url = url + '&epsOrderNo=' + filter.epsOrderNo;
        }

        console.info(Constant.BACKEND_BASE + url);
        return $http.get(Constant.BACKEND_BASE + url);
    };

    //审核（抛转）
    this.confirm = function (uuids) {
        return $http.patch(Constant.BACKEND_BASE + '/walkThroughs/' + uuids, {'action': '2', 'confirm': '2'});
    };

    this.modify = function (uuid, updateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/walkThroughs/' + uuid, updateInput);
    };
});


angular.module('IOne-Production').service('WalkThroughDetail', function ($http, Constant) {
    this.get = function (masterUuid) {
        return $http.get(Constant.BACKEND_BASE + '/walkThroughs/' + masterUuid + '/details');
    };

    this.modify = function (masterUuid, detailUuid, updateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/walkThroughs/' + masterUuid + "/details/" + detailUuid, updateInput);
    };
});




