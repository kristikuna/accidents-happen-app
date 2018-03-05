
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
        .otherwise({ redirectTo: "/form" });
    });
})();
