(function() {
  function WizardService(){
    var savedList = [
      {
        type: "theft",
        event: "stole some stuff",
        stolenStuff: "stuff",
        description: "black hair, looked like a mugger",
      },
      {
        type: "car-accident",
        event: "stuff broke",
        description: "shit went dowwnnnnn"
      }
    ];

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
