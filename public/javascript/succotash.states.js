angular.module('succotash').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      templateUrl: 'partials/home.html',
    })
    .state({
      name: 'faq',
      url: '/faq',
      templateUrl: 'partials/faq.html',
    })
    .state({
      name: 'underConstruction',
      url: '/under-construction',
      templateUrl: 'partials/under-construction.html',
    })
    .state({
      name: 'productLineNutri',
      url: '/productline-nutri',
      templateUrl: 'partials/productline-nutri.html',
    })
    .state({
      name: 'productLineVita',
      url: '/productline-vita',
      templateUrl: 'partials/productline-vita.html',
    })
    .state({
      name: 'cartSummary',
      url: '/cart-summary',
      templateUrl: 'partials/cart.html',
    })
    .state({
      name: 'checkout',
      url: '/checkout',
      templateUrl: 'partials/checkout.html',
    });
  $urlRouterProvider.otherwise('/');
});
