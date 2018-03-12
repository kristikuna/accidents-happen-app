(function() {
    var videoComponent = {
      template: `
      <div ng-repeat="video in $ctrl.videos" class="videoForm">
      <a class="xbut xbutt" href="#!/home"><i class="material-icons">home</i></a>

        <h1 class="videoTitle">{{video.title}}</h1>
        <h3 class="videoSubTitle">{{video.subtitle}}</h3>

        <ng-youtube-embed
          video="video.src"
          autoplay="false"
          color="white"
          disablekb="true"
          end="20">
        </ng-youtube-embed>

      </div>

      `,
      controller: function(WizardService,$location) {
        var $ctrl = this;

        WizardService.getVideo().then(function (response){
          $ctrl.videos = response;
          $ctrl.source = $ctrl.videos.src;
          console.log($ctrl.videos[0].src);

        });
      }
    }
    angular.module("app")
      .component("videoComponent", videoComponent)
  }());
