(function() {
  var homeComponent = {
    template: `

    <header>
      <h1>Accidents Happen</h1>
    </header>
    <div class="homePageButtons">
      <button type="button"><a href="#!/prev">Show History</a></button>
      <button type="button"><a href="#!/form">Get Help</a></button>
     <button type="button"><a href="#!/">Articles</a></button>
    </div>


    `
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());
