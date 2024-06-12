/* arrow function => */


function sum1(firstNumber, secondNumber) {
    let output = firstNumber + secondNumber;
    return output;
}

// let result = sum(100,50);
// console.log({result});

const sum = (firstNumber, secondNumber) => {
    return firstNumber+secondNumber;
};

const double = (input) => {
    return input * 2;
}

console.log(sum(100,500));

const triple = (input) => input*3
console.log(triple(100));