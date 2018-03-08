(function () {
  var formComponent = {
    template: `
        <div id="mainForm" class="tab">
        <a class="xbut" href="#!/home"><i class="material-icons x">clear</i></a>
        <h1 id="formTitle">Accidents Happen</h1>
        <div class = "formButtons">
          <a class="mainButton" href="#!/accident"><button type="button">Car Accident</button></a>
          <a class="mainButton" href="#!/hitandrun"><button type="button">Hit and Run</button></a>
          <a class="mainButton" href="#!/theft"><button type="button">Theft</button></a>
          <a class="mainButton" href="#!/witness"><button type="button">Witness</button></a>
        </div>
        <a class="homeButton" href="#!/home"><button type="button">Home</button></a>
        </div>

    `,
    controller: function () {
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent", formComponent)
}());
