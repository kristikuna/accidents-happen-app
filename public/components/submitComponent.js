(function() {
  var submitComponent = {
    template: `
    <div class="accidentForm">
    <div class="tab">
      <h2 class="submit">Your incident has been recorded</h2>
      <div id="icons" class="navButtons">
        <a class="icons" href="#!/prev"><i class="material-icons md-36">history</i></a>
        <a class="icons" href="#!/home"><i class="material-icons md-36">home</i></a>
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
