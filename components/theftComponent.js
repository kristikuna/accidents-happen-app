(function() {
  var theftComponent = {
    template: `
    <div ng-switch="$ctrl.accident" class="accidentForm">
      <div class="tab carAccident1" ng-switch-when="1">
        <p>Call the police</p>
        <p>Keep calm</p>
        <button ng-click="$ctrl.getForm(2)" type="button">Back</button>
        <button ng-click="$ctrl.getForm(2)" type="button">Next</button>
      </div>

      <div class="tab" ng-switch-when="2">
        <form ng-submit="$ctrl.setDescription($ctrl.items)">
          <p>Did you see the person?</p>
          <button type="button" ng-click="showme=true">Yes</button>
          <button type="button" ng-click="$ctrl.getForm(3); showme=false">No</button>
          <p ng-show="showme">Please describe</p>
          <textarea ng-show="showme" name="name" rows="8" cols="80" ng-model="$ctrl.items.description"></textarea>
          <button ng-click="$ctrl.goBack()" type="button">Back</button>
          <button type="submit">Next</button>
        </form>
      </div>

      <div class="tab" ng-switch-when="3">
        <p>Your insurance claims representative and authorities may want a list of stolen items:</p>
        <form ng-submit="$ctrl.stolenItems($ctrl.items)">
          <textarea name="name" rows="8" cols="80" ng-model="$ctrl.items.stolenStuff"></textarea>
        <button ng-click="$ctrl.goBack()" type="button">Back</button>
        <button type="submit">Next</button>
        </form>
      </div>

      <div class="tab" ng-switch-when="4">
        <p>Write your account of the incident that took place</p>
        <form ng-submit="$ctrl.setEvents($ctrl.items)">
          <textarea name="name" rows="8" cols="80" ng-model="$ctrl.items.eventOfTheft"></textarea>
          <button ng-click="$ctrl.goBack()" type="button">Back</button>
          <button type="submit">Next</button>
        </form>
      </div>

      <div class="tab" ng-switch-when="5">
        <p>Timeline of Events</p>
        <div>
          <p>Description of person: {{$ctrl.theftDb.description || "n/a"}}</p>
          <p>Stolen Items: {{$ctrl.theftDb.stolenStuff}}</p>
          <p>Event Description: {{$ctrl.theftDb.eventOfTheft}}</p>
          <button ng-click="$ctrl.goBack()" type="button">BACK</button>
          <button ng-click="$ctrl.sendToService()" type="button">SUBMIT</button>
        </div>
      </div>
    </div>
    `,
    controller: function(WizardService,$location) {
      var $ctrl = this;
      $ctrl.theftDb = {};
      var type = "";

      $ctrl.accident = 1;

      $ctrl.getForm = function(item) {
        $ctrl.accident = item;
      }

      $ctrl.goBack = function() {
        $ctrl.accident = $ctrl.accident - 1;
      }

      $ctrl.setDescription = function(items){
        $ctrl.theftDb = items;

        $ctrl.getForm(3);

      }

      $ctrl.stolenItems = function(items) {
        $ctrl.theftDb = items;
        $ctrl.getForm(4);
      }

      $ctrl.setEvents = function(items) {
        $ctrl.theftDb = items;
        $ctrl.theftDb.type = "theft";
        $ctrl.getForm(5);
      }

      $ctrl.sendToService = function(){
        WizardService.setList($ctrl.theftDb);
        $location.path('/form')
      }
    }
  };


  angular.module("app")
    .component("theftComponent", theftComponent)
}());
