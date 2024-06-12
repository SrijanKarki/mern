

/* 

    print multiplcation of a digit for 

    8  begining from 1 to  10 
    10 begining from 11 to 20
    


     => 
     8 X 1 = 8
     8 X 2 = 16
     .
     .
     .
     8 X 10 = 80

     and 


     10 X 11 = 110
     10 X 12 = 120
     .
     .
     .
     10 X 20 = 200


*/
findMultiplication(10, 11, 20)
// 10 ko 11 dekhi 20 samma print garnu paryo

function findMultiplication(multiplication, startValue, endValue) {
    for (let index = startValue; index <=endValue; index++) {
        let value =  multiplication * index;
        console.log(`${multiplication} X ${index} = ${value}`);
    }
}

let numbers = [1,2,3,4,5]
for (let index = 0; index < numbers.length; index++) {
    numbers[index] = numbers[index] * 2;
    
}

console.log("Numbers",numbers);//[2,4,6,8,10]


const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]

const users = [];

for (let index = 0; index < nepaliNames.length; index++) {
    const element = nepaliNames[index].toLowerCase();
    users[index] = {
        "name": element,
        "email": `${element}@gmail.com`,
        "password": `${element}${index}`
    }
}

console.log(users);
