(function() {
  var videoComponent = {
    template: `
      <div id="videoContainer">
      <div class="searchDiv">
        <input class="search" type="text" placeholder="Search" ng-model="filterText">
      </div>
      <div class="videoParent">
      <a class="videoButton" href="#!/login"><i class="material-icons" id="adminButton">build</i></a>
      <a class="videoButton" href="#!/home"><i class="material-icons" id="homeButton">home</i></a>
      <div ng-repeat="video in $ctrl.videos | filter: filterText track by $index" class="videoForm">
      <i video-open class="material-icons x videoOpener">zoom_out_map</i>
      <h3 class="videoTitle">{{video.title}}</h3>
        <p class="videoSubTitle">{{video.subtitle}}</p>

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
