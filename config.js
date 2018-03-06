
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
        .when("/hitandrun", {
            template: "<hitandrun-component></hitandrun-component>"
        })
        .when("/witness", {
            template: "<witness-component></witness-component>"
        })
        .when("/home", {
            template: "<home-component></home-component>"
        })
        .otherwise({ redirectTo: "/home" });
    });
})();
