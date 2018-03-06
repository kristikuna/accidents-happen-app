(function() {
  function WizardService(){
    var savedList = [];

    return {
      setList: setList
    };

    function setList(sentObj){
      // console.log(sentObj);
      savedList.push(sentObj);
      console.log(savedList);
    }


  };
  angular.module("app")
    .factory("WizardService",WizardService)
}());
