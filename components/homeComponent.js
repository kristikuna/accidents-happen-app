(function() {
  var homeComponent = {
    template: `
    <div>
      <button type="button"><a href="#!/">Show History</a></button>
      <button type="button"><a href="#!/form">Get Help</a></button>
     <button type="button"><a href="#!/">Articles</a></button>
    </div>


    `
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());
