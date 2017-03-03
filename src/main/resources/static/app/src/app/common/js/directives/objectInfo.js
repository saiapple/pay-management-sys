angular.module('IOne').directive('objectInfo', function($http, $rootScope, Constant, ObjectInfoService, CptService) {
    return {
        scope: {
            source: '=',
            domain: "=",
            sysCptUuid: "=",
            beforeObjectInfo: '&'
        },
        templateUrl: '../src/app/src/common/js/directives/objectInfo.html',
        link: function($scope) {
            $scope.limitDisplaySize = 9;
            $scope.commonAll = true;
            $scope.hiddenCptList = [];
            //Get current user's cpt list to filter the display on UI.
            if($scope.sysCptUuid) {
                CptService.getAll({
                    sysResUuid: $scope.sysCptUuid
                }).success(function(data) {
                    $scope.cptList = data;

                    angular.forEach($scope.cptList, function(item) {
                        //find cpt that don't need to display
                        if(item.displayFlag == '2') {
                            $scope.hiddenCptList.push(item.sysCpt.value);
                        }
                    })
                })
            }
var resUuid = null;
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
            if($scope.source) {
                ObjectInfoService.getCustomer($scope.domain, Constant.OBJECT_INFO_TYPE.ENTITY, resUuid).success(function(data) {                     
		    var jsonResult = data;
                    var test = '> content > *[tableName='+$scope.domain+'][sysResUuid='+resUuid+']';
                    var jsonFilterResult = jF(test, jsonResult).get();
                    if(jsonFilterResult && jsonFilterResult.length > 0) {
                        data = jsonFilterResult[0][Constant.OBJECT_INFO_TYPE.ENTITY.toLowerCase() + 'ObjectInfo'];
                        setObjectInfo(data)
                    }
                    else{
                        ObjectInfoService.get($scope.domain, Constant.OBJECT_INFO_TYPE.ENTITY, resUuid).success(function(data) {
                            setObjectInfo(data);
                        });
                    }
                });
            }
            function setObjectInfo(data){
                $scope.objectInfo = data;
                $scope.objectInfoValues = [];

                angular.forEach(Object.keys($scope.objectInfo), function (key) {
if (false == $scope.objectInfo[key].common) {
                            $scope.commonAll = false;
                        }
                    $scope.objectInfoValues.push($scope.objectInfo[key]);
                });

                if ($scope.beforeObjectInfo) {
                    $scope.beforeObjectInfo($scope.objectInfo);
                }
            }
        }
    }

});