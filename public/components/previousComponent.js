(function() {
    var previousComponent = {
        template: `
        <div class="history" ng-repeat="incident in $ctrl.whatever">
          <p>Type of incident: {{ incident.type_of }}</p>
          <p>Events that took place: {{ incident.events }}</p>
          <p>Description of person: {{ incident.driver }}</p>
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
