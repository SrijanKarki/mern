const express = require('express')
const app = express() //returns object which is set to app

const mongoose = require('mongoose')

//test is the name of the database
mongoose.connect('mongodb://127.0.0.1:27017/mern')
  .then(() => console.log('DB Connected!'));
  
  const Schema = mongoose.Schema
  const TodoSchema = new Schema({
      title: String,
      status: Boolean,
  })
  
  //"Todo" database is then put into Todo model. 
  const Todo = mongoose.model("Todo", TodoSchema)

app.use(express.json()) //middleware
var cors = require('cors')


app.use(cors())

/* 
    middleware
    a function which has access to request and response
    it can also change request and response
    and also has access to next upcomming valid middleware
    runs prior to our routes
*/
let isLogged = true;
let user = {name: "ram" }
function checkAuthentication(req, res, next) {
    console.log("checking authentication");
    if (!isLogged) {
        res.status(401).send({ msg: "not authenticated" })
    } else {
        req.user
        next()
    }
}

/* global middleware. Runs on every route */
app.use(express.json()) // return (req, res, next) -=> {req.body = post}

//Checking to log in. Middleware
app.use(checkAuthentication)

let dbTodos = [
    { title: "HTML", status: true },
    { title: "CSS", status: true },
    { title: "JS", status: true },
]

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/api/todos', function (req, res) {
    res.send(dbTodos);
})


app.post("/api/todos", function (req, res) {
    // console.log();
    //for the req.body to work there must be express.json run on the top.
    console.log(req.body);
    /* db.todos.insertOne(...}) */
    Todo.create({
        title: req.body,
        status: false,
    })
    console.log("Added");

    // dbTodos.push({
    //     title: "React", status: false
    // })
    res.send("Todos created");
})

app.delete("/api/todos", function (req, res) {
    dbTodos = []
    res.send("todos deleted")
})

app.listen(8000, () => {
    console.log("Server started");
})