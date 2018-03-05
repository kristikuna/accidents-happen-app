(function() {
  var formComponent = {
    template:`    <div class="mainForm">
          <h1>Title</h1>
          <button type="button">Accident</button>
          <button type="button">Theft</button>
          <button type="button">Assault</button>
          <button type="button">Witness</button>
        </div>

    `,
    controller: function(){
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent",formComponent)
}());
