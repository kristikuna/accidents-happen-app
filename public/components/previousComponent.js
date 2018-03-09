(function() {
    var previousComponent = {
        template: `
        <div class="profile">
        <a class="xbut xbutt" href="#!/home"><i class="material-icons">home</i></a>
          <div class="historyHeader">
            <div class="profilePic">

            </div>
            <div>
              <h2>GRANT CHIRPUS</h2>
            </div>
          </div>
          <h1 class="incidentHistory">Incident History</h1>
          <div class="history" ng-repeat="incident in $ctrl.whatever">
          <table>
          <tr>
            <th>Type of incident:</th>
            <td>{{ incident.type_of | uppercase}}</td>
          </tr>
            <tr>
              <th>Events that took place:</th>
              <td>{{ incident.events | uppercase}}</td>
            </tr>
            <tr>
              <th>Stolen or damaged property:</th>
              <td>{{ incident.property ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>Description or name:</th>
              <td>{{ incident.driver || incident.name_of ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>Contact info:</th>
              <td>{{ incident.phone ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>Make:</th>
              <td>{{ incident.make ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>Model:</th>
              <td>{{ incident.model ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>Color:</th>
              <td>{{ incident.color ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>Insurance info:</th>
              <td>{{ incident.insurance_info ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
              <th>License Plate:</th>
              <td>{{ incident.plate ||"n/a" | uppercase}}</td>
            </tr>
            <tr>
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
