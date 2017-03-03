angular.module('IOne').directive('objectQuery', function($http, Constant, ObjectInfoService) {
    return {
        scope: {
            domain: "=",
            listFilterOption: "=",
            callback: "&",
            beforeObjectInfo: '&'
        },
        templateUrl: '../src/app/src/common/js/directives/objectQuery.html',
        link: function($scope) {
            $scope.Constant = Constant;
            $scope.displayOption = {
                showAll: false
            };

            $scope.init = function(key, value) {
                $scope.listFilterOption[key] = value;
            };

            //Get all default value from object info
            $scope.initializeDefaultValues = function(objectInfo) {
                angular.forEach(Object.keys(objectInfo), function(key) {
                    var defaultValue = objectInfo[key]['defaultValue'];

                    if (objectInfo[key]['show'] && angular.isDefined(defaultValue) && String(defaultValue).length > 0) {
                        $scope.init(key, objectInfo[key]['defaultValue']);
                    }
                })
            };
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
            ObjectInfoService.getCustomer($scope.domain, Constant.OBJECT_INFO_TYPE.QUERY, resUuid).success(function(data) {
		var jsonResult = data;
        if(!jQuery.isEmptyObject(jsonResult)){
                var test = '> content > *[tableName='+$scope.domain+'][sysResUuid='+resUuid+']';
                var jsonFilterResult = jF(test, jsonResult).get();
                if(jsonFilterResult && jsonFilterResult.length > 0) {
                    data = jsonFilterResult[0][Constant.OBJECT_INFO_TYPE.QUERY.toLowerCase() + 'ObjectInfo'];
                    setObjectInfo(data)
                }
                else{
                    ObjectInfoService.get($scope.domain, Constant.OBJECT_INFO_TYPE.QUERY, resUuid).success(function(data) {
                        setObjectInfo(data);
                    });
                }
        }
            });
            function setObjectInfo(data) {
                $scope.objectInfo = data;
                $scope.initializeDefaultValues(data);

                if($scope.beforeObjectInfo) {
                    $scope.beforeObjectInfo($scope.objectInfo);
                }
            }
            $scope.search = function() {
                $scope.callback();
            };

        }
    }

});