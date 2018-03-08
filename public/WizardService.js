(function() {
  function WizardService($http){

    return {
      getList: getList,
      setList: setList,
      deleteItem: deleteItem
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
    };

    function deleteItem(id){
      console.log(id);
      return $http({
        method: "DELETE",
        url: "/incidents/"+id
      });
    };

    // function deleteItem(itemId){
    //   console.log("delete from service");
    //   return $http({
    //      method: "DELETE",
    //      url: "/incidents/" + itemId
    //  });




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
