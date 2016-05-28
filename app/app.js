var app = angular.module("AddressBookApp", ["ngRoute"]);

app.config(function($routeProvider){

  $routeProvider.

    when('/book/list', {
      templateUrl: 'partials/contact-list.html',
      controller: 'AddressBookCtrl'
      }).

      when('/book/new', {
          templateUrl: 'partials/contact-new.html',
          controller: 'NewContactCtrl'
      }).

      when('/book/:contactID', {
          templateUrl: 'partials/contact-details.html',
          controller: "ContactDetailCtrl"
      }).

      when('/book/:contactID/edit', {
          templateUrl: 'partials/contact-new.html',
          controller: "EditContactCtrl"
      }).

      otherwise('/book/list');

});
