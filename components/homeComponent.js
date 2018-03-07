(function() {
  var homeComponent = {
    template: `

    <header  ng-style="$ctrl.height">
      <div class="headerTitle">
        <h1>Accidents Happen</h1>
        <button id="slideButton" ng-click="$ctrl.slide()" ng-show="$ctrl.show">SLIDE</button>
        <button id="slideButton" ng-click="$ctrl.slideDown()" ng-show="$ctrl.hide">SLIDE</button>
      </div>
    </header>
    <div class="homePageButtons" ng-style="$ctrl.display">
      <button type="button"><a href="#!/prev">Show History</a></button>
      <button type="button"><a href="#!/form">Get Help</a></button>
      <button type="button"><a href="#!/">Articles</a></button>
    </div>
    `,
    controller: function(){
      var $ctrl = this
      $ctrl.show = true;
      $ctrl.slide = function(){
        $ctrl.height = {
          "height": "35vh",
          "background-color": "#39414C",
          "background-image": "none",
        }
        $ctrl.display = {
          "display": "flex"
        }
        console.log($ctrl.height)
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
        $ctrl.show = true;
        $ctrl.hide = false;
      }

    }
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());
