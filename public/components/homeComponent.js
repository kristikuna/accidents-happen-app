(function() {
  var homeComponent = {
    template: `


    <header>
      <div class="headerTitle">
        <h1 class="formTitle">Accidents Happen</h1>
        <i button-rotate class="material-icons slide" id="slideButton">arrow_upward</i>
        <i ng-click="$ctrl.showAlert();" id="helpButton" class="material-icons">call</i>
      </div>
    </header>
    <div class="homePageButtons">
    <a id="previous" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/prev"><span class="imageBackgroundText" >History</span></a>
    <a id="help" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/form"><span class="imageBackgroundText" >Get Help</span></a>
    <a id="article" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="500" class="imgButton" href="#!/videos"><span class="imageBackgroundText" >Media</span></a>
    </div>
    `,
    controller: function($location){
      var $ctrl = this
      $ctrl.show = true;

      $ctrl.showAlert = function(){
        alert("Authorities have be notified, keep calm.");
      }
    }
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());
