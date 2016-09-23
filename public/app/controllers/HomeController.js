(function() {

    'use strict';

    var HomeController = function HomeController(dataService, notifier, $route, $log) {

        var self = this;

        self.message = 'Welcome to Boot Camp!';

        self.refresh = function() {
            $log.debug($route.current);
            $log.debug($route.routes);
            $route.reload();
        };

        dataService.getAllSchools()
            .then(function(schools) {
                self.allSchools = schools;
                self.schoolCount = schools.length;
            })
            .catch(showError);

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                self.allClassrooms = classrooms;
                self.classroomCount = classrooms.length;
            })
            .catch(showError);

        dataService.getAllActivities()
            .then(function(activities) {
                self.allActivities = activities;
                self.activityCount = activities.length;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    };

    HomeController.$inject = ['dataService', 'notifier', '$route', '$log'];

    angular
        .module('app')
        .controller('HomeController', HomeController);

}());
