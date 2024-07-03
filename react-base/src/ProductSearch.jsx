import axios from "axios"
import React, { useEffect, useState } from "react"

export default function ProductSearch() {
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(30);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?limit=${limit}&q=${searchText}`)
            .then((response) => {
                // console.log(response.data)
                setProducts(response.data.products);
                // console.log("products", products);
            })
        /* Dependeny array [] means component did mountx */
    }, [searchText, limit])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/todos`)
        .then((response) => {
            console.log("Api", response);
        })
    },[])

    function handleChange (event) {
        // console.log("value", event.target.value);
        if(event.target.name == "title") {
            setSearchText(event.target.value)
        } else if(event.target.name == "dropdown") {
            // console.log(event.target.value)
            setLimit(event.target.value)
        }
    }

    /* 
        
        https://dummyjson.com/products/search?q=
        
        https://dummyjson.com/products/search?q=iphone  
    
    */

    return (
        <>
            <input type="text" name="title" onChange={handleChange} placeholder="search" />
            <select name="dropdown" id="dd" onChange={handleChange}>
                <option value="30">30</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
            <div>ProductSearch</div>
            <h1>Products ({products.length})</h1>
            <ul>
                {
                    products.map((el) => {
                        return <li key={el.id}>{el.title}</li>
                    })
                }
            </ul>
        </>
    )
}
