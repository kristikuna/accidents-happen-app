(function() {
  var hitandrunComponent = {
    template: `

    <div ng-switch="$ctrl.accident" class="accidentForm">

      <div class="tab carAccident1" ng-switch-when="1">
        <p>Pull your car to a safe area</p>
        <p>Call the police</p>
        <p>Keep calm</p>
        <button ng-click="$ctrl.getForm(2); $ctrl.getType('hit and run')" type="button">NEXT</button>
      </div>

      <div class="tab car2" ng-switch-when="2">
        <p>Enter as much information as you can remember about the other vehicle</p>
        <form ng-submit="$ctrl.setPerpCar($ctrl.car)">
          <label>Make<input type="text" ng-model="$ctrl.car.make"></label>
          <label>Model<input type="text" ng-model="$ctrl.car.model"></label>
          <label>Color<input type="text" ng-model="$ctrl.car.color"></label>
          <label>License Plate #<input type="text" ng-model="$ctrl.car.plate"></label>
          <label>Driver Description<input type="text" ng-model="$ctrl.car.driver"></label>
          <button ng-click="$ctrl.goBack()" type="button">BACK</button>
          <button type="submit">NEXT</button>
        </form>
      </div>

      <div class="tab car3" ng-switch-when="3">
        <p>Description of damage to the other vehicle</p>
        <form ng-submit="$ctrl.setDescription($ctrl.car)">
          <textarea name="description" rows="8" cols="80" ng-model="$ctrl.car.description"></textarea>

          <p>DON'T follow the fleeing driver. Leaving the scene of the accident could put you in a compromising position.</p>

          <p>What direction was the car headed?</p>
          <input type="text" name="" placeholder="direction" ng-model="$ctrl.car.direction">
          <button ng-click="$ctrl.goBack()" type="button">BACK</button>
          <button type="submit">NEXT</button>
        </form>
      </div>

      <div class="tab car4" ng-switch-when="4">
        <p>Write your memories</p>
        <form ng-submit="$ctrl.setEvent($ctrl.car)"
        <ul>Remember to include:
          <li>Injuries</li>
          <li>Damage to your car</li>
          <li>Who</li>
          <li>What</li>
          <li>When</li>
          <li>Where</li>
        </ul>
        <textarea name="name" rows="8" cols="80" ng-model="$ctrl.car.event"></textarea>
        <button ng-click="$ctrl.goBack()" type="button">BACK</button>
        <button type="submit">NEXT</button>
        </form>
      </div>

      <div class="tab car5" ng-switch-when="5">
        <p>Remember to check the area for witnesses</p>
        <p>Take photos</p>
        <button ng-click="$ctrl.goBack()" type="button">BACK</button>
        <button ng-click="$ctrl.getForm(6)" >NEXT</button>
      </div>

      <div class="tab" ng-switch-when="6">
        <p>Timeline of Events</p>
        <div>
        <p>Perps description</p>
        <p>Make: {{$ctrl.accidentDb.make}}</p>
        <p>Model: {{$ctrl.accidentDb.model}}</p>
        <p>Color: {{$ctrl.accidentDb.color}}</p>
        <p>Plate: {{$ctrl.accidentDb.plate | uppercase}}</p>
        <p>Driver Description: {{$ctrl.accidentDb.driver}}</p>
        <p>Event Description: {{$ctrl.accidentDb.event}}</p>
        <button ng-click="$ctrl.goBack()" type="button">BACK</button>
        <button type="button">SUBMIT</button>
        </div>

      </div>
    </div>
    `,
    controller: function(WizardService) {
      var $ctrl = this;
      $ctrl.accidentDb = {};
      var type;

      $ctrl.accident = 1;
      $ctrl.setPerpCar = function(car) {
        $ctrl.accidentDb = car;
        $ctrl.getForm(3);
      }

      $ctrl.getForm = function(item) {
        $ctrl.accident = item;
      }

      $ctrl.goBack = function(){
        $ctrl.accident = $ctrl.accident - 1;
      }

      $ctrl.setDescription = function(car){
        $ctrl.accidentDb.description = car.description;
        $ctrl.accidentDb.direction = car.direction;
        $ctrl.getForm(4);
      }

      $ctrl.setEvent = function (car){
        $ctrl.accidentDb.event = car.event;
        $ctrl.accidentDb.type = type;
        // console.log($ctrl.accidentDb);
        $ctrl.getForm(5);
      }

      $ctrl.getType = function(typeOf){
        type = typeOf;
      }
    }
  };


  angular.module("app")
    .component("hitandrunComponent", hitandrunComponent)
}());