const express = require('express');
const app = express();

const users = require('./routes/users');

const ROUTES = {
    users: '/users'
}

const PORT = 3000;
// express.json() middleware add body
app.use(express.json());
// Routes
app.use(ROUTES.users, users);



app.listen(PORT, () => {
    console.log(`Server up and running, PORT: ${PORT}`);
})



// Create Middleware
// const mid = (req, res, next) => {
//     console.log("Mid");
//     if(false) return res.status(401).send("Mid");
//
//     next();
//}// express.json it is Middleware inside Express framework
// This MIddleware automaticly parsing our json
// We can create Middleware for specific Routes
// We can have several Middleware