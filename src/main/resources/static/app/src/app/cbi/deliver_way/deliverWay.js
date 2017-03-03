angular.module('IOne-Production').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/cbi/deliver-way', {
        controller: 'DeliverWayController',
        templateUrl: 'app/src/app/cbi/deliver_way/deliverWay.html'
    })
}]);

angular.module('IOne-Production').controller('DeliverWayController', function ($q, $scope, DeliverWay, Constant) {
    $scope.disabledBatchConfirm = true;
    $scope.disabledBatchCancelConfirm = true;
    $scope.disabledBatchStatus = true;
    $scope.disabledBatchCancelStatus = true;
    $scope.selectedItemSize = 0;

    $scope.pageOption = {
        sizePerPage: 10,
        currentPage: 0,
        totalPage: 100,
        totalElements: 100
    };

    $scope.listFilterOption = {
        status: Constant.STATUS[1].value,
        confirm: Constant.CONFIRM[1].value
    };

    $scope.sortByAction = function (field) {
        $scope.sortByField = field;
        $scope.sortType = '';
    };

    $scope.refreshList = function () {
        DeliverWay.getAll($scope.pageOption.sizePerPage, $scope.pageOption.currentPage, $scope.listFilterOption).success(function (data) {
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

    $scope.subItemList = [
        {no: '1111111', name: 'name1', orderAmount: '100', confirm: '1', release: '1', status: '2'},
        {no: '2222222', name: 'name2', orderAmount: '200', confirm: '2', release: '1', status: '1'},
        {no: '3333333', name: 'name3', orderAmount: '300', confirm: '1', release: '2', status: '2'}
    ];

    $scope.selectAllFlag = false;

    /**
     * Show left detail panel when clicking the title
     */
    $scope.showDetailPanelAction = function (item) {
        $scope.selectedItem = item;
        //OrderDetail.get($scope.selectedItem.uuid).success(function(data) {
        //    $scope.orderDetailList = data.content;
        //});
        item.detailList = $scope.subItemList;
    };

    /**
     * Show advanced search panel which you can add more search condition
     */
    $scope.showAdvancedSearchAction = function () {
        $scope.displayAdvancedSearPanel = !$scope.displayAdvancedSearPanel;
        $scope.selectedItem = null;
    };

    /**
     * Show more panel when clicking the 'show more' on every item
     */
    $scope.toggleMorePanelAction = function (item) {
        item.showMorePanel = !item.showMorePanel;

        if (item.showMorePanel) {
            item.detailList = $scope.subItemList;
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
            if ($scope.domain == 'CBI_BASE_DELIV_WAY') {
                DeliverWay.add($scope.source).success(function (data) {
                    $scope.showInfo('新增送货方式成功。');
                    $scope.changeViewStatus(Constant.UI_STATUS.VIEW_UI_STATUS);
                    $scope.refreshList();
                }).error(function (response) {
                    $scope.showError('新增送货方式失败: ' + response.message);
                });
                $scope.refreshList();
            }
        } else if ($scope.status == 'edit') {
            if ($scope.domain == 'CBI_BASE_DELIV_WAY') {
                if($scope.source.status ==  Constant.STATUS[1].value && $scope.source.confirm != Constant.CONFIRM[2].value) {
                    DeliverWay.modify($scope.source.uuid, $scope.source).success(function (data) {
                        $scope.showInfo('修改送货方式成功。');
                        $scope.changeViewStatus(Constant.UI_STATUS.VIEW_UI_STATUS);
                        $scope.refreshList();
                    }).error(function (response) {
                        $scope.showError('修改送货方式失败。' + response.message);
                    });
                } else {
                    $scope.showError($scope.source.no + ' 不允许修改：有效且未审核的记录才可以修改！');
                }



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
        } else {
            $scope.selectedItemSize -= 1;
            $scope.selectAllFlag = false;
        }
        $scope.disableBatchMenuButtons();
    };

    $scope.confirmClickAction = function (event, item) {
        $scope.stopEventPropagation(event);
        console.info('confirm...');

        $scope.stopEventPropagation(event);
        console.info('status...');

        var msg = "确认取消审核吗？";
        var input = '1';
        var resultMsg = "取消审核成功！";
        if (item.confirm != '2') {
            msg = "确认审核吗？";
            input = '2';
            resultMsg = "审核成功！";
        }

        $scope.showConfirm(msg, '', function () {
            DeliverWay.modify(item.uuid, {'confirm': input}).success(function () {
                item.confirm = input;
                $scope.showInfo(resultMsg);
            }).error(function (response) {
                $scope.showError(response.message);
            });
        });
    };

    $scope.statusClickAction = function (event, item) {
        $scope.stopEventPropagation(event);
        console.info('status...');

        var msg = "确认禁用吗？";
        var input = '2';
        var resultMsg = "禁用成功！";
        if (item.status != '1') {
            msg = "确认启用吗？";
            input = '1';
            resultMsg = "启用成功！";
        }

        $scope.showConfirm(msg, '', function () {
            DeliverWay.modify(item.uuid, {'status': input}).success(function () {
                item.status = input;
                $scope.showInfo(resultMsg);
            }).error(function (response) {
                $scope.showError(response.message);
            });
        });
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

        if($scope.selectedItemSize == 0){
            $scope.showWarn('请先选择记录！');
            return;
        }
        $scope.showConfirm('确认审核吗', '', function () {
            var promises = [];
            var bError = false;
            angular.forEach($scope.itemList, function (item) {
                if (item.selected) {
                    var response = DeliverWay.modify(item.uuid, {'confirm': '2'}).success(function () {
                        item.confirm = '2';
                    }).error(function (response) {
                        bError = true;
                        $scope.showError(item.no + ' 审核失败：' + response.message);
                    });
                    promises.push(response);
                }
            });
            $q.all(promises).then(function (data) {
                if (!bError) {
                    $scope.showInfo('审核成功！');
                }
                $scope.disableBatchMenuButtons();
            });
        });
    };

    $scope.cancelConfirmAllClickAction = function (event) {
        $scope.stopEventPropagation(event);

        if($scope.selectedItemSize == 0){
            $scope.showWarn('请先选择记录！');
            return;
        }
        $scope.showConfirm('确认取消审核吗', '', function () {
            var promises = [];
            var bError = false;
            angular.forEach($scope.itemList, function (item) {
                if (item.selected) {
                    var response = DeliverWay.modify(item.uuid, {'confirm': '1'}).success(function () {
                        item.confirm = '1';
                    }).error(function (response) {
                        bError = true;
                        $scope.showError(item.no + ' 取消审核失败：' + response.message);
                    });
                    promises.push(response);
                }
            });
            $q.all(promises).then(function (data) {
                if (!bError) {
                    $scope.showInfo('取消审核成功！');
                    $scope.disableBatchMenuButtons();
                }
            });
        });
    };

    $scope.statusAllClickAction = function (event) {
        $scope.stopEventPropagation(event);

        if($scope.selectedItemSize == 0){
            $scope.showWarn('请先选择记录！');
            return;
        }
        $scope.showConfirm('确认启用吗', '', function () {
            var promises = [];
            var bError = false;
            angular.forEach($scope.itemList, function (item) {
                if (item.selected) {
                    var response = DeliverWay.modify(item.uuid, {'status': '1'}).success(function () {
                        item.status = '1';
                    }).error(function (response) {
                        bError = true;
                        $scope.showError(item.no + ' 启用失败：' + response.message);
                    });
                    promises.push(response);
                }
            });
            $q.all(promises).then(function (data) {
                if (!bError) {
                    $scope.showInfo('启用成功！');
                    $scope.disableBatchMenuButtons();
                }
            });
        });
    };

    $scope.cancelStatusAllClickAction = function (event) {
        $scope.stopEventPropagation(event);

        if($scope.selectedItemSize == 0){
            $scope.showWarn('请先选择记录！');
            return;
        }
        $scope.showConfirm('确认禁用吗', '', function () {
            var promises = [];
            var bError = false;
            angular.forEach($scope.itemList, function (item) {
                if (item.selected) {
                    var response = DeliverWay.modify(item.uuid, {'status': '2'}).success(function () {
                        item.status = '2';
                    }).error(function (response) {
                        bError = true;
                        $scope.showError(item.no + ' 禁用失败：' + response.message);
                    });
                    promises.push(response);
                }
            });
            $q.all(promises).then(function (data) {
                if (!bError) {
                    $scope.showInfo('禁用成功！');
                    $scope.disableBatchMenuButtons();
                }
            });
        });
    };

    $scope.releaseAllClickAction = function (event) {
        $scope.stopEventPropagation(event);
        console.info('release all...');
        //TODO ...
    };

    $scope.deleteAllClickAction = function (event) {
        $scope.stopEventPropagation(event);

        if($scope.selectedItemSize == 0){
            $scope.showWarn('请先选择记录！');
            return;
        }

        $scope.showConfirm('确认删除吗', '', function () {
            var promises = [];
            var bError = false;
            angular.forEach($scope.itemList, function (item) {
                if (item.selected) {
                    if(item.status ==  Constant.STATUS[1].value && item.confirm != Constant.CONFIRM[2].value) {
                        var response = DeliverWay.delete(item.uuid).success(function () {
                            $scope.refreshList();
                        }).error(function (response) {
                            bError = true;
                            $scope.showError(item.no + ' 删除失败：' + response.message);
                        });
                        promises.push(response);
                    } else {
                        bError = true;
                        $scope.showError(item.no + ' 不允许删除：有效且未审核的记录才可以删除！');
                    }
                }
            });
            $q.all(promises).then(function (data) {
                if (!bError) {
                    $scope.showInfo('删除成功！');
                    $scope.disableBatchMenuButtons();
                }
            });
        });
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
        if ($scope.selectAllFlag) {
            angular.forEach($scope.itemList, function (item) {
                $scope.selectedItemSize++;
            })
        }
        $scope.disableBatchMenuButtons();
    };

    $scope.disableBatchMenuButtons = function () {
        var selectedCount = 0;
        var confirm = '';
        var status = '';
        var diffConfirm = false;
        var diffStatus = false;
        angular.forEach($scope.itemList, function (item, index) {
            if (item.selectedRef) {
                selectedCount++;
                if (confirm == '') {
                    confirm = item.confirm;
                } else {
                    if (confirm != item.confirm) {
                        diffConfirm = true;
                    }
                }
                if (status == '') {
                    status = item.status;
                } else {
                    if (status != item.status) {
                        diffStatus = true;
                    }
                }
            }
        });

        if (selectedCount == 0) {
            $scope.disabledBatchConfirm = true;
            $scope.disabledBatchCancelConfirm = true;
            $scope.disabledBatchStatus = true;
            $scope.disabledBatchCancelStatus = true;
        } else {
            if (diffConfirm == true) {
                $scope.disabledBatchConfirm = true;
                $scope.disabledBatchCancelConfirm = true;
            } else if (confirm == '2') {
                $scope.disabledBatchConfirm = true;
                $scope.disabledBatchCancelConfirm = false;
            } else {
                $scope.disabledBatchConfirm = false;
                $scope.disabledBatchCancelConfirm = true;
            }

            if (diffStatus == true) {
                $scope.disabledBatchStatus = true;
                $scope.disabledBatchCancelStatus = true;
            } else if (status == '1') {
                $scope.disabledBatchStatus = true;
                $scope.disabledBatchCancelStatus = false;
            } else {
                $scope.disabledBatchStatus = false;
                $scope.disabledBatchCancelStatus = true;
            }
        }
    };
});
