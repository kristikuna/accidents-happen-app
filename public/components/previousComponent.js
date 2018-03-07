(function() {
    var previousComponent = {
        template: `
        <div class="history" ng-repeat="incident in $ctrl.whatever">
          <p>Type of incident: {{ incident.type }}</p>
          <p>Events that took place: {{ incident.event }}</p>
          <p>Description of person: {{ incident.description }}</p>
        </div>
        `,
        controller: function(WizardService, $location) {
            var $ctrl = this;
            $ctrl.whatever = WizardService.sendList();
        }
      }
      angular.module("app")
        .component("previousComponent", previousComponent)
})();
