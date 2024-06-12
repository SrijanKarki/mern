/* cart database */
let cartItems = [
    {
        name: "Ram",
        items: [
            { name: "watch", price: 1000 },
            { name: "keybord", price: 500 },
        ],
    },
    {
        name: "hari",
        items: [
            { name: "watch", price: 2000 },
            { name: "keybord", price: 5000 },
        ],
    },
    {
        name: "sita",
        items: [],
    },
    {
        name: "shyam",
        items: [],
    },
]

let filteredCartItems = []

const filterValue = cartItems.filter(checkValue);
console.log(filterValue);

function checkValue(cartItem) {
    return cartItem.items.length>0
}

cartItems.forEach(item => {
    if (item.items.length > 0) {
        filteredCartItems.push(item)
    }
});
// console.log(filteredCartItems)



let student1 = {
    name: "ram",
    gender: "male",
    paidStatus: false,
    hasScholorship: true,
    hasMetAttandence: true,
}

let student2 = {
    name: "sita",
    gender: "female",
    paidStatus: false,
    hasScholorship: false,
    hasMetAttandence: false,
}

let student3 = {
    name: "gita",
    gender: "others",
    paidStatus: true,
    hasScholorship: true,
    hasMetAttandence: false,
}

let students = [student1, student2, student3]
let eligibleStudents = []
let nonEligibleStudents = []
students.forEach(student => {
    if((student.hasScholorship || student.paidStatus) && student.hasMetAttandence) {
        eligibleStudents.push(student);
    } else {
        nonEligibleStudents.push(student);
    }
});
console.log("Eligible Students", eligibleStudents);
console.log("Non Eligible Students", nonEligibleStudents);