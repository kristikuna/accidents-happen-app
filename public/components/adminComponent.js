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
        <table ng-repeat="videoInfo in $ctrl.videoObj">
            <tr>
              <th>Title:</th>
              <td>{{ videoInfo.title | uppercase}}</td>
            </tr>
            <tr ng-if="incident.events">
              <th>Subtitle:</th>
              <td>{{ videoInfo.subtitle | uppercase}}</td>
            </tr>
            <tr ng-if="incident.property">
              <th>Source:</th>
              <td>{{ videoInfo.src ||"n/a" | uppercase}}</td>
            </tr>
          </table>
        <div>
        <ul ng-repeat="videoInfo in $ctrl.videoObj">
          <li>{{videoInfo.title}}
          <span ng-click="showme=true">
            <i class="material-icons">mode_edit</i>
          </span>
            <span ng-click="$ctrl.removeMe(videoInfo.id)">
              <i class="material-icons">close</i>
            </span>
            <div>
              <input type="text" ng-show="showme" ng-model="$ctrl.video.title" placeholder="Update video title">
              <input type="text" ng-show="showme" ng-model="$ctrl.video.subtitle" placeholder="Update video subtitle">
              <button ng-click="$ctrl.editTitle($ctrl.video,videoInfo.id)" ng-show="showme"><i class="material-icons">add</i></button>
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
