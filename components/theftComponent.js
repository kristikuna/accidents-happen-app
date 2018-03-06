(function() {
  var theftComponent = {
    template: `

    <div ng-switch="$ctrl.accident" class="accidentForm">

      <div class="tab carAccident1" ng-switch-when="1">
        <button ng-click="$ctrl.getForm(2); $ctrl.getType('auto')" type="button">Auto</button>
        <button ng-click="$ctrl.getForm(2); $ctrl.getType('home')" type="button">Home</button>
        <button ng-click="$ctrl.getForm(2); $ctrl.getType('mugged')" type="button">Mugged</button>
      </div>

      <div class="tab car2" ng-switch-when="2">
        <p>Stolen items</p>
        <form ng-submit="$ctrl.setEvent($ctrl.items)">
        <textarea name="name" rows="8" cols="80" ng-model="$ctrl.items.event"></textarea>
        <button ng-click="$ctrl.goBack()" type="button">BACK</button>
        <button type="submit">NEXT</button>
        </form>
      </div>

      <div class="tab car3" ng-switch-when="3">
        <p>Description of perp if available</p>
        <form ng-submit="$ctrl.setDescription($ctrl.items)">
        <textarea name="name" rows="8" cols="80" ng-model="$ctrl.items.perpDescription"></textarea>
        <button ng-click="$ctrl.goBack()" type="button">BACK</button>
        <button type="submit">NEXT</button>
        </form>
      </div>

      <div class="tab" ng-switch-when="4">
        <p>Timeline of Events</p>
        <div>

        <p>Stolen Items: {{$ctrl.accidentDb.stolen}}</p>
        <p>Perp Description: {{$ctrl.accidentDb.perpDescription}}</p>

        <button ng-click="$ctrl.goBack()" type="button">BACK</button>
        <button type="button"><a href="#!/form">Home</a></button>

        </div>

      </div>
    </div>
    `,
    controller: function() {
      var $ctrl = this;
      $ctrl.accidentDb = {};
      var type = "";

      $ctrl.accident = 1;

      $ctrl.getForm = function(item) {
        $ctrl.accident = item;
      }

      $ctrl.goBack = function(){
        $ctrl.accident = $ctrl.accident - 1;
      }

      $ctrl.setDescription = function(items){
        $ctrl.accidentDb.perpDescription = items.perpDescription;
        $ctrl.accidentDb.type = type;
        $ctrl.getForm(4);
        console.log($ctrl.accidentDb);
      }

      $ctrl.setEvent = function (items){
        $ctrl.accidentDb.stolen = items.event;
        $ctrl.getForm(3);
      }

      $ctrl.getType = function(typeOf){
        type = typeOf;
        $ctrl.accidentDb.type = type;
      }
    }
  };


  angular.module("app")
    .component("theftComponent", theftComponent)
}());
