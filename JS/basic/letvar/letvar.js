/**
var age = 30;
var age = 50;

console.log(age);


let name = "Quang";     // không cho khai báo lại
// let name = "Dang";


if(10 > 0){
    if( 5 > 0){
        var max = 100;  //hoisting: trồi lên/nổi lên, có phạm vi trong block code { khối}
    }
    console.log("MAX: " + max);
}
let i = 0;
for(;i<10;i++){
    console.log("Gia tri i : " + i);
}
console.log(i);

var a = 10;
if(10 > 0){
    let a = 10;
    a++;
    console.log(a);
}
console.log(a);
 */


/**
 var a = 10;
if(10 > 0){
    var a = 10;
    a++;
    console.log(a);
}
console.log(a);
 */

