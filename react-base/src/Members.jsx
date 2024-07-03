import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Members() {

    const [users, newUsers] = useState([]);

    /* Will only load this part one time in the beginning of the load  */
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                // console.log(response.data)
                newUsers(response.data);
                // console.log("users", users);

            },[])
            /* Dependeny array [] means component did mountx */
    })

    return (
        <>
            <h1>Component Life Cycle UseEffect</h1>
            <div>Members {users.length}</div>
            <ul>
                {
                    users.map((user, index) => {
                        return <li key={users[index].id}>{user.name}: {user.username}</li>
                    })
                }
            </ul>
        </>

    )
}
