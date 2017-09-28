angular.module('clickerApp').component('topComponent', {
    
        templateUrl: 'js/top/topTemplate.html',
        controller: 'topController',
        bindings: {
            top: '='
        }
    
    })