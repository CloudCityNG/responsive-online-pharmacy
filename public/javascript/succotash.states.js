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
      name: 'productDetail',
      url: '/product-detail',
      templateUrl: 'partials/product-detail.html',
    });
  $urlRouterProvider.otherwise('/');
});
