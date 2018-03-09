(function() {
  var accidentComponent = {
    templateUrl: "partials/accident-partial.html",
    controller: function(WizardService,$location) {
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

      $ctrl.setInsuranceInfo = function(car){
        $ctrl.accidentDb.insuranceInfo = car.insuranceInfo;
        $ctrl.getForm(4);
      }

      $ctrl.setEvent = function (car){
        $ctrl.accidentDb.event = car.event;
        $ctrl.accidentDb.type = type;
        $ctrl.getForm(5);
      }

      $ctrl.getType = function(typeOf){
        type = typeOf;
      }

      $ctrl.sendToService = function(){
        WizardService.setList($ctrl.accidentDb);
        $location.path('/submit')
      }

    }
  };


  angular.module("app")
    .component("accidentComponent", accidentComponent)
}());
