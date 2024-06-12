const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]

const users = [];

for (let index = 0; index < nepaliNames.length; index++) {
    const lowerCaseName = nepaliNames[index].toLowerCase();
    const name = nepaliNames[index];
    users[index] = {
        "name": name,
        "email": `${lowerCaseName}@gmail.com`,
        "password": `${lowerCaseName}${index}`
    }
}

console.log(users);