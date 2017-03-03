angular.module('IOne-Production').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shopping-cart', {
        controller: 'ShoppingCartController',
        templateUrl: 'app/src/app/order/shopping_cart/shoppingCart.html'
    })
}]);

angular.module('IOne-Production').controller('ShoppingCartController', function($scope, ShoppingCart, ShoppingCartItemPic, $mdDialog, $timeout, Constant,ChannelPriceService) {
      $scope.shoppingCart = {
                   employeeName : '',
                   clientName : '',
                   }

      $scope.pageOption = {
        sizePerPage: 14,
        currentPage: 0,
        totalPage: 100,
        totalElements: 100
    };

    $scope.searchShoppingCartList = function() {

       if($scope.shoppingCart.employeeName !== undefined) {
            employeeName = $scope.shoppingCart.employeeName;
       }else{
           employeeName = null;
       }

       if($scope.shoppingCart.clientName !== undefined) {
            customerName = $scope.shoppingCart.clientName;
       }else{
           customerName = null;
       }

        ShoppingCart.getAll($scope.pageOption.sizePerPage, $scope.pageOption.currentPage,employeeName, customerName,RES_UUID_MAP.PSO.CART.LIST_PAGE.RES_UUID)

            .success(function(data) {
                $scope.shoppingCartList = data;
                $scope.pageOption.totalPage = data.totalPages;
                $scope.pageOption.totalElements = data.totalElements;
            }
        );
    };

    $scope.editItem = function(shoppingCartItem) {
        $scope.selectedItem = shoppingCartItem;
        $scope.changeViewStatus(Constant.UI_STATUS.PRE_EDIT_UI_STATUS, 1);
//        $scope.selectedItem.shoppingItemPath = Constant.BACKEND_BASE + '/app/assets/IMAGE/' + $scope.selectedItem.item.path;
        var path = $scope.selectedItem.item.path;
        if(path && path.indexOf('IMAGE') == 0) {
             $scope.selectedItem.shoppingItemPath = Constant.BACKEND_BASE + '/app/assets/' + $scope.selectedItem.item.path;
        } else {
             $scope.selectedItem.shoppingItemPath = Constant.BACKEND_BASE + '/app/assets/IMAGE/' + $scope.selectedItem.item.path;
        }

        ChannelPriceService.getByItemUuid($scope.selectedItem.channel.uuid, $scope.selectedItem.item.uuid) .success(function(data) {
                 if(undefined != data.content[0]){
                    $scope.selectedItem.priceFromChannel =data.content[0].salePrice;
                 }else{
                      $scope.showWarn('请在渠道定价中设置该商品价格。');
                 }

         });

    };
    $scope.listTabSelected = function() {
        $scope.searchShoppingCartList();
        $scope.selectedItem = null;
        $scope.changeViewStatus(Constant.UI_STATUS.VIEW_UI_STATUS, 0);
        $scope.getMenuAuthData($scope.RES_UUID_MAP.PSO.CART.LIST_PAGE.RES_UUID).success(function(data) {
               $scope.menuAuthDataMap = $scope.menuDataMap(data);
         });
    };

    $scope.formTabSelected = function() {
//        if($scope.selectedItem) {
//            //Get pics
//            ShoppingCartItemPic.get($scope.selectedItem.uuid).success(function(data) {
//                $scope.picsData = data;
//                $scope.selectedItemPics = [];
//                angular.forEach($scope.picsData.content, function(item) {
//                    $scope.selectedItemPics.push(Constant.BACKEND_BASE + '/app/assets/' + item.path);
//                });
//            });
//        }

        $scope.getMenuAuthData($scope.RES_UUID_MAP.PSO.CART.FORM_PAGE.RES_UUID).success(function(data) {
               $scope.menuAuthDataMap = $scope.menuDataMap(data);
         });
    };

});
