(function() {
  var theftComponent = {
    templateUrl: "partials/theft-partial.html",
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
        if($ctrl.theftDb === undefined){
          $ctrl.message = true;
        }else {
          $ctrl.theftDb.type = "theft";
          $ctrl.message = false;
          $ctrl.getForm(5);
        }

      }

      $ctrl.sendToService = function(){
        WizardService.setList($ctrl.theftDb);
        $location.path('/submit')
      }
      $ctrl.showAlert = function(){
        alert("Authorities have be notified, keep calm.");
      }
    }
  };


  angular.module("app")
    .component("theftComponent", theftComponent)
}());
