(function() {
    var adminLoginComponent = {
      template: `
      <div class="adminLoginPage">
        <form class="loginForm" ng-submit="$ctrl.checkLogin($ctrl.criteria)">
            <a class="xbut" href="#!/home"><i class="material-icons x">clear</i></a>
            <h1>Please Login</h1>
            <label>Username: 
                <input id="username" type="text" ng-model="$ctrl.criteria.username">
            </label>
            <label>Password: 
                <input id="password" type="password" ng-model="$ctrl.criteria.password">
            </label>
            <button type="submit">LOGIN</button>
        </form>
      </div>
      `,
      controller: function(WizardService,$location) {
        var $ctrl = this;
        $ctrl.checkLogin = function(criteria) {
            if(criteria.username == "admin" && criteria.password == "password") {
                $location.path("/admin");
            }else{
                alert("Sorry but the username and password you entered does not match an admin account");
            };
        };
      }

    };


    angular.module("app")
      .component("adminLoginComponent", adminLoginComponent)
  }());
