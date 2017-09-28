angular.module('clickerApp').component('rightComponent', {
    
        templateUrl: 'js/right/rightTemplate.html',
        controller: 'rightController',
        bindings: {
            right: '='
        }
    
    })