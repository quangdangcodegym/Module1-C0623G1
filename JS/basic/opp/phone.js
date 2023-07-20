let DECREASE_TURNON = 2;
let DECREASE_TURNOFF = 2;
let DECREASE_SENT = 2;
let DECREASE_RECEIVE = 2;
class Mobile{
    constructor(name){
        this.energy = 20;
        this.draft = "";
        this.inboxs = [];
        this.sents = [];
        this.status = false;
        this.name = name;
    }
    checkStatus(){
        return this.status;
    }
    turnOn(){
        this.status = true;
        this.changeEnergy(DECREASE_TURNON);
    }
    turnOff(){
        this.status = false;
        this.changeEnergy(DECREASE_TURNOFF);
    }
    chargeEnergy(mobile){
        let myInterval  = setInterval(function(){
            if(mobile.energy >= 100){
                mobile.energy = 100;
                clearInterval(myInterval);
            }
            console.log("charging...." + mobile.energy);
            mobile.energy = mobile.energy + 10;
        }, 1000)
    }
    draft(message){
        this.draft = message;
    }
    receive(mobile, message){
        this.inboxs.unshift(message);
        mobile.sents.unshift(message);
        this.changeEnergy(DECREASE_RECEIVE);

    }
    sent(mobile, message){
        this.sents.unshift(message);
        mobile.inboxs.unshift(message);
        this.changeEnergy(DECREASE_SENT);
    }
    showInbox(){
        console.log("Hộp thư đến : " + this.name);
        for(let i=0; i<this.inboxs.length;i++){
            console.log(this.inboxs[i]);
        }
    }
    showSent(){
        console.log("Tin đã gửi : " + this.name);
        for(let i=0; i<this.sents.length;i++){
            console.log(this.sents[i]);
        }
    }
    changeEnergy(number){
        if(this.checkStatus() && this.energy >= number){
            this.energy -= number;
        }else{
            this.turnOff();
        }
    }
    showEnergy(){
        console.log(this.energy);
    }

}

let iphone = new Mobile("iphone");
let samsung= new Mobile("samsung");
iphone.turnOn();
samsung.turnOn();

// 
iphone.sent(samsung, "Iphone say hello!");
iphone.sent(samsung, "Iphone hello 2th")
samsung.showInbox();
iphone.showSent();

iphone.showEnergy();
samsung.showEnergy();

iphone.chargeEnergy(iphone);

iphone.showEnergy();
