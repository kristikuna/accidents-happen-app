(function() {
  var hitandrunComponent = {
    templateUrl: "partials/hit-and-run-partial.html",
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

      $ctrl.setDescription = function(car){
        $ctrl.accidentDb.property = car.description;
        $ctrl.accidentDb.direction = car.direction;
        $ctrl.getForm(5);
      }

      $ctrl.goForward = function(){
        $ctrl.animation = "go-forward";
        console.log("click")
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
        console.log($ctrl.accidentDb);
        WizardService.setList($ctrl.accidentDb);
        $location.path('/submit');
      }
      $ctrl.showAlert = function(){
        alert("Authorities have be notified, keep calm.");
      }

    }
  };


  angular.module("app")
    .component("hitandrunComponent", hitandrunComponent)
}());
