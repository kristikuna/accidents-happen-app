(function() {
  function WizardService($http){

    return {
      getList: getList,
      setList: setList
      // deleteItem: deleteItem,
      // updateItem: updateItem
    };

    function getList(){
      return $http({
        method: "GET",
        url: "/incidents"
        }).then(function(response) {
        console.log(response.data);
        return response.data;
        });

    };

    function setList(incident){
      console.log(incident);
      return $http({
        method: "POST",
        url: "/incidents",
        data: incident
      });


    }



    // var savedList = [
    //   {
    //     type: "theft",
    //     event: "stole some stuff",
    //     stolenStuff: "stuff",
    //     description: "black hair, looked like a mugger",
    //   },
    //   {
    //     type: "car-accident",
    //     event: "stuff broke",
    //     description: "shit went dowwnnnnn"
    //   }
    // ];
    //
    // return {
    //   setList: setList,
    //   sendList: sendList
    // };
    //
    // function setList(sentObj){
    //   // console.log(sentObj);
    //   savedList.push(sentObj);
    //   console.log(savedList);
    // }
    //
    // function sendList(){
    //     return savedList;
    // }
  };
  angular.module("app")
    .factory("WizardService",WizardService)
}());
