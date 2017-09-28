angular.module('clickerApp').controller('rightController', ['clickerService', function(clickerService) {

        this.addAutoClicker = clickerService.addAutoClicker

        this.resetAutoClickers = clickerService.resetAutoClickers

        this.buttonActiveColor = clickerService.activeColor

        this.getNumAutos = clickerService.getNumAutos

        this.getAutoCost = clickerService.getAutoCost

        this.getRightButtonColor = clickerService.getRightButtonColor
    
    }])