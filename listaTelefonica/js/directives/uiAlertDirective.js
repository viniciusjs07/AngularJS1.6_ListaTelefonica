angular.module("listaTelefonica").directive("uiAlert", function () {
    return{
        templateUrl: "view/alert.html",
        restrict: "E",
        replace: true
    };
});