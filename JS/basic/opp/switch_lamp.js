class ElectricLamp{
    constructor(){
        this.status = false;
    }
    turnOff(){
        this.status = false;
    }
    turnOn(){
        this.status = true;
    }
    getStatus(){
        return `Tran thai cua bong den: ${this.status}`;
    }
}
class SwitchButton{
    constructor(){
        this.status = false;
        this.lamps = [];
    }
    connectToLamp(lamp){
        this.lamps.push(lamp);
    }
    turnOn(){
        this.status = true;
        for(let i=0;i<this.lamps.length;i++){
            this.lamps[i].turnOn();
        }
    }
    turnOff(){
        this.status = false;
        for(let i=0;i<this.lamps.length;i++){
            this.lamps[i].turnOff();
        }
    }

}


let lamp1 = new ElectricLamp();
let lamp2 = new ElectricLamp();
let lamp3 = new ElectricLamp();

let s1 = new SwitchButton();


s1.connectToLamp(lamp1);
s1.connectToLamp(lamp2);
s1.connectToLamp(lamp3);
s1.turnOn();

console.log(lamp1.getStatus());




