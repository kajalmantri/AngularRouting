(function () {

    'use strict';

    var AllClassroomsController = function AllClassroomsController(dataService, notifier) {

        var self = this;

        dataService.getAllClassrooms()
            .then(function(classrooms) {
                self.allClassrooms = classrooms;
            })
            .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    };

    AllClassroomsController.$inject = ['dataService', 'notifier'];

        angular
            .module('app')
            .controller('AllClassroomsController', AllClassroomsController);

}());