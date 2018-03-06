(function() {
  function WizardService(){
    var savedList = [];

    return {
      setList: setList,
      sendList: sendList
    };

    function setList(sentObj){
      // console.log(sentObj);
      savedList.push(sentObj);
      console.log(savedList);
    }

    function sendList(){
        return savedList;
    }
  };
  angular.module("app")
    .factory("WizardService",WizardService)
}());
