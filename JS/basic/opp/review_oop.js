/**
let red = "BLUE";
var animal = {
    color: red,
    weight: 50,

    toString: function () {
        return this.color + " " + this.weight;
    }
}


console.log(animal);

 */

var animal = new function() {
    this.color = pColor;
    this.weight = pWeight
    this.toString = function(){
        return this.color + " " + this.weight;
    }
}

console.log(animal);