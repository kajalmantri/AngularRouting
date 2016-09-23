(function () {

    'use strict';

    var ClassroomController = function ClassroomController(dataService, notifier, $routeParams) {

        var self = this;

        self.month = $routeParams.month;

        dataService.getClassroom($routeParams.id)
            .then(function (classroom) {
                self.currentClassroom = classroom;

                if ($routeParams.month) {
                    if (classroom.activities.length > 0) {
                        self.timePeriod = dataService.getMonthName($routeParams.month);
                    }
                    else {
                        self.timePeriod = 'No activities this month';
                    }
                }
                else {
                    self.timePeriod = 'All activities';
                }

            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    };

    ClassroomController.$inject = ['dataService', 'notifier', '$routeParams'];

    angular
        .module('app')
        .controller('ClassroomController', ClassroomController);


}());