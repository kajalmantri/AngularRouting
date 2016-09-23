(function () {

    angular.module('app')
        .factory('notifier', notifier);

    function notifier() {

        toastr.options = {
            "showDuration": "300",
            "timeOut": "2000"
        };

         function _success(message) {
            toastr.success(message);
        }

        function _error(message) {
            toastr.error(message);
        }

        return {
            success: _success,
            error: _error
        };       
    }

}());