(function() {
  var submitComponent = {
    template: `
    <div class="accidentForm">
    <div class="tab">
      <h2>Your incident has been recorded</h2>
      <div class="navButtons">
        <a href="#!/prev">Incident History</a>
        <a href="#!/home">Home</a>
      </div>
    <div>
    </div>
    `,
    controller: function(WizardService,$location) {
      var $ctrl = this;
    }
  };


  angular.module("app")
    .component("submitComponent", submitComponent)
}());
