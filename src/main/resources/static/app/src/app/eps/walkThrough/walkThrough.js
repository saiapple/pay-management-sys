angular.module('IOne-Production').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/walkThrough', {
        controller: 'WalkThroughController',
        templateUrl: 'app/src/app/eps/walkThrough/walkThrough.html'
    })
}]);

angular.module('IOne-Production').controller('WalkThroughController', function ($scope, WalkThroughMaster, WalkThroughDetail, Constant, $mdDialog) {
    $scope.pageOption = {
        sizePerPage: 10,
        currentPage: 0,
        totalPage: 100,
        totalElements: 100
    };
    $scope.BUILDING_TYPE = Constant.BUILDING_TYPE;
    $scope.WALK_THROUGH_CONF_STATUS = Constant.WALK_THROUGH_CONF_STATUS;
    $scope.selectAllFlag = false;
    $scope.selectedItemSize = 0;
    $scope.selectedItemAmount = 0;

    $scope.listFilterOption = {
        confStatus: Constant.WALK_THROUGH_CONF_STATUS[0].value,
        confirm: Constant.CONFIRM[0].value
    };

    $scope.sortByAction = function (field) {
        $scope.sortByField = field;
        $scope.sortType = '';
    };

    $scope.refreshList = function () {
        WalkThroughMaster.getAll($scope.pageOption.sizePerPage, $scope.pageOption.currentPage, $scope.listFilterOption).success(function (data) {
            $scope.itemList = data.content;
            $scope.pageOption.totalPage = data.totalPages;
            $scope.pageOption.totalElements = data.totalElements;
        });
    };

    $scope.$watch('listFilterOption', function () {
        $scope.pageOption.currentPage = 0;
        $scope.pageOption.totalPage = 0;
        $scope.pageOption.totalElements = 0;
        $scope.refreshList();
    }, true);

    /**
     * Show left detail panel when clicking the title
     */
    $scope.showDetailPanelAction = function (item) {
        $scope.selectedItem = item;
        WalkThroughDetail.get($scope.selectedItem.uuid).success(function (data) {
            $scope.subItemList = data.content;
            item.detailList = $scope.subItemList;
        });

        $scope.displayAdvancedSearPanel = false;
    };

    /**
     * Show advanced search panel which you can add more search condition
     */
    $scope.showAdvancedSearchAction = function () {
        $scope.displayAdvancedSearPanel = !$scope.displayAdvancedSearPanel;
    };

    /**
     * Show more panel when clicking the 'show more' on every item
     */
    $scope.toggleMorePanelAction = function (item) {
        item.showMorePanel = !item.showMorePanel;

        if (item.showMorePanel) {
            WalkThroughDetail.get(item.uuid).success(function (data) {
                $scope.subItemList = data.content;
                item.detailList = $scope.subItemList;
            });
        }
    };

    /**
     * Toggle the advanced panel for detail item in the list
     */
    $scope.toggleDetailMorePanelAction = function (detail) {
        detail.showMorePanel = !detail.showMorePanel;
    };

    /**
     * Change status to list all items
     */
    $scope.listItemAction = function () {
        $scope.changeViewStatus(Constant.UI_STATUS.VIEW_UI_STATUS);
    };

    /**
     * Set stauts to 'edit' to edit an object. The panel will be generated automatically.
     */
    $scope.editItemAction = function (source, domain, desc) {
        $scope.changeViewStatus(Constant.UI_STATUS.EDIT_UI_STATUS);
        $scope.status = 'edit';
        $scope.desc = desc;
        $scope.source = source;
        $scope.domain = domain;
    };

    /**
     * Add new item which will take the ui to the edit page.
     */
    $scope.preAddItemAction = function (source, domain, desc) {
        $scope.changeViewStatus(Constant.UI_STATUS.EDIT_UI_STATUS);
        $scope.status = 'add';
        $scope.desc = desc;
        $scope.source = source;
        $scope.domain = domain;
    };

    /**
     * Save object according current status and domain.
     */
    $scope.saveItemAction = function () {
        if ($scope.status == 'add') {
            if ($scope.domain == 'PSO_ORDER_MST') {
                //TODO add order mst
                console.info('add order mst...');
            } else if ($scope.domain == 'PSO_ORDER_DTL') {
                //TODO add order dtl
                console.info('add order dtl...');
            }
        } else if ($scope.status == 'edit') {
            if ($scope.domain == 'PSO_ORDER_MST') {
                //TODO edit order mst
                console.info('edit order mst...');
            } else if ($scope.domain == 'PSO_ORDER_DTL') {
                //TODO edit order dtl
                console.info('edit order dtl...');
            }
        }
    };

    /**
     * Delete detail item
     */
    $scope.deleteDetailAction = function (detail) {
        //TODO ...
    };

    $scope.selectItemAction = function (event, item) {
        $scope.stopEventPropagation(event);
        item.selectedRef = !item.selected;

        if (item.selected == false
            || item.selected == undefined
            || item.selected == null) {
            $scope.selectedItemSize += 1;
            $scope.selectedItemAmount += item.orderAmount;
        } else {
            $scope.selectedItemSize -= 1;
            $scope.selectedItemAmount -= item.orderAmount;
            $scope.selectAllFlag = false;
        }

        $scope.refreshMenuButtons();
    };

    $scope.confirmClickAction = function (event, item) {
        $scope.stopEventPropagation(event);
        console.info('confirm...');

        if (item.confirm == Constant.CONFIRM[2].value) {
            $scope.showError("已成功审核并抛转的订单不能取消审核，订单号：" + item.orderId);
            return false;
        }

        $scope.showConfirm('确认审核吗？', '', function () {
            WalkThroughMaster.confirm(item.uuid).success(function () {
                item.confirm = Constant.CONFIRM[2].value;
                $scope.showInfo('订单审核成功！');
            }).error(function (response) {
                //$scope.showError($scope.getError(response.message));
                $scope.showError(response.message);
            });
        });
    };

    $scope.statusClickAction = function (event, item) {
        $scope.stopEventPropagation(event);
        console.info('status...');
        //TODO ...
    };

    $scope.releaseClickAction = function (event, item) {
        $scope.stopEventPropagation(event);
        console.info('release...');
        //TODO ...
    };

    $scope.deleteClickAction = function (event, item) {
        $scope.stopEventPropagation(event);
        console.info('delete...');
        //TODO ...
    };

    $scope.confirmAllClickAction = function (event) {
        $scope.stopEventPropagation(event);
        console.info('confirm all...');

        var uuids = "";
        var count = 0;
        var failUuids = "";
        angular.forEach($scope.itemList, function (item) {
            if (item.selected === true) {
                uuids += (item.uuid + ",");
                count++;

                if (item.confirm == Constant.CONFIRM[2].value) {
                    failUuids += (item.orderId + ", ");
                }
            }
        });

        if (count === 0) {
            $scope.showError('没有选择任何订单，请先选择订单！');
            return;
        }
        if (failUuids !== "") {
            $scope.showError("已成功审核并抛转的订单不能再次审核并抛转，订单号：" + failUuids.substring(0, failUuids.length - 2));
            return false;
        }

        $scope.showConfirm('确认审核吗？', '', function () {
            WalkThroughMaster.confirm(uuids).success(function () {
                angular.forEach($scope.itemList, function (item) {
                    if (item.selected === true) {
                        item.confirm = Constant.CONFIRM[2].value;
                    }
                });

                $scope.showInfo('订单审核成功！');
            }).error(function (response) {
                //$scope.showError($scope.getError(response.message));
                $scope.showError(response.message);
            });
        });
    };

    $scope.walkTroughAllClickAction = function (event) {
        $scope.stopEventPropagation(event);
        console.info('confirm all...');

        var uuids = "";
        var count = 0;
        var failUuids = "";
        angular.forEach($scope.itemList, function (item) {
            if (item.selected === true) {
                uuids += (item.uuid + ",");
                count++;

                if (item.confirm == Constant.CONFIRM[2].value) {
                    failUuids += (item.orderId + ", ");
                }
            }
        });

        if (count === 0) {
            $scope.showError('没有选择任何订单，请先选择订单！');

        }

        /*$scope.showConfirm('确认回访吗？', '', function () {
         WalkThroughMaster.modify(uuids).success(function () {
                angular.forEach($scope.itemList, function (item) {
                    if (item.selected === true) {
                        item.confirm = Constant.CONFIRM[2].value;
                    }
                });

         $scope.showInfo('回访成功！');
            }).error(function (response) {
                //$scope.showError($scope.getError(response.message));
                $scope.showError(response.message);
            });
         });*/
    };

    $scope.statusAllClickAction = function (event) {
        $scope.stopEventPropagation(event);
        console.info('status all...');
        //TODO ...
    };

    $scope.releaseAllClickAction = function (event) {
        $scope.stopEventPropagation(event);
        console.info('release all...');
        //TODO ...
    };

    $scope.deleteAllClickAction = function (event) {
        $scope.stopEventPropagation(event);
        console.info('delete all...');
        //TODO ...
    };

    $scope.selectAllAction = function () {
        angular.forEach($scope.itemList, function (item) {
            if ($scope.selectAllFlag) {
                item.selected = true;
            } else {
                item.selected = false;
            }
            item.selectedRef = item.selected;
        });

        $scope.selectedItemSize = 0;
        $scope.selectedItemAmount = 0;
        if ($scope.selectAllFlag) {
            angular.forEach($scope.itemList, function (item) {
                $scope.selectedItemSize++;
                $scope.selectedItemAmount += item.orderAmount;
            })
        }

        $scope.refreshMenuButtons();
    };

    $scope.openEditorDlg = function (item) {
        $mdDialog.show({
            controller: 'ItemEditorController',
            templateUrl: 'app/src/app/eps/walkThrough/editorDlg.html',
            parent: angular.element(document.body),
            targetEvent: event,
            locals: {
                editingItem: item
            }
        }).then(function (editingItem) {
            var confDeliverDate = moment(editingItem.confDeliverDate).format('YYYY-MM-DD 00:00:00');
            var postData = {
                "buildingType": editingItem.buildingType,
                "floor": editingItem.floor,
                "confDeliverDate": confDeliverDate
            };
            WalkThroughMaster.modify(item.uuid, postData).success(function (data) {
                item.confStatus = data[0].confStatus;
                $scope.showInfo('预排回访完结。');
            }).error(function (response) {
                $scope.showError(response.message);
            });
        });
    };
});

angular.module('IOne-Production').controller('ItemEditorController', function ($scope, Constant, $mdDialog, editingItem) {
    $scope.editingItem = editingItem;
    $scope.BUILDING_TYPE = Constant.BUILDING_TYPE;
    editingItem.confDeliverDate = new Date(editingItem.confDeliverDate);

    $scope.saveDetail = function () {
        $mdDialog.hide($scope.editingItem);
    };

    $scope.cancelDlg = function () {
        $mdDialog.cancel();
    };
});