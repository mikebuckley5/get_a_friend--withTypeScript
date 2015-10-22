module app {
    'use strict';

    export interface IFriendModel {
        firstName: string;
        lastName: string;
        location: string;
        gender: string;
        image: string;
        phone: string;
        getFriends: any;
    }

   export class MainSrvc implements IFriendModel {
        firstName: string;
        lastName: string;
        location: string;
        gender: string;
        image: string;
        phone: string;
        getFriends: any;

        static $inject = ['$http'];

        constructor($http: ng.IHttpService) {

            this.getFriends = (): any => {
                return $http.get('https://randomuser.me/api/')
                    .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
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
            }
        }
    }

    angular
        .module('app')
        .service('mainSrvc', MainSrvc);
}