(function() {
    var videoComponent = {
      template: `
      <div>
        <h1>Video title</h1>
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/GKnEMwAqjcY">
        </iframe>
      </div>
      `,
      controller: function(WizardService,$location) {
        var $ctrl = this;

      }

    };


    angular.module("app")
      .component("videoComponent", videoComponent)
  }());
