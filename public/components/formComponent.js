(function () {
  var formComponent = {
    template: `
        <div class="mainForm tab">
        <h1>Accidents Happen</h1>
        <div class = "formButtons">
        <a href="#!/accident"><button class="mainButton" type="button">Car Accident</button></a>
        <a href="#!/hitandrun"><button class="mainButton" type="button">Hit and Run</button></a>
        <a href="#!/theft"><button class="mainButton" type="button">Theft</button></a>
        <a href="#!/witness"><button class="mainButton" type="button">Witness</button></a>
        </div>
        </div>

    `,
    controller: function () {
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent", formComponent)
}());