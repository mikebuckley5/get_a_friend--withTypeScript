var app;
(function (app) {
    'use strict';
    var MainSrvc = (function () {
        function MainSrvc($http) {
            this.getFriends = function () {
                return $http.get('https://randomuser.me/api/')
                    .then(function (response) {
                    var shortRes = response.data.results[0].user;
                    var userObj = {
                        firstName: shortRes.name.first,
                        lastName: shortRes.name.last,
                        location: shortRes.location.state,
                        gender: shortRes.gender,
                        image: shortRes.picture.medium,
                        phone: shortRes.cell
                    };
                    return userObj;
                });
            };
        }
        MainSrvc.$inject = ['$http'];
        return MainSrvc;
    })();
    app.MainSrvc = MainSrvc;
    angular
        .module('app')
        .service('mainSrvc', MainSrvc);
})(app || (app = {}));
//# sourceMappingURL=app.service.js.map