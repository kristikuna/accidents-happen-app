(function() {
  var videoComponent = {
    template: `
      <div id="videoContainer">
      <div class="searchDiv">
        <input class="search" type="text" placeholder="Search" ng-model="filterText">
      </div>
      <div class="videoParent">
      <i class="material-icons" id="adminButton" ng-click="$ctrl.adminPage()">build</i>
      <a class="xbut homeButton" href="#!/home"><i class="material-icons">home</i></a>
      <div ng-repeat="video in $ctrl.videos | filter: filterText track by $index" class="videoForm" ng-class="{'videoLarge':video.id == $ctrl.selectedVideo}" ng-click="$ctrl.setClickedRow(video.id)" ng-dblclick="$ctrl.slideSmall()">
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
      $ctrl.setClickedRow = function(id){
        $ctrl.selectedVideo = id;
        console.log("click" + id);
      }

      $ctrl.slideSmall = function(){
        $ctrl.selectedVideo = null;
        console.log("doubleclick");
      }
    }
  }
  angular.module("app")
    .component("videoComponent", videoComponent)
}());
