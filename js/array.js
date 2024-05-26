let colors = ["red", "orange", "green", "purple"];
let names = ["ram", "hari", "shyam"];
// let greeting = Array("hi", "hola");
colors[4] = "Lilac";
console.log(colors[4]);
// console.log(greeting);
colors.push("black");
console.log(colors);

// Cannot be done via nested array. Need to be done using objects.

// let users = ["userName", "userAge", "userAddress"];

/* users[0] = ["ram", "shyam", "hari"];
users[1] = [18, 19, 20];
users[2] = ["Jamal", "Kamalpokhari", "Putalisadak"];

console.log(users[0][1]);
console.log(users) */


let user1 = {
    name: "ram",
    age: 18,
    phone: 12121212,
    gender: "M"
}

let user2 = {
    name: "hari",
    age: 19,
    phone: 23121212,
    gender: "M"
}
console.log(user2.phone);

console.log(user1, user2);

let projectorBrand = "sony";
let projectorColor = "white";
let projectorPrice = 10000;

let projector = {
    brand: "sony",
    color: "white",
    price: 10,
}
let projector2 = {
    brand: "samsung",
    color: "black",
    price: 20000,
}
console.log("before", projector.price);
projector.price = 10000;
console.log("after", projector.price);

console.log(projector);

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car.type);


let user3={
    name:"sita",
    age: "19",
    address: {
        province:"bagmati",
        city:"kathmandu",
        town:"chakrapath",
    },
    contact: "97545454"
}
console.log("User3", user3);