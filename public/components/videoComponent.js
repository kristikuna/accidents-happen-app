(function() {
    var videoComponent = {
      template: `
      <div ng-repeat="video in $ctrl.videos" class="videoForm">
        <h1>{{video.title}}</h1>
        <iframe
            ng-src="https://www.youtube.com/embed/" + "{{video.src | trusted}}">
        </iframe>
        {{video.src}}
      </div>

      `,
      controller: function(WizardService,$location) {
        var $ctrl = this;

        WizardService.getVideo().then(function (response){
          $ctrl.videos = response;
          // $ctrl.videos.src = response.src;
          $ctrl.source = $ctrl.videos.src;
          console.log($ctrl.videos[0].src);
          // console.log($ctrl.videos.src);
          // console.log($ctrl.videos.title);
        });
      }


    }
    angular.module("app")
      .component("videoComponent", videoComponent)
  }());
