(function() {
  var formComponent = {
    template:`<h1>test</h1>

    `,
    controller: function(){
      var $ctrl = this;
    }

  };


  angular.module("app")
    .component("formComponent",formComponent)
}());
