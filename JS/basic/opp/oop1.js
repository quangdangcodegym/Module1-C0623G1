/**
class Person{
    constructor(name, age, gender){
        this.married = false;
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    introduceSelf(){
        console.log(`Name: ${this.name} age: ${this.age}`);
    }
    marriedWith(person){
        this.married = true;
        person.married = true;
    }
}

let dat = new Person("Dat", 25, true);
let duc = new Person("Duc", 27, true);
let ngoc = new Person("Ngoc", 26, false);

duc.introduceSelf();
duc.marriedWith(ngoc);

console.log(ngoc);

class Product{
    constructor(id, name, price, amount){
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    setName(nameNew){
        if(nameNew.includes("xxx") || nameNew.includes("maria ozawa")){
            console.log("ko hợp lệ");
        }else{
            this.name = nameNew;
        }
    }
}
let p1 = new Product(1, "Iphone 11", 23000, 10);
let p2 = new Product(2, "Iphone 12", 23000, 10);
let p3 = new Product(3, "Iphone 13", 23000, 10);
let p4 = new Product(4, "Iphone 14", 23000, 10);


// p1.name = "Iphone 11111111";
p1.setName("Iphone 11111111");
console.log(p1.name);
p1.setName("maria ozawa");
console.log(p1.name);


class Student{
    constructor(id, name, phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.hobbies = [];
        this.activities = [];
    }
    removeHobbie(hobbieName){
        for(let i = 0; i< this.hobbies.length ; i++){
            if(hobbieName.toUpperCase() == this.hobbies[i].toUpperCase()){
                this.hobbies.splice(i, 1);
            }
        }
    }
}
let s1 = new Student(1, "Huy", "123456789");
let s2 = new Student(2, "Đoàn", "123456789");

s1.hobbies = ["bida", "game", "choi gai", "du lich"];
console.log(s1);
s1.removeHobbie("CHoi Gai");
console.log(s1);


class Student{
    constructor(id, name, phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.hobbies = [];
        this.activities = [];
    }
    removeHobbie(hobbieName){
        for(let i = 0; i< this.hobbies.length ; i++){
            if(hobbieName.toUpperCase() == this.hobbies[i].toUpperCase()){
                this.hobbies.splice(i, 1);
            }
        }
    }

    gotoMassage(address){
        this.activities.push(`Massage at ${address}`)
    }
}
let s1 = new Student(1, "Huy", "123456789");
let s2 = new Student(2, "Đoàn", "123456789");
let s3 = new Student(3, "Hoàng", "123456789");

let c6 = [s1, s2, s3];
for(let i = 0;i<c6.length;i++){
    c6[i].gotoMassage("20 Hoàng tử");
}

s2.gotoMassage("Bến me");
for(let i = 0;i<c6.length;i++){
    console.log(c6[i]);
}

 */


class Student{
    constructor(id, name, phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.hobbies = [];
        this.activities = [];
    }
    removeHobbie(hobbieName){
        for(let i = 0; i< this.hobbies.length ; i++){
            if(hobbieName.toUpperCase() == this.hobbies[i].toUpperCase()){
                this.hobbies.splice(i, 1);
            }
        }
    }

    gotoMassage(address){
        this.activities.push(`Massage at ${address}`)
    }
    toString(){
        let strHobbies = this.hobbies.join("-");
        return `Name: ${this.name} phone: ${this.phone} hobbies: ${strHobbies}`
    }
}
let s1 = new Student(1, "Huy", "123456789");
let s2 = new Student(2, "Đoàn", "123456789");
let s3 = new Student(3, "Hoàng", "123456789");
s1.hobbies = ["bida", "game", "choi gai", "du lich"];
console.log(s1.toString());



let s10 = {
    name: "Quang Dang",
    age: 30,
    toString: function(){
        return `Name: ${this.name} age: ${this.age}`
    }
}

console.log(s10.toString());

