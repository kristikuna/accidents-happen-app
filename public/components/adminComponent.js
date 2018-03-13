(function() {
    var adminComponent = {
      template: `
        <h1>Make changes to your site!</h1>
        <a class="xbut xbutt" href="#!/home"><i class="material-icons">home</i></a>
        <div class="adminLoginPage">
            <form class="loginForm" ng-submit="$ctrl.addVideo($ctrl.video)">
                <h3>add a video</h3>
                <label>Title: 
                    <input type="text" ng-model="$ctrl.video.title">
                </label>
                <label>SubTitle: 
                    <input type="text" ng-model="$ctrl.video.subtitle">
                </label>
                <label>Source: 
                    <input type="text" ng-model="$ctrl.video.src">
                </label>
                <button type="submit">ADD VIDEO</button>
            </form>
        </div>
      `,
      controller: function(WizardService,$location) {
        var $ctrl = this;
        $ctrl.addVideo = function(video) {
            // WizardService.setVideo(video);
        };
      }

    };


    angular.module("app")
      .component("adminComponent", adminComponent)
  }());