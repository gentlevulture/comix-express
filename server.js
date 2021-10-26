// import modules

import express from 'express'
import * as todoDb from "./data/todo-db.js"
import {find} from "./data/todo-db.js"

// console.log(todoDb)
// console.log(find)

// Create Express application

const app = express()

// Configure the app (app.set)

app.set("view engine", "ejs")

// Mount Middelware(app.use)



// Mount Routes

//localhost:3000/
app.get('/home', function(req, res){
  console.log(req)
  console.log(res)
  res.send("<h1>hello, friend!</h1>")
})

app.get("/todos", function(req, res){
  todoDb.find({}, function(error, todos) {
    res.render("todos/index", {
      error: error,
      todos: todos
    })
  })
})

app.get('/', function(req, res) {
  res.redirect('/home')
})

// Tell our app to listen on port 3000

app.listen(3000, function(){
  console.log("Listening on 3k!")
})