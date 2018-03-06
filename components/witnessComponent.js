(function() {
    var witnessComponent = {
      template: `
  
      <div ng-switch="$ctrl.accident" class="accidentForm">
  
        <div class="tab carAccident1" ng-switch-when="1">
          <button ng-click="$ctrl.getForm(2); $ctrl.getType('accident')" type="button">Accident</button>
          <button ng-click="$ctrl.getForm(2)" $ctrl.getType('theft')" type="button">Theft</button>
          <button ng-click="$ctrl.getForm(2)" $ctrl.getType('assault')" type="button">Assault</button>
        </div>
  
        <div class="tab car2" ng-switch-when="2">
          <p>Did you get this information about the other person or their vehicle?</p>
          <form ng-submit="$ctrl.setPerpCar($ctrl.car)">
            <label>Make: <input type="text" ng-model="$ctrl.car.make"></label>
            <label>Model: <input type="text" ng-model="$ctrl.car.model"></label>
            <label>Color: <input type="text" ng-model="$ctrl.car.color"></label>
            <label>License Plate #: <input type="text" ng-model="$ctrl.car.plate"></label>
            <label>Driver Description: <input type="text" ng-model="$ctrl.car.driver"></label>
            <button ng-click="$ctrl.goBack()" type="button">BACK</button>
            <button type="submit">NEXT</button>
          </form>
        </div>
  
        <div class="tab car3" ng-switch-when="3">
          <p>Description of damage to the other vehicle</p>
          <form ng-submit="$ctrl.setDescription($ctrl.car)">
            <textarea name="description" rows="8" cols="80" ng-model="$ctrl.car.carDescription"></textarea>
  
            <p>DON'T follow a fleeing car. Leaving the scene of the accident could put you in a compromising position!</p>
  
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
            <li>Injuries to yourself or others</li>
            <li>Damage to your property</li>
            <li>Any who, what, where, or when</li>
          </ul>
          <textarea name="name" rows="8" cols="80" ng-model="$ctrl.car.event"></textarea>
          <button ng-click="$ctrl.goBack()" type="button">BACK</button>
          <button type="submit">NEXT</button>
          </form>
        </div>
  
        <div class="tab car5" ng-switch-when="5">
          <p>Remember to take pictures and check the area for any witnesses. Ask them to provide a statement when authorities arrive</p>
          <button ng-click="$ctrl.goBack()" type="button">BACK</button>
          <button ng-click="$ctrl.getForm(6)" >NEXT</button>
        </div>
  
        <div class="tab" ng-switch-when="6">
          <p>Timeline of Events</p>
          <div>
          <p>Other person's description</p>
          <p>Make: {{$ctrl.accidentDb.make}}</p>
          <p>Model: {{$ctrl.accidentDb.model}}</p>
          <p>Color: {{$ctrl.accidentDb.color}}</p>
          <p>Plate: {{$ctrl.accidentDb.plate}}</p>
          <p>Did the other person's car have any damage?: {{$ctrl.accidentDb.carDescription}}</p>
          <p>What direction was the person headed if fleeing?: {{$ctrl.accidentDb.direction}}</p>
          <p>Person's Description: {{$ctrl.accidentDb.driver}}</p>
          <p>Event Log: {{$ctrl.accidentDb.event}}</p>
          <button ng-click="$ctrl.goBack()" type="button">BACK</button>
          </div>
  
        </div>
      </div>
      `,
      controller: function() {
        var $ctrl = this;
        $ctrl.accidentDb = {};
        var type;
  
        $ctrl.accident = 1;
        $ctrl.setPerpCar = function(car) {
          $ctrl.accidentDb = car;
          console.log($ctrl.accidentDb.type)
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
          console.log($ctrl.accidentDb);
          $ctrl.getForm(5);
        }
  
        $ctrl.getType = function(typeOf){
          type = typeOf;
        }
  
  
      }
  
    };
  
  
    angular.module("app")
      .component("witnessComponent", witnessComponent)
  }());