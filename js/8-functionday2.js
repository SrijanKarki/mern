/* 
function sum(firstInput, secondInput) {
    let input1 = firstInput;
    let input2 = secondInput;
    let result = firstInput + secondInput;
    console.log(firstInput + secondInput);
}

sum(129,200);

function double(a) {
    console.log("Double of " + a + " is " + a*2);
}

double(3);
double(100);
double(150); 

*/

let genders = ["Male", "Female", "Other"]
let religions = ["Hindu", "Buddhist", "Christian", "Muslim", "Sikh"]
let provinces = ["one", "two", "three", "four"]

function randomPrint(randomArray) {
    return (randomArray[Math.floor(Math.random() * randomArray.length)]);
}

console.log("Random Gender: " + randomPrint(genders));
console.log("Random Religions: " + randomPrint(religions));
console.log("Random Provinces: " + randomPrint(provinces));


/* 
let randomGenderWithDec = Math.random() * genders.length;
let randomGender = Math.floor(randomGenderWithDec);


let randonReligionWithDec = Math.random() * religions.length;
let randomReligion = Math.floor(randonReligionWithDec);

let randonProvinceWithDec = Math.random() * provinces.length;
let randomProvince = Math.floor(randonProvinceWithDec);

console.log("Random Gender:", genders[randomGender])
console.log("Random Religion:", religions[randomReligion])
console.log("Random Religion:", provinces[randomProvince])
 */