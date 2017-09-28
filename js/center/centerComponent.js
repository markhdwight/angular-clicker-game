angular.module('clickerApp').component('centerComponent', {
    
        templateUrl: 'js/center/centerTemplate.html',
        controller: 'centerController',
        bindings: {
            center: '='
        }
    
    })