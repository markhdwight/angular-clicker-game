angular.module('clickerApp').component('leftComponent', {
    
        templateUrl: 'js/left/leftTemplate.html',
        controller: 'leftController',
        bindings: {
            left: '='
        }
    
    })