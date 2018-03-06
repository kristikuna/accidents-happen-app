(function() {
  var formComponent = {
    template:`    <div class="mainForm">
          <h1>Title</h1>
          <button type="button"><a href="#!/accident">Car Accident</a></button>
          <button type="button"><a href="#!/hitandrun">Hit and Run</a></button>
          <button type="button"><a href="#!/theft">Theft</a></button>
          <button type="button"><a href="#!/witness">Witness</a></button>
        </div>

    `,
    controller: function(){
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent",formComponent)
}());
