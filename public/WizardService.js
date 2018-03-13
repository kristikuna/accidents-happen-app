(function() {
  function WizardService($http){

    return {
      getList: getList,
      setList: setList,
      deleteItem: deleteItem,
      getVideo: getVideo,
      setVideo: setVideo,
      deleteVideo: deleteVideo
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

    function getVideo(){
      return $http({
        method: "GET",
        url: "/videos"
        }).then(function(response) {
        console.log(response.data);
        return response.data;
        });
    };

    function setVideo(video){
      console.log(video);
      return $http({
        method: "POST",
        url: "/videos",
        data: video
      });
    };

    function deleteVideo(id){
      console.log(id);
      return $http({
        method: "DELETE",
        url: "/videos/"+id
      });
    };

  };
  angular.module("app")
    .factory("WizardService",WizardService)
}());
