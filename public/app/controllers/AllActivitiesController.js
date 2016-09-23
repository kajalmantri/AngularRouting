(function() {
    'use strict';

    var AllActivitiesController = function AllActivitiesController(dataService, notifier, $location, activities) {

        var self = this;

        self.selectedMonth = 1; // default to January

        self.allActivities = activities;

        self.search = function() {
            var classroom_detail_url = '/classrooms/' + self.selectedClassroom.id + '/detail/' + self.selectedMonth;
            $location.url(classroom_detail_url);
        };


        dataService.getAllClassrooms()
            .then(function(classrooms) {
                self.allClassrooms = classrooms;
                self.selectedClassroom = classrooms[0];
            })
            .catch(showError);

        //dataService.getAllActivities()
        //    .then(function(activities) {
        //        self.allActivities = activities;
        //    })
        //    .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    };

    AllActivitiesController.$inject = ['dataService', 'notifier', '$location', 'activities'];

    angular
        .module('app')
        .controller('AllActivitiesController', AllActivitiesController);

}());
