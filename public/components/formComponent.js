(function() {
  var formComponent = {
    template:`
        <div class="mainForm tab">
          <h1>Accidents Happen</h1>

            <button class="mainButton" type="button"><a href="#!/accident">Car Accident</a></button>
            <button class="mainButton" type="button"><a href="#!/hitandrun">Hit and Run</a></button>
            <button class="mainButton" type="button"><a href="#!/theft">Theft</a></button>
            <button class="mainButton" type="button"><a href="#!/witness">Witness</a></button>
        
        </div>

    `,
    controller: function(){
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent",formComponent)
}());
