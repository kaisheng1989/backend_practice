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

// Importing the router and Controller - D34
// it is capitalise here because it is a class. - This apply to the require portion.
// Example of Setting up router and controller Line
/*__________________________________________________________________ */

const UserController = require("./Controllers/UserController");
const UserRouter = require("./Routers/UserRouter");

/*__________________________________________________________________ */
// Note below is carmel case.
const userController = new UserController();

// Below is passed in as a dependency
const userRouter = new UserRouter(userController, express);

/*__________________________________________________________________ */

// Step 7: Create ausers object to see the get request for /users
/*
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
*/

// Together with step 12 (middleware) - Look at Step 11
// application level middle ware - All request will got through these
app.use(cors());
// Step 13: from step 11
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setting up next()
//route level middleware/route handlers
/*__________________________________________________________________ */

app.get("/", (req, res, next) => {
  console.log(req);
  next();
});

app.post("/users", (req, res, next) => {
  console.log(req.body);
  next();
});

// step 6: after filling in index.js get up a get request.
// Testing route to verify if the app run.
app.get("/", (request, response) => {
  // console.log('request',request)
  // console.log('response', response)
  response.send("Hello World");
  // difference between response.send and response.json
  response.json({ message: "hello world" });
  // it is done in  a JSON format.
  //
});

/*__________________________________________________________________ */
// Setting up router and controller. D34
/*__________________________________________________________________ */
// Forming the prefix for all route coming from user router.  .route because user route return route.
app.use("/users", userRouter.route());

/*__________________________________________________________________ */
/*
// Users Routes - Can collate to a single route sheet for users
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

// Step 13 : getting the a single user
app.get("/users/:name", (req, res) => {
  let user = users.filter((x) => x.name === req.params.name);
  console.log(user);
  res.json({ message: "success", data: user });
});

//Step 14:  Getting just the user name
app.get("/usernames", (req, res) => {
  let names = users.map((user) => user.name);
  res.json({ data: names, message: "Success" });
});
*/
/*__________________________________________________________________ */
// Error handling route.
app.get("*", (req, res) => {
  res.send("Error");
});

// To get the response: http://localhost:8080/users
app.listen(PORT, () => {
  console.log(`Application listening to port ${PORT} `);
});

// at this junction start using nodemon. nodemon index.js

// step 8: installing .env.
// npm install dotenv

// router is like a path.
// controller is the fucntion of what to do.
