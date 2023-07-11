/**
let num = 5;

let arr = [5,1,6,7];
let arr1 = new Array(3,5);
console.log(arr);
console.log(arr1);

let arr3 = [,,,,];
arr3[3] = 5;
console.log(arr3);

let arr5 = [6,1,3,7,6,7,2,1];
console.log(`Do dai mang: ` + arr5.length);

console.log("Vi tri 0: " + arr5[0]);
console.log("Vi tri 7: " + arr5[3]);
console.log("Vi tri 7: " + arr5[arr5.length -1]);
arr5[2] = 300;
console.log(arr5);

let arr6 = [7, 1, 4, 3, 7, 4, 2, 9, 1];
for (let i = 0; i < arr6.length - 1; i++) {
    console.log(arr6[i]);
}

// in ra các số ở vị trí lẻ từ cuối về trước
let arr6 = [7, 1, 4, 3, 7, 4, 2, 9, 1];
for (let i = arr6.length - 1; i >= 0; i--) {
    if(i%2 != 0){
        console.log(arr6[i]);
    }
}

// tính tổng các số trong mảng
let arr7 = [7, 1, 4, 3, 7, 4, 2, 9, 12];
let total = 0;
for(let i = 0;i<arr7.length;i++){
    // total = total +i;
    total += arr7[i];
}
console.log(total);

// tính trung bình của các số chẵn
let arr7 = [2, 1, 4,6];
let total = 0;
let count = 0;
for(let i = 0;i<arr7.length;i++){
    if(arr7[i] % 2 == 0){
        total += arr7[i];
        count++;
    }
}
console.log(total/count);

// in ra vị trí lớn nhất
let arr8 = [4,2,5,3,-1];
let max = arr8[0];
let index = 0;
for(let i = 1;i<arr8.length;i++){
    if(arr8[i] > max){
        max = arr8[i];
        index = i;
    }
}
console.log("index MAX: " + index);
 */

// let arr = [3,1,5,7,8];      // [8,7,5,1,3]
// for(let i = 0 ;i<arr.length/2;i++){
//     // let temp = arr[i];
//     arr[i] = arr[arr.length-1-i];
//     arr[arr.length-1-i] = arr[i];
// }

console.log(5/2);




