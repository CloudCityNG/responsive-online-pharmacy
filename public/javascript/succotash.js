(function() {
  var app = angular.module('succotash', ['ui.router']);

  app.controller('MasterCtrl', function($state) {
    var master = this;
    master.$state = $state;
    master.showLoginModal = showLoginModal;
    master.login = login;
    master.logout = logout;

    init();

    function showLoginModal() {
      master.loginDetails = {};
      master.loginModalShown = true;
    }

    function login(loginDetails) {
      master.user = loginDetails;
      localStorage['upmcSession'] = JSON.stringify(master.user);
      master.loginModalShown = false;
    }

    function logout() {
      master.user = null;
      delete localStorage['upmcSession'];
      master.loginModalShown = false;
      master.showUserMenu = false;
    }

    function init() {
      var loginDetails = null;
      try {
        loginDetails = JSON.parse(localStorage['upmcSession'] || 'null');
      } catch (_) {}
      if (loginDetails) {
        login(loginDetails);
      }
    }
  });
})();
