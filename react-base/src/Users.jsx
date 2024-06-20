export default function Users() {
    let users = [
        { name: "ram", status: true },
        { name: "hari", status: true },
        { name: "sita", status: false },
        { name: "gita", status: true },
        { name: "rita", status: false },
        { name: "abc", status: false },
        { name: "xyz", status: false },
    ]

    let usersListarray = [
        <li>user 1</li>,
        <li>user 2</li>,
        <li>user 3</li>,
        <li>user 4</li>,
        <li>user 5</li>,
    ]

    let usersList = users.map((user) => {
        return <li>{user.name}</li>
    })

    return (
        <div>
            <ul>
                {users.map((user) => {
                    // Conditional rendering to print yes or no. As you can not print boolean value
                    return <li>{user.name} ({user.status ? "Yes" : "No"})</li>
                })}

            </ul>
        </div>
    )
}

// export default Users
