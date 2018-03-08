(function() {
    var previousComponent = {
        template: `
        <div class="profile">
        <a class="xbut" href="#!/home"><i class="material-icons x">clear</i></a>
          <div class="historyHeader">
            <div class="profilePic">

            </div>
            <div>
              <h2>GRANT CHIRPUS</h2>
            </div>
          </div>
          <h1>Incident History</h1>
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
              <th>Description of person:</th>
              <td>{{ incident.driver | uppercase}}</td>
            </tr>
          </table>
          <button ng-click="$ctrl.delete(incident.id)" style="margin-left: 20px;border-radius: 5px; padding: 2px">delete</button>
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
