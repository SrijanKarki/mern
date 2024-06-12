let willRain = false;
let hasPossibility = true;

/* 
if (willRain) {
    console.log("take umbrella");
}

else {
    if (hasPossibility) {
        console.log("might rain");
    }
    else {

        console.log("no need");
    }
}

if (willRain) {
    console.log("take umbrella");
} else if (hasPossibility) {
    console.log("might rain");
} else {
    console.log("no need");
}
 */

let student1 = {
    name: "ram",
    gender: "male",
    paidStatus: false
}
let student2 = {
    name: "sita",
    gender: "female",
    paidStatus: false
}
let student3 = {
    name: "gita",
    gender: "female",
    paidStatus: true
}

function checkPaymentStatus(student) {
    if (student.paidStatus == false) {
        console.log(student.gender == "male" ? "Mr" : "Mrs", student.name, "cannot attend exam");
    } else {
        console.log(student.gender == "male" ? "Mr" : "Mrs", student.name, "can attend exam");
    }
}

// Better to use Ternary Operator

// checkPaymentStatus(student1);
// checkPaymentStatus(student2);
// checkPaymentStatus(student3);


let students = [
    {
        name: "ram",
        gender: "male",
        paidStatus: false,
        hasScholarship: false,
    },
    {
        name: "sita",
        gender: "female",
        paidStatus: false,
        hasScholarship: true,
    },
    {
        name: "gita",
        gender: "female",
        paidStatus: true,
        hasScholarship: true,
    }
]

students.forEach(student => {
    if (student.paidStatus == false && student.hasScholarship == false) {
        console.log(student.gender == "male" ? "Mr" : "Mrs", student.name, "cannot attend exam");
    } else if (student.paidStatus == true || student.hasScholarship == true) {
        console.log(student.gender == "male" ? "Mr" : "Mrs", student.name, "can attend exam");
    } else {
        console.log(student.gender == "male" ? "Mr" : "Mrs", student.name, "can attend exam");
    }
});

// function sum(a,b) {
//     return a*b
// }

sum = (a,b) => a * b;
console.log(sum(2,3))