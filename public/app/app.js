(function() {

    angular
        .module('app', ['ngRoute'])
        .config(['$logProvider', '$routeProvider', '$locationProvider', function ($logProvider, $routeProvider, $locationProvider) {

        $logProvider.debugEnabled(true);

        //$locationProvider.hashPrefix('!');

        //$locationProvider.html5Mode(true);


        $routeProvider
            .when('/', {
                controller: 'HomeController as home',
                templateUrl: '/app/templates/home.html'
            })
            .when('/schools', {
                controller: 'AllSchoolsController as schools',
                templateUrl: '/app/templates/allSchools.html'
            })
            .when('/classrooms', {
                controller: 'AllClassroomsController as classrooms',
                templateUrl: '/app/templates/allClassrooms.html'
            })
            .when('/activities', {
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html',
                resolve: {
                    activities: function (dataService) {
                        return dataService.getAllActivities();
                    }
                }
            })
            .when('/classrooms/:id', {
                templateUrl: '/app/templates/classroom.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .when('/classrooms/:id/detail/:month?', {
                templateUrl: '/app/templates/classroomDetail.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .otherwise('/');


    }])

    .run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

            console.debug('Successfully Changed Routes from run function!');

            console.debug(event);
            console.debug(current);
            console.debug(previous);

        });

        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {

            console.debug('error changing routes');

            console.debug(event);
            console.debug(current);
            console.debug(previous);
            console.debug(rejection);

        });

    }]);

}());