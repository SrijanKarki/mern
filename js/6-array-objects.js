let carts = [
    {
        // Cart 1 start
        cart1: {
            customerName: "John Doe",
            customerEmail: "johndoe@gmail.com",
            orderedDate: "26 May 2024",
            deliveryLocation: "officeAddress",
            customerAddress: [
                {
                    homeAddress: [
                        {
                            streetName: "Kumari Galli",
                            wardNo: "3",
                            location: "Putalisadak",
                        }
                    ],
                    officeAddress: [
                        {
                            streetName: "Hanumansthan",
                            wardNo: "8",
                            location: "Lalitpur",
                        }
                    ],
                }
            ], //customerAddress closed
            items: [
                {
                    item1: "watch",
                    quantity: "3",
                    rate: "4 stars",
                    totalPrice: "Rs. 30,000",
                },
                {
                    item2: "keyboard",
                    quantity: "2",
                    rate: "5 stars",
                    totalPrice: "Rs. 11,000",
                },
                {
                    item3: "mouse",
                    quantity: "1",
                    rate: "5 stars",
                    totalPrice: "Rs. 3,000",
                },
            ], // items closed
        },// carts closed

        // Cart 2 Start
        cart2: {
            customerName: "Jane Smith",
            customerEmail: "janesmith@gmail.com",
            orderedDate: "20 May 2024",
            deliveryLocation: "homeAddress",
            customerAddress: [
                {
                    homeAddress: [
                        {
                            streetName: "Chakrapath",
                            wardNo: "8",
                            location: "Kathmandu",
                        }
                    ],
                    officeAddress: [
                        {
                            streetName: "Balaju",
                            wardNo: "13",
                            location: "Kathmandu",
                        }
                    ],
                }
            ], //customerAddress closed
            items: [
                {
                    item1: "keyboard",
                    quantity: "5",
                    rate: "5 stars",
                    totalPrice: "Rs. 50,000",
                },
                {
                    item2: "watch",
                    quantity: "1",
                    rate: "3 stars",
                    totalPrice: "Rs. 10,000",
                },
                {
                    item3: "mouse",
                    quantity: "10",
                    rate: "4 stars",
                    totalPrice: "Rs. 20,000",
                },
            ], // items closed
        },// carts closed
    }
];

console.log(carts);