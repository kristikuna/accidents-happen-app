(function() {
  var assaultComponent = {
    template: `

  <div ng-switch="$ctrl.assault" class="assaultForm">

  <div class="tab carAccident1" ng-switch-when="1">
    <button ng-click="$ctrl.getForm(2)" $ctrl.getType('theft')" type="button">Theft</button>
    <button ng-click="$ctrl.getForm(2)" $ctrl.getType('assault')" type="button">Assault</button>
  </div>

  <div class="tab assaultForm2" ng-switch-when="2">
  <p>Write down your memories:</p>

  <form ng-submit="$ctrl.setAssault($ctrl.action)">
    <label>Who was involed?<input type="text" ng-model="$ctrl.action.who"></label>
    <label>What time did the action take place?<input type="text" ng-model="$ctrl.action.when"></label>
    <label>Where did the action occur?<input type="text" ng-model="$ctrl.action.where"></label>
    <label>What happened?  Include any events leading to or immediately following the incidient.</label>
    <textarea name="attacker" rows="8" cols="80" ng-model="$ctrl.action.what"></textarea>
    <button ng-click="$ctrl.goBack()" type="button">BACK</button>
    <button type="submit">NEXT</button>
  </form>
</div>

  <div class="tab assaultForm3" ng-switch-when="3">
    <p>Describe the attacker:</p>

    <form ng-submit="$ctrl.attackerDescription($ctrl.action)">
      <textarea name="attacker" rows="8" cols="80" ng-model="$ctrl.action.description"></textarea>
      <button ng-click="$ctrl.goBack()" type="button">BACK</button>
      <button type="submit">NEXT</button>
    </form>
  </div>

  <div class="tab assaultForm4" ng-switch-when="4">
    <p>Did you see any witnesses? Please describe them and their response to the incident</p>

    <form ng-submit="$ctrl.possibleWitnesses($ctrl.action)">
      <textarea name="attacker" rows="8" cols="80" ng-model="$ctrl.action.response"></textarea>
      <ul>Remember to:
        <li>Not persue the attacker</li>
        <li>Take photos</li>
      </ul>
      <button ng-click="$ctrl.goBack()" type="button">BACK</button>
      <button type="submit">NEXT</button>
    </form>
  </div>

  <div class="tab" ng-switch-when="5">
    <p>Timeline of Event</p>
    <div>
      <p>{{$ctrl.assaultDb.type}}</p>
      <p>Who was involved? {{$ctrl.assaultDb.who}}</p>
      <p>What time did the action take place? {{$ctrl.assaultDb.when}}</p>
      <p>Where did the action occur? {{$ctrl.assaultDb.where}}</p>
      <p>What happened? {{$ctrl.assaultDb.what}}</p>
      <p>Description of attacker: {{$ctrl.assaultDb.description}}</p>
      <p>Any witnesses? {{$ctrl.assaultDb.response}}</p>

      <button ng-click="$ctrl.goBack()" type="button">BACK</button>
    </div>
  </div>
</div>`,

    controller: function() {
      var $ctrl = this;
      $ctrl.assaultDb = {};
      $ctrl.assault = 1;

      $ctrl.getForm = function(item) {
        $ctrl.assault = item;
      }

      $ctrl.goBack = function() {
        $ctrl.assault = $ctrl.assault - 1;
      }

      $ctrl.getType = function(typeOf){
        type = typeOf;
      }

      $ctrl.setAssault = function(action) {
        $ctrl.assaultDb = action;
        $ctrl.getForm(3);
      }

      $ctrl.attackerDescription = function(action) {
        $ctrl.assaultDb.action = action.description;
        $ctrl.getForm(4);
      }

      $ctrl.possibleWitnesses = function(action) {
        $ctrl.assaultDb.action = action.response;
        $ctrl.getForm(5);
      }
    }
  }
  angular.module("app")
    .component("assaultComponent", assaultComponent)
}());
