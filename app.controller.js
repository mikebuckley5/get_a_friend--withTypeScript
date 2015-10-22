var app;
(function (app) {
    var controller;
    (function (controller) {
        'use strict';
        var vm;
        var MainCtrl = (function () {
            function MainCtrl($scope, mainSrvc) {
                this.$scope = $scope;
                this.mainSrvc = mainSrvc;
                vm = this.$scope;
                vm.intro = "Are you lonely?";
                vm.well = "well you better get some friends...";
                vm.getFriend = function () {
                    mainSrvc.getFriends()
                        .then(function (response) {
                        vm.newData = response;
                        vm.yourFriend = "Your new best friend:";
                        $(".imgBorder").css("display", "block");
                        $(".removeGetButton").css("display", "none");
                        vm.intro = '';
                        vm.well = '';
                    });
                };
            }
            MainCtrl.$inject = ['$scope', 'mainSrvc'];
            return MainCtrl;
        })();
        angular
            .module('app')
            .controller('app.mainCtrl', MainCtrl);
    })(controller = app.controller || (app.controller = {}));
})(app || (app = {}));
//# sourceMappingURL=app.controller.js.map