module app.controller {
    'use strict';

    var vm;

    interface IMainCtrl {
        getFriend: any;
        intro: string;
        well: string;
    }

    class MainCtrl implements IMainCtrl {
        intro: string;
        well: string;
        getFriend: any;

        static $inject = ['$scope', 'mainSrvc'];

        constructor(public $scope: ng.IScope, public mainSrvc: MainSrvc) {
            vm = this.$scope;
            vm.intro = "Are you lonely?";
            vm.well = "well you better get some friends...";

            vm.getFriend = (): any => {
                mainSrvc.getFriends()
                    .then((response) => {
                        vm.newData = response;
                        vm.yourFriend = "Your new best friend:";
                        $(".imgBorder").css("display", "block");
                        $(".removeGetButton").css("display", "none");
                        vm.intro = '';
                        vm.well = '';
                    });
            }
        }
    }

    angular
        .module('app')
        .controller('app.mainCtrl', MainCtrl);
}