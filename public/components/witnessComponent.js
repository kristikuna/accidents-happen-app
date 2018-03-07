(function() {
    var witnessComponent = {
      templateUrl: "partials/witness-partial.html",
      controller: function(WizardService,$location) {
        var $ctrl = this;
        $ctrl.accidentDb = {};
        var type;
        $ctrl.accident = 1;

        $ctrl.getType = function(typeOf){
          type = typeOf;
        }
        $ctrl.setPerpCar = function(car) {
          $ctrl.accidentDb = car;
          console.log($ctrl.accidentDb.type)
          console.log(car.property);
          $ctrl.getForm(4);
        }
        $ctrl.getForm = function(item) {
          $ctrl.accident = item;

        }
        $ctrl.goBack = function(){
          $ctrl.accident = $ctrl.accident - 1;
        }
        $ctrl.setEvent = function (car){
          $ctrl.accidentDb.event = car.event;
          $ctrl.accidentDb.type = type;
          console.log($ctrl.accidentDb);
          $ctrl.getForm(5);
        }

        $ctrl.sendToService = function(){
          console.log("sent to service");
          WizardService.setList($ctrl.accidentDb);
          $location.path('/home')
        }
      }

    };


    angular.module("app")
      .component("witnessComponent", witnessComponent)
  }());
