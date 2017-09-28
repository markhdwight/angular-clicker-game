angular.module('clickerApp').controller('centerController', ['clickerService', function(clickerService) {
    
    this.score = clickerService.score

    this.getBonus = clickerService.getBonus 
    
    this.setBonus = clickerService.setBonus   

    this.test = () =>{alert("TEST")}
    
    }])
