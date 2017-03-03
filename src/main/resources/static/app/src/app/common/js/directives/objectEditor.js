angular.module('IOne').directive('objectEditor', function($http, $filter, Constant, Upload, $timeout, ObjectInfoService) {
    return {
        scope: {
            source: '=',
            domain: "=",
            beforeObjectInfo: '&'
        },
        templateUrl: '../src/app/src/common/js/directives/objectEditor.html',
        link: function($scope) {
            $scope.$watch('source', function() {
                if($scope.source) {
                    var promise = null;
                    var resUuid = null;
                    var type = null;
                    if (!jQuery.isEmptyObject($scope.$parent.service)) {
                        resUuid = $scope.$parent.service.resUuid;
                    }
                    else if (!jQuery.isEmptyObject($scope.$parent['masterService'])) {
                        resUuid = $scope.$parent['masterService'].resUuid;
                    } else if (!jQuery.isEmptyObject($scope.$parent['detailService'])) {
                        resUuid = $scope.$parent['detailService'].resUuid;
                    } else {
                        resUuid = '';
                    }
                    if ($scope.source.uuid) {
                        type = Constant.OBJECT_INFO_TYPE.MODIFY;
                        promise = ObjectInfoService.get($scope.domain, type, resUuid);
                    } else {
                        type = Constant.OBJECT_INFO_TYPE.ADD;
                        promise = ObjectInfoService.get($scope.domain, type, resUuid);
                        promise.then(function (response) {
                            $scope.initializeDefaultValuesForAdd(response.data);

                            if($scope.beforeObjectInfo) {
                                $scope.beforeObjectInfo(response.data);
                            }
                        })
                    }
                    promise.success(function(data) {
                        if(type) {
                            var jsonResult = data;
                            var test = '> content > *[tableName=' + $scope.domain+'][sysResUuid='+resUuid+']';
                            var jsonFilterResult = jF(test, jsonResult).get();
                            if (jsonFilterResult && jsonFilterResult.length > 0) {
                                data = jsonFilterResult[0][(type).toLowerCase() + 'ObjectInfo'];
                                setObjectInfo(data)
                            }
                            else{
                                ObjectInfoService.get($scope.domain, type,resUuid).success(function(data) {
                                    setObjectInfo(data);
                                });
                            }
			     $scope.objectInfo = data;
                        angular.forEach(Object.keys($scope.objectInfo), function (key) {
                            if ($scope.objectInfo[key].type == 'OBJECT' && $scope.source.customInfo != null && $scope.source.customInfo[key]) {
                                //判斷是否需覆寫開窗來源的url
                                if ($scope.source.customInfo[key].url) {
                                    $scope.objectInfo[key].url = $scope.source.customInfo[key].url;
                                }
                                if ($scope.source.customInfo[key].editable != null) {
                                    $scope.objectInfo[key].editable = $scope.source.customInfo[key].editable;
                                }
                        }
                    });
                    function setObjectInfo(data){
                        $scope.objectInfo = data;
                        angular.forEach(Object.keys($scope.objectInfo), function(key) {
                            if ($scope.objectInfo[key].type == 'DATE' && $scope.source[key]) {
                                $scope.source[key] = new Date($scope.source[key]);
                            }
                        })
                    }
                }
            });
 }
            });
 $scope.filterOrder = function (items, type) {
                var result = [];
                angular.forEach(items, function (value) {
                    if (value.type == type && value.show) {
                        result.push(value);
                    }
                });
                return $filter('orderBy')(result, 'order');
            };
            //Get all default value from object info
            $scope.initializeDefaultValuesForAdd = function(objectInfo) {
                angular.forEach(Object.keys(objectInfo), function(key) {
                    var defaultValue = objectInfo[key]['defaultValue'];

                    if(angular.isDefined(defaultValue) && String(defaultValue).length > 0) {
                        $scope.source[key] = objectInfo[key]['defaultValue'];
                    }
                })
            };
            $scope.hasFieldWithType = function(type) {
                var hasField = false;
                if($scope.objectInfo) {
                    angular.forEach($scope.objectInfo, function(item) {
                        if(item['type'] == type) {
                            hasField = true;
                        }
                    });
                }
                return hasField;
            };

            $scope.uploadImage = function (files, key) {
                $scope.progress = {value: 0};
                if (files) {
                        Upload.upload({
                            url: Constant.BACKEND_BASE + '/files',
                            fields: {},
                            file: files
                        }).progress(function (evt) {
                            $scope.progress.value = Math.min(100, parseInt(99.0 * evt.loaded / evt.total));
                        }).success(function (data) {
                            $timeout(function () {
                                    $scope.source[key]= data.path;
                            });
                        }).error(function (data) {
                            $scope.showError(data.code);
                        });
                }
            };

            $scope.random = Object.random();
            $scope.pageOption = {
                sizePerPage: 10,
                currentPage: 0,
                totalPage: 100,
                totalElements: 100,
                no: '',
                name: ''
            };

            $scope.openDlg = function(key, value) {
                $scope.key = key;
                $scope.fieldInfo = value;
                $scope.dataList = [];
                $scope.pageOption.no = '';
                $scope.pageOption.name = '';
                $scope.fieldInfo.params = {};
                if ($scope.source.customInfo && !jQuery.isEmptyObject($scope.source.customInfo[$scope.fieldInfo.name].queryInfo)) {
                    angular.forEach(Object.keys($scope.source.customInfo[$scope.fieldInfo.name].queryInfo), function (key) {
                        $scope.fieldInfo.params[key] = $scope.source.customInfo[$scope.fieldInfo.name].queryInfo[key];
                    })
                }
                $scope.queryAction(value);
            };

            $scope.queryAction = function () {
                $scope.fieldInfo.params.page = $scope.pageOption.currentPage;
                $scope.fieldInfo.params.size = $scope.pageOption.sizePerPage;
                $scope.fieldInfo.params.no = $scope.pageOption.no;
                $scope.fieldInfo.params.name = $scope.pageOption.name;
                $http.get(Constant.BACKEND_BASE + '/' + $scope.fieldInfo.url, {
                    params: $scope.fieldInfo.params
                }).success(function (data) {
                    if (data) {
                        if (data.content) {
                            $scope.dataList = data.content;
                            $scope.pageOption.totalPage = data.totalPages;
                            $scope.pageOption.totalElements = data.totalElements;
                        } else {
                            $scope.dataList = data;
                        }
                    }
                })
            };

            $scope.select = function(selectedItem) {
                $scope.source[$scope.key] = selectedItem;
                $scope.source[$scope.key + 'Uuid'] = selectedItem.uuid;
                $scope.close();
            };

            $scope.close = function() {
                $('#optionDlg-' + $scope.random).modal('hide');
            };

            $scope.DEFAULT_IMAGE_PATH = '/app/img/item.jpeg';
            $scope.getImageFullPath = function(path) {
                if(typeof path === 'object') {
                    return "";
                }
                if(typeof path != 'object' && path.indexOf('IMAGE') == 0) {
                    return Constant.BACKEND_BASE + '/app/assets/' + path;
                } else {
                    return Constant.BACKEND_BASE + '/app/assets/IMAGE/' + path;
                }
            };

            $scope.isDefaultImage = function(path) {
                if(path == $scope.DEFAULT_IMAGE_PATH) {
                    return true;
                } else {
                    return false;
                }
            };
        }
    }

});