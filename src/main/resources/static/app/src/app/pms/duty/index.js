angular.module('IOne-Production').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pms-duty', {
        controller: 'DutyController',
        templateUrl: 'app/src/app/pms/duty/index.html'
    })
}]);

angular.module('IOne-Production').controller('DutyController', function($scope, $mdDialog, DutyService, DutyProfitService, Constant) {
    $scope.pageOption = {
        sizePerPage: 10,
        currentPage: 0,
        totalPage: 100,
        totalElements: 100
    };

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
        $scope.listFilterOption.noShowSys = '1';
        DutyService.getAll($scope.pageOption.sizePerPage, $scope.pageOption.currentPage, $scope.listFilterOption).success(function(data) {
            $scope.itemList = data.content;
            $scope.pageOption.totalPage = data.totalPages;
            $scope.pageOption.totalElements = data.totalElements;
        });
    };

    $scope.refreshDetailList = function(item) {
        DutyProfitService.getAll(item.uuid).success(function(data) {
            item.detailList = data.content;
        });
    };

    $scope.$watch('listFilterOption', function() {
        $scope.pageOption.currentPage = 0;
        $scope.pageOption.totalPage = 0;
        $scope.pageOption.totalElements = 0;
        $scope.refreshList();
    }, true);

    $scope.itemList = [];

    $scope.subItemList = [];

    $scope.selectAllFlag = false;

    /**
     * Show left detail panel when clicking the title
     */
    $scope.showDetailPanelAction = function(item) {
        $scope.selectedItem = item;
        item.detailList = [];
        $scope.refreshDetailList(item);
    };

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
                "cardAmount": 0,
                "posAmount": 0
            };
        }

        $mdDialog.show({
            controller: 'EditDutyController',
            templateUrl: 'app/src/app/pms/duty/dutyEditor.html',
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
                "cardAmount": data.cardAmount,
                "posAmount": data.posAmount,
                "shopUuid": Constant.PMS_DEFAULT_SHOP_UUID
            };

            if(action === "edit") {
                DutyService.modify(selectedItem.uuid, postData).success(function () {
                    //$scope.updateSelectedItem(data);
                    $scope.showInfo('修改班次成功');
                    $scope.refreshList();
                }).error(function (response) {
                    $scope.showError('修改班次失败，' + response.message);
                });
            } else if(action === "add"){
                postData.startTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                DutyService.add(postData).success(function () {
                    //$scope.updateSelectedItem(data);
                    $scope.showInfo('新建班次成功');
                    $scope.refreshList();
                }).error(function (response) {
                    $scope.showError('新建班次失败，' + response.message);
                });
            }
        });
    };

    $scope.showAddProfitEditor = function (profitItem) {
        var action;
        if(profitItem == null)
            action = "add";
        $mdDialog.show({
            controller: 'EditDutyProfitController',
            templateUrl: 'app/src/app/pms/duty/dutyProfitEditor2.html',
            parent: angular.element(document.body),
            targetEvent: event,
            locals: {
                selectedProfitItem: profitItem
            }
        }).then(function (data) {
            var postData = {
                "tableNumber": data.tableNumber,
                "card1Count": data.card1Count,
                "card5Count": data.card5Count,
                "card10Count": data.card10Count,
                "profit": data.profit
            };

            if(action == "add") {
                DutyProfitService.add($scope.selectedItem.uuid, postData).success(function (rep) {
                    //$scope.updateSelectedItem(data);
                    $scope.selectedItem = rep.duty;
                    $scope.refreshDetailList($scope.selectedItem);
                    $scope.showInfo('新增成功');
                }).error(function (response) {
                    $scope.showError('新增失败，' + response.message);
                });
            } else {
                DutyProfitService.modify($scope.selectedItem.uuid, profitItem.uuid, postData).success(function (rep) {
                    $scope.selectedItem = rep.duty;
                    $scope.refreshDetailList($scope.selectedItem);
                    $scope.showInfo('修改成功');
                }).error(function (response) {
                    $scope.showError('修改失败，' + response.message);
                });
            }
        });
    };

    $scope.deleteProfitAction = function(profitItem) {
        $scope.showConfirm('', '确认删除吗？', function () {
            DutyProfitService.delete($scope.selectedItem.uuid, profitItem.uuid).success(function(rep) {
                //$scope.itemList.splice($scope.itemList.indexOf(item), 1);
                $scope.selectedItem.profit -= profitItem.profit;
                $scope.refreshDetailList($scope.selectedItem);
                $scope.showInfo('删除成功');
            }).error(function (response) {
                $scope.showError('删除失败，' + response.message);
            });
        });
    };

    $scope.startDuty = function(item) {
        $scope.showConfirm('', '确认开始吗？', function () {
            DutyService.modify(item.uuid, {'active': '1'}).success(function() {
                //$scope.itemList.splice($scope.itemList.indexOf(item), 1);
                $scope.refreshList();
                $scope.showInfo('开始成功');
            }).error(function (response) {
                $scope.showError('开始失败，' + response.message);
            });
        });
    };

    $scope.finishDuty = function(item) {
        $scope.showConfirm('', '确认完成吗？', function () {
            DutyService.modify(item.uuid, {'active': '2'}).success(function() {
                //$scope.itemList.splice($scope.itemList.indexOf(item), 1);
                $scope.refreshList();
                $scope.showInfo('完成成功');
            }).error(function (response) {
                $scope.showError('完成失败，' + response.message);
            });
        });
    };
});

angular.module('IOne-Production').controller('EditDutyProfitController', function ($scope, $mdDialog, selectedProfitItem) {
    if(selectedProfitItem == null){
        $scope.selectedItem = {
            "tableNumber": 0,
            "card1Count": 0,
            "card5Count": 0,
            "card10Count": 0,
            "profit": 0
        };
    } else {
        $scope.selectedItem = {
            "tableNumber": selectedProfitItem.tableNumber,
            "card1Count": selectedProfitItem.card1Count,
            "card5Count": selectedProfitItem.card5Count,
            "card10Count": selectedProfitItem.card10Count,
            "profit": selectedProfitItem.profit
        };
    }

    $scope.$watch('selectedItem', function() {
        $scope.selectedItem.profit = $scope.selectedItem.card1Count * 10 + $scope.selectedItem.card5Count * 50 +  $scope.selectedItem.card10Count * 100;
    }, true);

    $scope.save = function () {
        $mdDialog.hide($scope.selectedItem);
    };

    $scope.cancelDlg = function () {
        $mdDialog.cancel();
    };
});

angular.module('IOne-Production').controller('EditDutyController', function ($scope, $mdDialog, parentSelectedItem) {
    $scope.selectedItem = {
        "cashAmount": parentSelectedItem.cashAmount,
        "wxAmount": parentSelectedItem.wxAmount,
        "zfbAmount": parentSelectedItem.zfbAmount,
        "cardAmount": parentSelectedItem.cardAmount,
        "posAmount": parentSelectedItem.posAmount,
        "createTime": parentSelectedItem.createTime
    };

    $scope.save = function () {
        $mdDialog.hide($scope.selectedItem);
    };

    $scope.cancelDlg = function () {
        $mdDialog.cancel();
    };
});

//angular.module('IOne-Production').controller('EditDutyProfitController', function ($scope, $mdDialog, parentSelectedItem) {
//    $scope.selectedItem = {
//        "profit": parentSelectedItem.profit
//    };
//
//    $scope.save = function () {
//        $mdDialog.hide($scope.selectedItem);
//    };
//
//    $scope.cancelDlg = function () {
//        $mdDialog.cancel();
//    };
//});

