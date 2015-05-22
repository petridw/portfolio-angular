(function() {

  var app = angular.module('portfolioApp', []);

  app.controller('TabController', function() {
    var vm = this;
    vm.tab = 1;

    vm.setTab = function(newVal) {
      vm.tab = newVal;
    };
    vm.isSelected = function(tabVal) {
      return tabVal === vm.tab;
    };
  });

  app.directive('headerSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/header-section.html',
      controller: 'TabController',
      controllerAs: 'vm'
    };
  });
  app.directive('projectsSection', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/projects-section.html',
      controller: 'TabController',
      controllerAs: 'vm'
    };
  });
  app.directive('aboutSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/about-section.html',
      controller: 'TabController',
      controllerAs: 'vm'
    };
  });
  app.directive('contactSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/contact-section.html',
      controller: 'TabController',
      controllerAs: 'vm'
    };
  });
  app.directive('resumeSection', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/resume-section.html',
      controller: 'TabController',
      controllerAs: 'vm'
    };
  });

})();