/**
 // Sử dụng count++ , ++count
let count =0;
do{
    //1
    count++;    

}while(count++ <10)
console.log(count);

let num = 12;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log("khong la so nguyen to");
        break;
    }
}
*/



// in ra 10 số nguyên tố đầu tiên
let count = 0;
let numTemp = 2;
while (count <= 10) {
    let flag = true;
    for (let i = 2; i < numTemp; i++) {
        if (numTemp % i == 0) {
            flag = false;
            break;
        }
    }
    if(flag == true){
        console.log(numTemp + " Là số nguyên tố");
        count++;
    }
    numTemp++;
}


