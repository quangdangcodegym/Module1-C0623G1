function Car(name, weight) {
    this.name = name; //Thuộc tính
    this.weight = weight; //Thuộc tính
    //Phương thức
    this.start = function(){
        document.write("Starting...");
    }
}

let c1 = new Car("BMW", 200);

console.log(c1);