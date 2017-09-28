angular.module('clickerApp').service('clickerService', ['$interval', function ($interval) {
    
        this.total = 0
        this.bonus = 1
        this.multiplier = 1.2
        this.multCost = 10
        this.numAutos = 0
        this.autoCost = 100
        this.autoClickerArray = []
    
        this.inactiveColor = { 'background-color':'grey'}
        this.activeColor = { 'background-color':'white'}
        this.leftButtonColor = this.inactiveColor
        this.rightButtonColor = this.inactiveColor

        this.saveCookie = ()=> {
            Cookies.set("total",this.total,{expires:100})
            Cookies.set("bonus",this.bonus,{expires:100})
            Cookies.set("numAutos",this.numAutos,{expires:100})
        }
        
        this.getFromCookie = () => {
        
            if(Cookies.get("total"))
            {
                this.total=parseFloat(Cookies.get("total"))
                this.bonus=parseFloat(Cookies.get("bonus"))
                this.numAutos = parseInt(Cookies.get("numAutos"))

                alert(this.total+";"+this.bonus+";"+this.numAutos)
    
                if(this.total>=this.multCost)
                    this.leftButtonColor = this.activeColor
                if(this.total>=this.autoCost)
                    this.rightButtonColor = this.activeColor
    
                for(let i = 0; i<this.numAutos; i++)
                    {
                        this.autoClickerArray[i] = $interval(()=>{
                            
                            this.score()
                            
                        },1000)
                    }
            }
            else{
                this.total=0
                this.bonus=1
                this.numAutos=0
            }
        
        }
    
        this.score = () => {
            this.total += this.bonus

            this.saveCookie()
            
            if(this.total >= this.autoCost)
            {
                this.rightButtonColor = this.activeColor
            }   
            
            if(this.total >= this.multCost)
            {
                this.leftButtonColor = this.activeColor
            }
                
        }
        
        this.setTotal = (newTotal) => {
            this.total = newTotal
        }
        
        this.getTotal = () => {
            return this.total
        }
        
        this.getBonus = () => {
            return this.bonus
        }
        
        this.increaseBonus = () => {
            
            if(this.total>=this.multCost)
            {
                this.bonus *= this.multiplier
                this.total -= this.multCost

                this.saveCookie()

                if(this.total < this.multCost)
                    this.leftButtonColor = this.inactiveColor
            }
        }
        
        this.getMultiplier = () =>{
            return this.multiplier
        }
    
        this.setMultiplier = (mult) => {
            this.multiplier = mult
        }

        this.getMultCost = () => {
            return this.multCost
        }

        this.setMultCost = (newCost) => {
            this.multCost = newCost
        }

        this.getNumAutos = () => {
            return this.numAutos
        }

        this.getAutoCost = () => {
            return this.autoCost
        }
        
        this.addAutoClicker = () => {
            
            if(this.total >= this.autoCost){
                
                this.autoClickerArray[this.numAutos] = $interval(()=>{
                    
                    this.score()
                    
                },1000)
                
                this.numAutos++
                this.total -= this.autoCost

                this.saveCookie()

                if(this.total < this.autoCost)
                    this.rightButtonColor = this.inactiveColor
            }
        }

        this.getLeftButtonColor = () => {
            return this.leftButtonColor
        }

        this.getRightButtonColor = () => {
            return this.rightButtonColor
        }
        
        this.reset = () => {
            this.total=0
            this.bonus=1
            this.numAutos=0

            this.saveCookie()

            this.leftButtonColor = this.inactiveColor
            this.rightButtonColor = this.inactiveColor
            
            for(let i = 0; i < this.autoClickerArray.length; i++)
                {
                    $interval.cancel(this.autoClickerArray[i])
                }

        }

        this.getFromCookie()
    
    }])


