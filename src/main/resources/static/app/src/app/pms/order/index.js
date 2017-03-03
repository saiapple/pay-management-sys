angular.module('IOne-Production').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pms-order', {
        controller: 'OrderController',
        templateUrl: 'app/src/app/pms/order/index.html'
    })
}]);

angular.module('IOne-Production').controller('OrderController', function($scope, $mdDialog, OrderService, Constant) {
    $scope.pageOption = {
        sizePerPage: 10,
        currentPage: 0,
        totalPage: 100,
        totalElements: 100
    };
    $scope.PMS_BILL_TYPES = Constant.PMS_BILL_TYPES;
    $scope.PMS_BILL_PAY_TYPES = Constant.PMS_BILL_PAY_TYPES;

    $scope.listFilterOption = {
        status :  Constant.STATUS[0].value,
        confirm : Constant.CONFIRM[0].value,
        release : Constant.RELEASE[0].value
    };

    $scope.sortByAction = function(field) {
        $scope.sortByField = field;
        $scope.sortType = '';
    };

    $scope.refreshList = function() {
        OrderService.getAll($scope.pageOption.sizePerPage, $scope.pageOption.currentPage, $scope.listFilterOption).success(function(data) {
            $scope.itemList = data.content;
            $scope.pageOption.totalPage = data.totalPages;
            $scope.pageOption.totalElements = data.totalElements;

            if($scope.itemList != null && $scope.itemList.length > 0){
                $scope.duty = $scope.itemList[0].duty;
            }
        }).error(function (response) {
            $scope.itemList = [];
            $scope.pageOption.totalPage = 0;
            $scope.pageOption.totalElements = 0;
            $scope.showError('获取信息失败，' + response.message);
        });
    };

    $scope.$watch('listFilterOption', function() {
        $scope.pageOption.currentPage = 0;
        $scope.pageOption.totalPage = 0;
        $scope.pageOption.totalElements = 0;
        $scope.refreshList();
    }, true);

    $scope.itemList = [
        { no:'1111111', name: 'name1', orderAmount: '100', confirm: '1', release: '1', status: '2' },
        { no:'2222222', name: 'name2', orderAmount: '200', confirm: '2', release: '1', status: '1'  },
        { no:'4444444', name: 'name0', orderAmount: '400', confirm: '1', release: '1', status: '1'  },
        { no:'3333333', name: 'name3', orderAmount: '300', confirm: '1', release: '2', status: '2'  }
    ];

    $scope.subItemList = [
        { no:'1111111', name: 'name1', orderAmount: '100', confirm: '1', release: '1', status: '2' },
        { no:'2222222', name: 'name2', orderAmount: '200', confirm: '2', release: '1', status: '1'  },
        { no:'3333333', name: 'name3', orderAmount: '300', confirm: '1', release: '2', status: '2'  }
    ];

    $scope.selectAllFlag = false;

    /**
     * Show left detail panel when clicking the title
     */
    //$scope.showDetailPanelAction = function(item) {
    //    $scope.selectedItem = item;
    //    //OrderDetail.get($scope.selectedItem.uuid).success(function(data) {
    //    //    $scope.orderDetailList = data.content;
    //    //});
    //    item.detailList = $scope.subItemList;
    //};

    /**
     * Show advanced search panel which you can add more search condition
     */
    //$scope.showAdvancedSearchAction = function() {
    //    $scope.displayAdvancedSearPanel = !$scope.displayAdvancedSearPanel;
    //    $scope.selectedItem = null;
    //};

    /**
     * Show more panel when clicking the 'show more' on every item
     */
    $scope.toggleMorePanelAction = function(item) {
        item.showMorePanel = !item.showMorePanel;

        if(item.showMorePanel) {
            item.detailList = $scope.subItemList;
        }
    };

    /**
     * Toggle the advanced panel for detail item in the list
     */
    $scope.toggleDetailMorePanelAction = function(detail) {
        detail.showMorePanel = !detail.showMorePanel;
    };

    /**
     * Change status to list all items
     */
    $scope.listItemAction = function() {
        $scope.changeViewStatus(Constant.UI_STATUS.VIEW_UI_STATUS);
    };

    /**
     * Set stauts to 'edit' to edit an object. The panel will be generated automatically.
     */
    $scope.editItemAction = function(source, domain, desc) {
        $scope.changeViewStatus(Constant.UI_STATUS.EDIT_UI_STATUS);
        $scope.status = 'edit';
        $scope.desc = desc;
        $scope.source = source;
        $scope.domain = domain;
    };

    /**
     * Add new item which will take the ui to the edit page.
     */
    $scope.preAddItemAction = function(source, domain, desc) {
        $scope.changeViewStatus(Constant.UI_STATUS.EDIT_UI_STATUS);
        $scope.status = 'add';
        $scope.desc = desc;
        $scope.source = source;
        $scope.domain = domain;
    };

    /**
     * Save object according current status and domain.
     */
    $scope.saveItemAction = function() {
        if($scope.status == 'add') {
            if($scope.domain == 'PSO_ORDER_MST') {
                //TODO add order mst
                console.info('add order mst...');
            } else if($scope.domain == 'PSO_ORDER_DTL') {
                //TODO add order dtl
                console.info('add order dtl...');
            }
        } else if($scope.status == 'edit') {
            if($scope.domain == 'PSO_ORDER_MST') {
                //TODO edit order mst
                console.info('edit order mst...');
            } else if($scope.domain == 'PSO_ORDER_DTL') {
                //TODO edit order dtl
                console.info('edit order dtl...');
            }
        }
    };

    $scope.showEditor = function (selectedItem) {
        var action = "edit";
        if(selectedItem === null){
            action = "add";
            selectedItem = {
                "cashAmount": 0,
                "wxAmount": 0,
                "zfbAmount": 0,
                "cardAmount": 0

            };
        }

        $mdDialog.show({
            controller: 'EditOrderController',
            templateUrl: 'app/src/app/pms/order/orderEditor.html',
            parent: angular.element(document.body),
            targetEvent: event,
            locals: {
                parentSelectedItem: selectedItem,
                action: action
            }
        }).then(function (data) {
            var postData = {
                "cashAmount": data.cashAmount,
                "wxAmount": data.wxAmount,
                "zfbAmount": data.zfbAmount,
                "cardAmount": data.cardAmount
            };

            if(action === "edit") {
                OrderService.modify(selectedItem.uuid, postData).success(function () {
                    //$scope.updateSelectedItem(data);
                    $scope.showInfo('修改班次成功');
                    $scope.refreshList();
                }).error(function (response) {
                    $scope.showError('修改班次失败，' + response.message);
                });
            } else if(action === "add"){
                postData.startTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                OrderService.add(postData).success(function () {
                    //$scope.updateSelectedItem(data);
                    $scope.showInfo('新建班次成功');
                    $scope.refreshList();
                }).error(function (response) {
                    $scope.showError('新建班次失败，' + response.message);
                });
            }
        });
    };
});

angular.module('IOne-Production').controller('EditOrderController', function ($scope, $mdDialog, parentSelectedItem) {
    $scope.selectedItem = {
        "cashAmount": parentSelectedItem.cashAmount,
        "wxAmount": parentSelectedItem.wxAmount,
        "zfbAmount": parentSelectedItem.zfbAmount,
        "cardAmount": parentSelectedItem.cardAmount,
        "createTime": parentSelectedItem.createTime
    };
    //if (parentSelectedItem.deliverDate != null) {
    //    $scope.selectedItem.deliverDate = new Date(parentSelectedItem.deliverDate);
    //}
    //if (parentSelectedItem.predictDeliverDate != null) {
    //    $scope.selectedItem.predictDeliverDate = new Date(parentSelectedItem.predictDeliverDate);
    //}

    //$scope.pageOption = {
    //    sizePerPage: 5,
    //    currentPage: 0,
    //    totalPage: 0,
    //    totalElements: 0,
    //    displayModel: 0
    //};

    $scope.save = function () {
        $mdDialog.hide($scope.selectedItem);
    };

    $scope.cancelDlg = function () {
        $mdDialog.cancel();
    };

    //$scope.selectCustomerAddressCallback = function (selectedCustomerAddress) {
    //    $scope.selectedItem.receivePhone = selectedCustomerAddress.receivePhone;
    //    $scope.selectedItem.receiveName = selectedCustomerAddress.receiveName;
    //    $scope.selectedItem.receiveAddress = selectedCustomerAddress.receiveAddress;
    //    $scope.selectedItem.customerAddress = selectedCustomerAddress;
    //};
});
