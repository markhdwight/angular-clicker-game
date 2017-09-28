angular.module('clickerApp').controller('leftController', ['clickerService', function(clickerService) {

    this.getMultiplier = clickerService.getMultiplier

    this.setMultiplier = clickerService.setMultiplier

    this.getMultCost = clickerService.getMultCost

    this.increaseBonus = clickerService.increaseBonus

    this.getLeftButtonColor = clickerService.getLeftButtonColor

}])