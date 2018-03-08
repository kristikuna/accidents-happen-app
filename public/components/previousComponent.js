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
            <p>Type of incident:</p><span>{{ incident.type_of | uppercase}}</span>
            <p>Events that took place:</p><span> {{ incident.events | uppercase}}</span>
            <p>Description of person:</p><span>  {{ incident.driver | uppercase}}</span>
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
