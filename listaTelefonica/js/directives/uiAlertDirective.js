angular.module("listaTelefonica").directive("uiAlert", function () {
    return{
        templateUrl: "view/alert.html",
        restrict: "AE",
        transclude: true,
        scope:{
            /*
             no scope pode ser: title: @title.
             */
            title: "@",
            error: "=message"

        }
    };
});