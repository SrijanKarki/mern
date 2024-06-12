/* Syncronous Code */

/* 
    console.log("Start of log");

    for (let index = 0; index < 1000; index++) {
        console.log(index);
    }

    console.log("End of loop"); 
*/

doSomething = () => {
    console.log("Do something");
}
setTimeout(doSomething, 5000);


let users = [
    {
        name: "Ram",
        address: "xyz"
    }, {
        name: "Shyam",
        address: "abc"
    }, {
        name: "Hari",
        address: "ghi"
    }
]

users.forEach(user => {
    let userName = user.name;
    let userAddress = user.address;
    console.log(`${userName} lives in ${userAddress}`);
});