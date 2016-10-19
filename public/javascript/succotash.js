(function() {
  var app = angular.module('succotash', ['ui.router']);

  app.config(function ($provide) {
    $provide.decorator('$uiViewScroll', function ($window) {
      return function (uiViewElement) {
        document.body.scrollTop = 0;
      }; 
    });
  });

  app.controller('MasterCtrl', function($state, $rootScope) {
    var master = this;
    master.$state = $state;
    master.showLoginModal = showLoginModal;
    master.showRegisterModal = showRegisterModal;
    master.login = login;
    master.logout = logout;
    master.register = register;
    master.toggleProductTabs = toggleProductTabs;

    init();

    function showLoginModal() {
      master.loginDetails = {};
      master.loginModalShown = true;
    }

    function showRegisterModal() {
      master.registerDetails = {};
      master.registerModalShown = true;
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

    function register(registerDetails) {
      master.user = registerDetails;
      localStorage['upmcSession'] = JSON.stringify(master.user);
      master.registerModalShown = false;
    }

    function toggleProductTabs() {
      if (master.isProductPage) {
        // Disable toggling on product related pages (always shown).
        return;
      }
      master.productTabsShown = !master.productTabsShown;
    }

    function init() {
      var loginDetails = null;
      try {
        loginDetails = JSON.parse(localStorage['upmcSession'] || 'null');
      } catch (_) {}
      if (loginDetails) {
        login(loginDetails);
      }

      $rootScope.$on('$stateChangeSuccess', function(_, toState) {
        if (toState.name.indexOf('product') >= 0) {
          master.isProductPage = true;
          master.productTabsShown = true;
        } else {
          master.isProductPage = false;
          master.productTabsShown = false;
        }
      });
    }
  });
})();
