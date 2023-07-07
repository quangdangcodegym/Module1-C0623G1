/**
var day = 3;
switch (day) {
    case 2:
        console.log("Là thứ 2");
    case 3:
        console.log("Là thứ 3");
    case 4:
        console.log("Là thứ 4");
    case 7:
        console.log("Là thứ bảy");
    case 8:
        console.log("Là chủ nhật");
    default:
        console.log("Ngày ko hợp lệ");
        
}


var month = 3;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 12:
        console.log("Có 31 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Có 30 ngày");
        break;
    case 2:
        console.log("Có 28 ngày");
    default:
        console.log("Tháng ko hợp lệ");
}
// Nhập vào 1 tháng: kiểm tra xem tháng đó có bao nhiêu ngày

 */


var x = 4;
switch (true) {
    case x>3:
        console.log("x > 3 đó");
        break;
    case x>0 && x<=3:
        console.log("x nằm trong khoảng [0:3]");
        break;
    case true:
        console.log("Thuc hien luon");
        break;
    default:
        console.log("x ko hợp lệ");
        break;
}
