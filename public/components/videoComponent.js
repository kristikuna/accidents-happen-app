(function() {
  var videoComponent = {
    template: `
      <div id="videoContainer">
      <div class="searchDiv">
        <input class="search" type="text" placeholder="Search" ng-model="filterText">
      </div>
      <div class="videoParent">
      <div ng-repeat="video in $ctrl.videos | filter: filterText track by $index" class="videoForm">
      <i class="material-icons" id="adminButton" ng-click="$ctrl.adminPage()">build</i>
      <a class="xbut homeButton" href="#!/home"><i class="material-icons">home</i></a>

        <h1 class="videoTitle">{{video.title}}</h1>
        <h3 class="videoSubTitle">{{video.subtitle}}</h3>

        <ng-youtube-embed
          video="video.src"
          autoplay="false"
          color="white"
          disablekb="true"
          end="">
        </ng-youtube-embed>
        </div>
      </div>
      </div>
      `,
    controller: function(WizardService, $location) {
      var $ctrl = this;

      WizardService.getVideo().then(function(response) {
        $ctrl.videos = response;
        $ctrl.source = $ctrl.videos.src;
        console.log($ctrl.videos[0].src);

      });
      $ctrl.adminPage = function() {
        $location.path('/login');
      }
    }
  }
  angular.module("app")
    .component("videoComponent", videoComponent)
}());
