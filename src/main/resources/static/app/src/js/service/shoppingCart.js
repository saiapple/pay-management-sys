angular.module('IOne-Production').service('ShoppingCart', function($http, Constant) {
    this.getAll = function(sizePerPage, page, employeeName, customerName,resUuid) {
        var url = '/carts?size=' + sizePerPage
                              + '&page=' + page;

        if(customerName !== null) {
            url = url + '&customerName=' + customerName;
        }

        if(employeeName !== null) {
            url = url + '&employeeName=' + employeeName;
        }

        if(resUuid !== undefined && resUuid !== null) {
           url = url + '&resUuid=' + resUuid;
        }

        return $http.get(Constant.BACKEND_BASE + url);
    };
});

angular.module('IOne-Production').service('ShoppingCartItemPic', function($http, Constant) {
//    this.get = function(productionUuid) {
//        return $http.get(Constant.BACKEND_BASE + '/itemPaths?itemUuid=' + productionUuid);
//    };
    this.get = function(itemUuid) {
        return $http.get(Constant.BACKEND_BASE + '/items/' + itemUuid + '/paths/');
    };

});






