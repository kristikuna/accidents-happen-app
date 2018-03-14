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
                <label>Source Id:
                    <input type="text" ng-model="$ctrl.video.src">
                </label>
                <button type="submit">ADD VIDEO</button>
            </form>
        </div>
        
        <div class="adminLoginPage">
          <div class="videoDiv">
            <ul ng-repeat="videoInfo in $ctrl.videoObj">
            <li class="listItemInVideos" >{{videoInfo.title}}
              <span ng-click="showme=true">
                <i class="material-icons edit">mode_edit</i>
              </span>
              <span ng-click="$ctrl.removeMe(videoInfo.id)">
                <i class="material-icons close">delete_forever</i>
              </span>
              <div>
                <input type="text" ng-show="showme" ng-model="$ctrl.video.title" placeholder="Update video title">
                <input type="text" ng-show="showme" ng-model="$ctrl.video.subtitle" placeholder="Update video subtitle">
                <button ng-click="$ctrl.editTitle($ctrl.video,videoInfo.id)" ng-show="showme"><i class="material-icons">add</i></button>
                <i ng-show="showme" ng-click="showme=false" class="material-icons">close</i>
              </div>
            </li>
          </ul>
        </div>
      `,
      controller: function(WizardService,$location) {
        var $ctrl = this;
        $ctrl.videoObj;
        $ctrl.addVideo = function(video) {
            WizardService.setVideo(video).then(refreshList);;
        };
        WizardService.getVideo().then(function (response){
          $ctrl.videoObj = response;
        });
        $ctrl.removeMe = function(id){
          WizardService.deleteVideo(id).then(refreshList);
        }
        function refreshList(){
          WizardService.getVideo().then(function (response){
            $ctrl.videoObj = response;
            console.log(response);
          });
        }
        $ctrl.editTitle = function(video,id){
          WizardService.updateVideo(video,id).then(refreshList);
        }
      }

    };


    angular.module("app")
      .component("adminComponent", adminComponent)
  }());
