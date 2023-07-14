/**
var strNumber = "245183648";           // "245183648" => "2-451836-4-8"

var arr = strNumber.split("");
// console.log(arr);

let arrNew = [];
for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) % 2 == 0 && parseInt(arr[i + 1]) % 2 == 0){
        arrNew.push(arr[i]);
        arrNew.push("-")
    }else{
        arrNew.push(arr[i]);
    }
}
console.log(arrNew.join(""));

**/


function checkPrime(number){
    if(number <2){
        return false;
    }
    for(let i = 2; i<number;i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}



function printPrime(number){
    let count  = 0;
    let i = 2;
    while(count < number){
        let check = checkPrime(i);
        if(check == true){
            console.log(`${i} là số nguyên tố ${count + 1}`);
            count++;
        }
        i++;
        
    }
}

printPrime(1115);

/*
Bài 1: tìm giá trị lớn nhất của mảng
Bài 2: tìm giá trị lớn thứ 2 trong mảng
Bài 3: Tính tổng 3 giá trị lẻ đầu tiên
Bài 4: Đảo ngược mảng
Bài 5: nối mảng b vào mảng a
Bài 6: tính tổng các số nguyên tố trong mảng
Bài 7: tính trung bình các số chính phương trong mảng
Bài 8: hiển thị các cột chẵn
Bài 9: Tính tổng các giá trị đường viền
Bài 10: Tìm ra vị trí [i,j] của số chẳn đầu tiên
Bài 11: Tính tổng các số nguyên tố trong mảng 2 chiều
Bài 12: Tính tổng: tam giác trên trái, trên phải, dưới trái, dưới phải

Bài 1: Tính tổng các giá trị lớn hơn giá trị đứng liền trước nó trong mảng 1 chiều các số thực
Bài 2: Tính trung bình cộng các số dương trong mảng 1 chiều các số thực
Bài 3: Đưa các số chia hết cho 3 về đầu mảng
Bài 4: Đảo ngược mảng ban đầu
Bài 5: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước
Bài 6: Hãy liệt kê các giá trị trong mảng mà thỏa điều kiện lớn hơn giá trị tuyệt đối của giá trị đứng liền sau nó
Bài 7: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên
Bài 8: Đếm số dương chia hết cho 7 trong mảng
Bài 9: Đếm số nguyên tố trong mảng
Bài 10: Hãy xác định số lượng phần tử kề nhau mà cả 2 đều chẵn
Bài 11: Kiểm tra mảng có đối xứng không? Có trả về 1, không có trả về 0
Bài 12: Kiểm tra mảng có tăng dần hay không
Bài 13: Hãy cho biết tất cả các phần tử trong mảng a có nằm trong mảng b không
Bài 14: Kiểm tra ma trận 2 chiều có toàn dương hay không
Bài 15: Kiểm tra một cột ma trận có giảm dần hay không
Bài 16: Kiểm tra ma trận có tồn tại số lẻ hay không
Bài 17: Liệt kê các dòng giảm dần trong ma trận
Bài 18: Tìm số chẵn đầu tiên trong ma trận
Bài 19: Tìm số chẵn lớn nhất trong ma trận
Bài 20: Liệt kê các dòng có tổng lớn nhất

 **/