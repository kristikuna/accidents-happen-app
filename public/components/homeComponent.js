(function () {
  var homeComponent = {
    template: `


    <header>
      <div class="headerTitle" ng-swipe-up="$ctrl.swipeUp()" ng-swipe-down="$ctrl.swipeDown()">
        <h1 class="formTitle">Accidents Happen</h1>
        <i button-rotate class="material-icons slide" id="slideButton">arrow_upward</i>
        <i ng-click="$ctrl.showAlert();" id="helpButton" class="material-icons">call</i>
      </div>
    </header>
    <div class="homePageButtons">
    <a id="help" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/form"><span class="imageBackgroundText" >Get Help</span></a>
    <a id="previous" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/prev"><span class="imageBackgroundText" >History</span></a>
    <a id="article" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/videos"><span class="imageBackgroundText" >Media</span></a>
    </div>
    `,
    controller: function ($location) {
      var $ctrl = this
      $ctrl.show = true;
      $ctrl.swipeUp = function () {
        var arrow = $("#slideButton");
        console.log("swipe-up");
        if ($("#slideButton").hasClass("slide") == true) {
          console.log("true");
          arrow.css({
            "transform": "rotate(180deg)",
            "transition-duration": "2200ms"
          });
          $("header").css("height", "35vh");
          $(".homePageButtons").css("display", "flex");
          $(".formTitle").css("color", "#39414C");
          arrow.removeClass("slide");
          $("header").addClass("changeBackground");
        }
      }
      $ctrl.swipeDown = function () {
        var arrow = $("#slideButton");
        console.log("swipe-down");
        if (arrow.hasClass("slide") == false) {
          console.log("false");
          arrow.css({
            "transform": "rotate(0deg)",
            "transition-duration": "2200ms"
          });
          $("header").css("height", "100vh");
          $(".homePageButtons").css("display", "none");
          $(".formTitle").css("color", "#eae8e5");
          arrow.addClass("slide");
          $("header").removeClass("changeBackground");
        }
      }
      $ctrl.showAlert = function () {
        alert("Authorities have be notified, keep calm.");
      }
    }
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());