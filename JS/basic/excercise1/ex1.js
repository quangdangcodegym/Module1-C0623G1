/**
var arr = [5,1,6,7,4];
var arr1 = new Array();


var lop = [
    [3,4,3,4,6],
    [2,3,2,3,7],
    [1,3,1,3,6]]

// console.log(lop[2]);   //[1,3,1,3]
// console.log(lop[1][3]);     //lop[dong][cot]

for(let i = 0; i< lop.length ; i++){
    let str = "";
    for(let j= 0;j<lop[i].length;j++){
        str += lop[i][j];
    }
    console.log(str);
}

var arr = [
    [3,4,3,4,6],
    [2,3,2,3,7],
    [1,3,1,3,6]];
let sum = 0;
for(let i =0 ;i<arr.length;i++){
    for(let j = 0; j <arr[i].length;j++){
        sum += arr[i][j];
    }
}
console.log(sum);

let arr = [
    [[1,1],[2,2],[3,3]],
    [[10,10],[20,20],[30,30]],
    [[100,100],[200,200],[300,300]],
];

for (let i=0; i<arr.length;i++){
    let str  = "";
    for (let j=0; j<arr[i].length;j++){
        for (let k=0; k<arr[i][j].length;k++){
            str += arr[i][j][k];
        }
    }
    console.log(str);
}

 */
let arr = [
    [3,1,5,3],
    [4,4,2,2],
    [1,1,1,1],
    [3,0,3,5]
]
let total = 0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(i == j || i + j == arr[i].length -1){
            total += arr[i][j];
        }
    }
}
console.log("Tổng là: ", total);

/**
 
 Bài 1: hiển thị các cột chẵn
 Bài 2: Tính tổng các giá trị đường viền
 Bài 3: Tìm ra vị trí [i,j] của số chẳn đầu tiên
 Bài 4: Tính tổng các số nguyên tố trong mảng 2 chiều
 Bài 5: Tính tổng: tam giác trên trái, trên phải, dưới trái, dưới phải
 */

