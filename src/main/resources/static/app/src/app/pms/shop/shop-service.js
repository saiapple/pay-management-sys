/**
 * Created by pc on 2017/3/3.
 */
angular.module('IOne-Production').service('ShopService', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, filter) {
        //var confirm = filter.confirm == 0 ? '' : filter.confirm;
        //var status = filter.status == 0 ? '' : filter.status;
        var url = 'duties?size=' + sizePerPage
            + '&page=' + page;

        //if (confirm !== '') {
        //    url = url + '&confirm=' + confirm;
        //}
        //if (status !== '') {
        //    url = url + '&status=' + status;
        //}
        //if (filter.no != null) {
        //    url = url + '&no=' + filter.no;
        //}
        //if (filter.name != null) {
        //    url = url + '&name=' + filter.name;
        //}
        if (filter.startDate !== null && filter.startDate !== undefined) {
            var startDate = new Date(filter.startDate);
            startDate = moment(startDate).format('YYYY-MM-DD 00:00:00');
            url = url + '&startDate=' + startDate;
        }
        if (filter.endDate !== null && filter.endDate !== undefined) {
            var endDate = new Date(filter.endDate);
            endDate = moment(endDate).format('YYYY-MM-DD 23:59:59');
            url = url + '&endDate=' + endDate;
        }
        //if (filter.searchKeyWord != null) {
        //    url = url + '&searchKeyWord=' + filter.searchKeyWord;
        //}
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.modify = function (uuid, dutyUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/duties/' + uuid, dutyUpdateInput);
    };

    this.add = function (dutyInput) {
        return $http.post(Constant.BACKEND_BASE + '/duties/', dutyInput);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/duties/' + uuid);
    };
});