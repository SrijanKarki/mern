let users = [
    {
      name: "Ramesh Shrestha",
      email: "ramesh@gmail.com",
      password: "ramesh@123",
      address: "Bengaluru",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560066",
      country: "India",
    },
  
    {
      name: "Rita Shrestha",
      email: "rita@gmail.com",
      password: "rita@123",
      address: "Kathmandu",
      city: "Kathmandu",
      state: "Bagmati",
      zip: "44600",
      country: "Nepal",
    },
  
    {
      name: "Sita Shrestha",
      email: "sita@gmail.com",
      password: "sita@123",
      address: "Pokhara",
      city: "Pokhara",
      state: "Gandaki",
      zip: "33700",
      country: "Nepal",
    },
  ];
  
  function login(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        console.log("Email and password matched\n login successful");
        return;
      }
    }
    console.log("Login Failed");
  }
  
  
  
  login ("ramu@gmail.com", "Ramu@123")
  login("sita@gmail.com", "sita@123");