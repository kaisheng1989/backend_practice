// Step 1: npm init
// Step 2: touch .gitignore
// step 3: npm install express
// inside gitignore add node_modules and .env
// step 4: create a index.js via touch index.js
// step 5: inside index.js - ES5 syntax
//
const express = require("express");
// allow the use of different method part of express from the app
// Step 12 import cors
const cors = require("cors");

const app = express();

// Step 9: To use dotenv
require("dotenv").config();
const PORT = process.env.PORT;

// Step 7: Create ausers object to see the get request for /users
const users = [
  {
    name: "John",
    student: "coder",
  },
  {
    name: "David",
    student: "slacker",
  },
];

// Together with step 12 (middleware) - Look at Step 11
app.use(cors());
// Step 13: from step 11
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// step 6: after filling in index.js get up a get request.
app.get("/", (request, response) => {
  // console.log('request',request)
  // console.log('response', response)
  response.send("Hello World");
  // difference between response.send and response.json
  response.json({ message: "hello world" });
  // it is done in  a JSON format.
  //
});

app.get("/users", (req, res) => {
  res.json({ users: users });
});

// Step 10: calling a post request.
app.post("/users", (req, res) => {
  console.log(req.body);
  users.push({ name: req.body.name, student: req.body.student });
  res.json({ data: users, message: "success" });
});

// step 11: Add a middleware - there will be two
//npm install cors

// To get the response: http://localhost:8080/users
app.listen(PORT, () => {
  console.log(`Application listening to port ${PORT} `);
});

// at this junction start using nodemon. nodemon index.js

// step 8: installing .env.
// npm install dotenv
