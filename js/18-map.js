let numbers = [1, 2, 3, 4, 5]

let doubleNumbers = []

numbers.forEach(number => {
    doubleNumbers.push(number * 2);
});

console.log(doubleNumbers);

let oddNumbers = numbers.filter((number) => {
    if (number % 2 !== 0) {
        return true
    }
});

console.log(oddNumbers);

let tripleNumbers = numbers.map((number) => {
    return number * 3;
});

console.log(tripleNumbers);

let names = ["ram", "hari", "shyam", "gita"]
let users = []

names.forEach((name, index) => {
    users.push({
        name: name,
        email: `${name}@gmail.com`,
        password: `${name}${index}`
    })
});

let fakeName = names.map((name, index) => {
    return {
        name,
        email: `${name}@gmail.com`,
        password: `${name}${index}`
    }
})

console.log(users);
console.log("Map Names", fakeName);

/* asynchronous task */

/*
    - pending
    - resolve
    - reject
 */
let promise = new Promise((resolve, reject) => {

});