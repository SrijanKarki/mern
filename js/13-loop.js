for (let index = 1; index <= 10; index++) {
    // console.log(index);
}

// let fruits = ["Apple", "Mango", "Orange", "Kiwi", "Banana", "Papaya", "Guava", "Durian"]
let fruits = [
    {
        name: "Apple",
        quantity: "10 kg"
    },
    {
        name: "Mango",
        quantity: "15 kg"
    },
    {
        name: "Orange",
        quantity: "20 kg"
    },
    {
        name: "Kiwi",
        quantity: "20 kg"
    },
    {
        name: "Banana",
        quantity: "10 dozen"
    },
    {
        name: "Papaya",
        quantity: "30 kg"
    },
    {
        name: "Guava",
        quantity: "40 kg"
    },
    {
        name: "Durian",
        quantity: "50 kg"
    },

]

let length = fruits.length;


for (let index = 0; index < length; index++) {
    let fruitName = fruits[index].name;
    let fruitQuantity = fruits[index].quantity;

    //Tempelate Literals
    // console.log(`We have ${fruitQuantity}s of ${fruitName}`);
}

/* 
for(let index=0; index < fruits.length; index++) {
    console.log("In index", index, ",there is", fruits[index]);
} 
*/

let users = [
    { userName: "ram", password: "password" },
    { userName: "hari", password: "password1" },
    { userName: "shyam", password: "password2" },
];

/* users.forEach(user => {

    function login(username, password) {
        if (user.userName == username && user.password == password) {
            console.log("Login success!");
            return
        }
        console.log("Login failed!");
    }
}); */

function login(username, password) {
    users.forEach(user => {
        if (user.userName == username && user.password == password) {
            console.log("Login success!");
        }
    });
    console.log("Login failed!");
}


login("ram", "password")// login success
login("ram", "password22")// login failed
// login("shyvbam", "password2")// login failed



