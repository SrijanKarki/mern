let colors = ["red", "orange", "green", "purple"];
let names = ["ram", "hari", "shyam"];
// let greeting = Array("hi", "hola");
colors[4] = "Lilac";
console.log(colors[4]);
// console.log(greeting);
colors.push("black");
console.log(colors);

// Cannot be done via nested array. Need to be done using objects.

let users = ["userName", "userAge", "userAddress"];

users[0] = ["ram", "shyam", "hari"];
users[1] = [18, 19, 20];
users[2] = ["Jamal", "Kamalpokhari", "Putalisadak"];

console.log(users[0][1]);
console.log(users)

