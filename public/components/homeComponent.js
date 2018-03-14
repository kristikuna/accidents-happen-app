(function() {
  var homeComponent = {
    template: `


    <header ng-style="$ctrl.height">
      <div class="headerTitle">
        <h1 ng-style="$ctrl.font" class="formTitle">Accidents Happen</h1>
        <i button-rotate class="material-icons slideOne" id="slideButton" ng-click="$ctrl.slide()" ng-show="$ctrl.show">arrow_upward</i>
        <i button-rotate class="material-icons slideTwo" id="slideButton" ng-click="$ctrl.slideDown()" ng-show="$ctrl.hide">arrow_downward</i>
        <i ng-click="$ctrl.showAlert();" id="helpButton" class="material-icons">call</i>
      </div>
    </header>
    <div class="homePageButtons" ng-style="$ctrl.display">
    <a id="previous" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/prev"><span class="imageBackgroundText" >History</span></a>
    <a id="help" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/form"><span class="imageBackgroundText" >Get Help</span></a>
    <a id="article" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/videos"><span class="imageBackgroundText" >Articles</span></a>
    </div>
    `,
    controller: function($location){
      var $ctrl = this
      $ctrl.show = true;
      $ctrl.slide = function(){
        $ctrl.height = {
          "height": "35vh",
          "background": "url('photo/fabric.png') no-repeat"
          // "background-color": "#39414C",
          // "box-shadow": "inset 0 0 0 10000px rgba(57,65,75,1)"
        }
        $ctrl.display = {
          "display": "flex"
        }
        $ctrl.font = {
          "color": "#39414C"
        }
        $ctrl.show = false;
        $ctrl.hide = true;
      }

      $ctrl.slideDown = function(){
        $ctrl.height = {
          "height": "100vh",
        }
        $ctrl.display = {
          "display": "none"
        }
        $ctrl.font ={
          "color": "#eae8e5"
        }
        $ctrl.show = true;
        $ctrl.hide = false;
      }
      $ctrl.showAlert = function(){
        alert("Authorities have be notified, keep calm.");
      }
    }
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());
