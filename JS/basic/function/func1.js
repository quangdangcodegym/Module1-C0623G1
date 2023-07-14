
/**
 let num = 10;

for(let i = 1; i<=num;i++){
    console.log(i);
}


let num1=  100;
for(let i = 1; i<=num1;i++){
    console.log(i);
}

// Đặc điểm: tái sử dụng, parameter: tham số
Đặc tên: 
- camel case: printNumber
- Pascal case: Animal, ProductCategory
- tên tiếng anh
function printNumber(number){
    for(let i = 1; i<=number;i++){
        console.log(i);
    }
}

printNumber(10);        // 10, 100 đối số
printNumber(100)


function sum(num1,num2){
    // return num1 + num2;
    let total = num1 + num2;
    // return total;
}

// let s = sum(4,7);
// console.log(sum(4,7));

console.log(sum(4,7));

// Biến toàn cục và biến cục bộ
let total = 10;         // toàn cục
function sum(num1,num2){
    let total = num1 + num2;        // total: cục bộ
    return total;
}

sum(3, 5);

console.log(total);


let total = 10;         // toàn cục
sum(3, 5);
function sum(num1,num2){
    total = num1 + num2;       
    return total;
}
console.log(total);

// Khai báo let var trong hàm thì nó ko hositing
function change(){
    let a = 5;
}
change();
console.log(a);

// Khai toàn cục và cục bộ
function change(b){
    let a = 5;      
}
let a;      // underfine
change(a);
console.log(a);     // Họ đang hỏi biến a toàn cục

let arr = [2,3];        // truyên tham chiếu: mảng,đối tương
function swap(numbers){
    let temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
}

swap(arr);
console.log(arr);       // hoi biến toàn cục arr

let b = 10;         // truyền giá trị: pass value   :int, string, boolean
function change(a){
    b = 5;
}
change(b)
console.log(b);
let arr = [3,6,1,9];

 Têm hàm: sumArray
 Tham số: arr
 Trả về: 1 con số

 function sumArray(numbers){
    let total = 0;
    for(let i= 0; i< numbers.length;i++){
        total += numbers[i];
    }
    return total;
}

console.log(sumArray(arr));


let arr = [3,6,1,9];


function sumandpushToArray(arr){
    let total = 0;
    for(let i= 0; i< arr.length;i++){
        total += arr[i];
    }
    arr.push(total);
}
sumandpushToArray(arr)
console.log(arr);
**/




