(function() {
  var homeComponent = {
    template: `
    <body class="homePage">

      <h1>Accidents Happen</h1>

      <div>
      <button type="button"><a href="#!/prev">History</a></button>
      <button type="button"><a href="#!/form">Get Help</a></button>
      <button type="button"><a href="#!/">Articles</a></button>
     </div>
    </body>

    `
  }
  angular.module("app")
    .component("homeComponent", homeComponent)
}());
