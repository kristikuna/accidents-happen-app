(function() {
  var hitandrunComponent = {
    templateUrl: "partials/hit-and-run-partial.html",
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

      $ctrl.setDescription = function(car){
        $ctrl.accidentDb.description = car.description;
        $ctrl.accidentDb.direction = car.direction;
        $ctrl.getForm(5);
      }

      $ctrl.setEvent = function (car){
        $ctrl.accidentDb.event = car.event;
        $ctrl.accidentDb.type = type;
        $ctrl.getForm(4);
      }

      $ctrl.getType = function(typeOf){
        type = typeOf;
      }

      $ctrl.sendToService = function(){
        WizardService.setList($ctrl.accidentDb);
        $location.path('/form')
      }

    }
  };


  angular.module("app")
    .component("hitandrunComponent", hitandrunComponent)
}());
