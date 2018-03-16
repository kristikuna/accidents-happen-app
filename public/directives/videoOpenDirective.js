(function () {
    function videoOpen() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("click", function () {
                    if ($element.parent().hasClass("videoLarge") == false) {
                        $element.parent().addClass("videoLarge");
                        $element.empty().text("close");
                    }else{
                        $element.parent().removeClass("videoLarge");
                        $element.empty().text("zoom_out_map");
                    }
                });
            }
        };

    }



    angular.module("app")
        .directive("videoOpen", videoOpen);
})();
