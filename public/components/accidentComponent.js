(function() {
  var accidentComponent = {
    templateUrl: "partials/accident-partial.html",
    controller: function(WizardService,$location) {
      var $ctrl = this;
      $ctrl.accidentDb = {};
      var type;
      $ctrl.animation = "go-forward";

      $ctrl.accident = 1;
      $ctrl.setPerpCar = function(car) {
        $ctrl.accidentDb = car;
        if($ctrl.accidentDb === undefined){
          $ctrl.message = true;
        }else {
          $ctrl.message = false;
          $ctrl.getForm(3);
        }
      }

      $ctrl.needHelp = function(){
        $ctrl.animation = "go-forward";
        $ctrl.accident = 2;
      }

      $ctrl.getForm = function(item) {
        $ctrl.accident = item;
      }

      $ctrl.goBack = function(){
        $ctrl.animation = "go-back";
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

      $ctrl.goForward = function(){
        $ctrl.animation = "go-forward";
      }

      $ctrl.showAlert = function(){
        alert("Authorities have be notified, keep calm.");
      }


    }
  };


  angular.module("app")
    .component("accidentComponent", accidentComponent)
}());
