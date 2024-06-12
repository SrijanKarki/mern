/* cart database */
let cartItems = [
    {
        user: {
            name: "Ram",
            adress: "abc",
            items: [
                { name: "watch", price: 1000 },
                { name: "keybord", price: 500 },
            ],
        },
    },
    {
        user: {
            name: "hari",
            adress: "xyz",
            items: [
                { name: "watch", price: 2000 },
                { name: "keybord", price: 5000 },
            ],
        },
    },
    {
        user: {
            name: "sita",
            adress: "xyz",
            items: [
                { name: "watch", price: 1000 },
                { name: "keybord", price: 500 },
                { name: "mouse", price: 500 },
            ],
        },
    },
]

cartItems.forEach(items => {
    let total = 0;

    let name = items.user.name;
    let userItems = items.user.items
    userItems.forEach(user => {
        total += user.price;
    });
    console.log(`${name} has ordered of Rs ${total}`); //Template literal or string literal
});


/* 
    expected output in console
    ram has orderd of 1500
    hari has orderd of 7000
    sita has orderd of 2000
*/


