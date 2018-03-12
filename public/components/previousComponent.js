(function() {
    var previousComponent = {
        template: `
        <div class="profile"  >
        <a class="xbut xbutt" href="#!/home"><i class="material-icons">home</i></a>
          <div class="historyHeader">
            <div class="profilePic">

            </div>
            <div>
              <h2>GRANT CHIRPUS</h2>
            </div>
          </div>
          <h1 class="incidentHistory">Incident History</h1>
          <div class="history" ng-repeat="incident in $ctrl.whatever" ng-style="$ctrl.height" ng-click="$ctrl.slide()">
          <table>
          <tr ng-if="incident.type_of">
            <th>Type of incident:</th>
            <td>{{ incident.type_of | uppercase}}</td>
          </tr>
            <tr ng-if="incident.events">
              <th>Events that took place:</th>
              <td>{{ incident.events | uppercase}}</td>
            </tr>
            <tr ng-if="incident.property">
              <th>Stolen or damaged property:</th>
              <td>{{ incident.property ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.driver">
              <th>Description of driver:</th>
              <td>{{ incident.driver ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.name_of">
              <th>Name:</th>
              <td> {{incident.name_of ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.phone">
              <th>Contact info:</th>
              <td>{{ incident.phone ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.make">
              <th>Make:</th>
              <td>{{ incident.make ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.model">
              <th>Model:</th>
              <td>{{ incident.model ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.color" >
              <th>Color:</th>
              <td>{{ incident.color ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.insurance_info">
              <th>Insurance info:</th>
              <td>{{ incident.insurance_info ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.plate">
              <th>License Plate:</th>
              <td>{{ incident.plate ||"n/a" | uppercase}}</td>
            </tr>
            <tr ng-if="incident.direction">
              <th>Direction:</th>
              <td>{{ incident.direction ||"n/a" | uppercase}}</td>
            </tr>
          </table>
          <button class="profileDelete" ng-click="$ctrl.delete(incident.id)"><i class="material-icons">delete_forever</i></button>
          </div>
        </div>
        `,
        controller: function(WizardService, $location) {
            var $ctrl = this;

            WizardService.getList().then(function (response){
              $ctrl.whatever = response;
              console.log(response);
            });

            $ctrl.slide = function(){
              $ctrl.height = {
                "max-height": "2000px",
                "background-color":"green"
              }
              console.log("click");
            }
            $ctrl.delete = function(id){
              console.log("delete from component");
              WizardService.deleteItem(id).then(refreshList);
            }

            function refreshList(){
              WizardService.getList().then(function (response){
                $ctrl.whatever = response;
                console.log(response);
              });
            }

        }
      }
      angular.module("app")
        .component("previousComponent", previousComponent)
})();
