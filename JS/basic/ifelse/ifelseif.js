/**
var diemTB = 4;

if(diemTB > 8 && diemTB <=10){
    console.log("Giỏi");
}else{
    if(diemTB >7 && diemTB <= 8){
        console.log("Khá");
    }else{
        if(diemTB > 5 && diemTB <= 7){
            console.log("Trung bình");
        }else{
            if(diemTB >0 && diemTB <=5){
                console.log("Yếu");
            }else{
                console.log("Không hợp lệ");
            }
        }
    }
}
 */

var diemTB = -3;
if(diemTB > 8 && diemTB <=10){
    console.log("Giỏi");
}else if(diemTB >7 && diemTB <=8){
    console.log("Khá");
}else if(diemTB >5 && diemTB <=7){
    console.log("Trung bình");
}else if(diemTB >0 && diemTB <=5){
    console.log("Yếu");
}else{
    console.log("Không hợp lệ");
}