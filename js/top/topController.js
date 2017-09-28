angular.module('clickerApp').controller('topController', ['clickerService', function(clickerService) {

        this.score = clickerService.score

        this.setTotal = clickerService.setTotal

        this.getTotal = clickerService.getTotal

        this.reset = clickerService.reset
    
    }])