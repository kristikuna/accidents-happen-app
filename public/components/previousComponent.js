(function() {
    var previousComponent = {
        template: `
        <div class="profile">
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
          </div>
        </div>
        `,
        controller: function(WizardService, $location) {
            var $ctrl = this;

            WizardService.getList().then(function (response){
              $ctrl.whatever = response;
              console.log(response);
            });

        }
      }
      angular.module("app")
        .component("previousComponent", previousComponent)
})();
