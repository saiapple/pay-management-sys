angular.module('IOne').directive('pagination', function() {
    return {
        scope:{
            option: '=',
            callback: '&'
        },
        templateUrl: '../src/app/src/common/js/directives/pagination.html',
        link: function($scope) {
            $scope.prePage = function() {
                if($scope.option.currentPage > 0) {
                    $scope.option.currentPage = $scope.option.currentPage-1;
                    $scope.callback();
                }
            };

            $scope.nextPage = function() {
                if($scope.option.currentPage < $scope.option.totalPage - 1) {
                    $scope.option.currentPage = $scope.option.currentPage+1;
                    $scope.callback();
                }
            };

            $scope.firstPage = function() {
                if($scope.option.currentPage != 0) {
                    $scope.option.currentPage = 0;
                    $scope.callback();
                }
            };

            $scope.lastPage = function() {
                if($scope.option.currentPage != $scope.option.totalPage - 1) {
                    $scope.option.currentPage = $scope.option.totalPage - 1;
                    $scope.callback();
                }
            }
        }
    }
});

angular.module('IOne').directive('datePicker', function () {
    return {
        link: function ($scope, $element) {
            if (!jQuery.isEmptyObject($scope.$parent.value) && !jQuery.isEmptyObject($scope.$parent.value.format) && 'yyyy-MM-dd HH:mm:ss' === $scope.$parent.value.format) {
                $element.attr('id', getIDTime()).datetimepicker({
                    format: 'YYYY-MM-DD HH:mm:ss'
                });
                var $result = $('#' + $element.attr('id'));
                $element.find('input').blur(function () {
                    $scope.source[$scope.key] = moment(new Date($result.data()['date'])).format('YYYY-MM-DD HH:mm:ss');
                });
                $scope.$watch($result.data()['date'], function () {
                    var dateInput = String($scope.source[$scope.key]);
                    if ($element.find('input').val() && !(dateInput.indexOf('-') != -1)) {
                        $scope.source[$scope.key] = moment(new Date($element.find('input').val())).format('YYYY-MM-DD HH:mm:ss');
                        $scope.source[$scope.key] = moment(new Date($element.find('input').val()).toISOString()).utc().format('YYYY-MM-DD HH:mm:ss');
                    }
                });
            }
            else {
                $element.datepicker({
                    format: 'yyyy-mm-dd'
                });
                $scope.$watch($element.data(), function () {
                    if ($element.find('input').val()) {
                        $scope.source[$scope.key] = moment(new Date($element.find('input').val())).format('YYYY-MM-DD');
                    }
                });
            }
        }
    };
});

function getIDTime() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
/**
 * INSPINIA - Responsive Admin Theme
 *
 */


/**
 * pageTitle - Directive for set Page title - mata title
 */
function pageTitle($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'INSPINIA | Responsive Admin Theme';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'INSPINIA | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
}
/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */
function sideNavigation($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function(){
                element.metisMenu();
            });
        }
    };
}
/**
 * iboxTools - Directive for iBox tools elements in right corner of ibox
 */
function iboxTools($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/ibox_tools.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var ibox = $element.closest('div.ibox');
                var icon = $element.find('i:first');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                $timeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            },
                // Function for close ibox
                $scope.closebox = function () {
                    var ibox = $element.closest('div.ibox');
                    ibox.remove();
                }
        }
    };
}
/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
function minimalizaSidebar($timeout) {
    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function ($scope, $element) {
            $scope.minimalize = function () {
                $("body").toggleClass("mini-navbar");
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    $('#side-menu').hide();
                    // For smoothly turn on menu
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(400);
                        }, 200);
                } else if ($('body').hasClass('fixed-sidebar')){
                    $('#side-menu').hide();
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(400);
                        }, 100);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');
                }
            }
        }
    };
}
/**
 * iboxTools with full screen - Directive for iBox tools elements in right corner of ibox with full screen option
 */
function iboxToolsFullScreen($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/ibox_tools_full_screen.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var ibox = $element.closest('div.ibox');
                var icon = $element.find('i:first');
                var content = ibox.find('div.ibox-content');
                content.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                $timeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            };
            // Function for close ibox
            $scope.closebox = function () {
                var ibox = $element.closest('div.ibox');
                ibox.remove();
            };
            // Function for full screen
            $scope.fullscreen = function () {
                var ibox = $element.closest('div.ibox');
                var button = $element.find('i.fa-expand');
                $('body').toggleClass('fullscreen-ibox-mode');
                button.toggleClass('fa-expand').toggleClass('fa-compress');
                ibox.toggleClass('fullscreen');
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 100);
            }
        }
    };
}



/**
 *
 * Pass all functions into module
 */
angular
    .module('IOne')
    .directive('pageTitle', pageTitle)
    .directive('sideNavigation', sideNavigation)
    .directive('iboxTools', iboxTools)
    .directive('minimalizaSidebar', minimalizaSidebar)
    .directive('iboxToolsFullScreen', iboxToolsFullScreen);
