import React, { useState } from "react"

export default function ShoppingList() {
    const [items, setItems] = useState(
        [
            { title: "apple", quantity: "10", rate: "100" },
            { title: "orange", quantity: "5", rate: "150" }
        ]
    );

    function addNewLine(event) {
    
        event.preventDefault(); //Stops page refresh

        let newItem = {
            title: event.target.title.value,
            quantity: event.target.quantity.value,
            rate: event.target.rate.value
        }

        setItems([...items, newItem]);
        
        // let temp = [...titles]
        // temp.push(newTitle);
        // newTitles(temp)
        // console.log(titles);
        // event.target.title.value = "";

    }

    function deleteRow(index) {
        // console.log(index);
        let filteredItems = items.filter((el, idx) => {
            if(index == idx) {
                return false
            }
            return true
        })
        setItems(filteredItems)
    }

    return (
        <>
            <div>ShoppingList</div>
            <hr />
            <form onSubmit={addNewLine}>
                <input required type="text" placeholder="title" name="title" />
                <input required type="number" placeholder="quantity" name="quantity" />
                <input required type="text" placeholder="rate" name="rate" />
                <button>add item</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quanity</th>
                        <th>Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>{item.rate}</td>
                                <td><button onClick={() => {
                                    deleteRow(index)
                                }}>Delete</button></td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
