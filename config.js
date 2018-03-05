
(function() {
    angular.module("app")
    .config(function($routeProvider) {
        $routeProvider
        .when("/accident", {
            template: "<accident-component></accident-component>"
        })
        .when("/form", {
            template: "<form-component></form-component>"
        })
        .when("/theft", {
            template: "<theft-component></theft-component>"
        })
        .when("/assault", {
            template: "<assault-component></assault-component>"
        })
        .when("/witness", {
            template: "<witness-component></witness-component>"
        })
        .otherwise({ redirectTo: "/form" });
    });
})();
