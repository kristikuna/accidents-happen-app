(function () {
    function buttonRotate() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("click", function () {
                    if($element.hasClass("slideOne") == true) {
                        $(".slideTwo").css("transform", "rotate(180deg)").css("transition-duration", "3000ms");
                    }else{
                        $(".slideOne").css("transform", "rotate(180deg)").css("transition-duration", "3000ms");
                    }
                });
            }
        };

    }



    angular.module("app")
        .directive("buttonRotate", buttonRotate);
})();