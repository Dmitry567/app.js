const express = require('express');
const router = express.Router();
const userService = require('../services/users')


// GET /users
router.get('/', (req, res) => {
    //console.log(req.query.name)// query params not modatore
    const users = userService.getUsers();
    res.status(200).send(users);
})

// router.get('/getName', (req, res) => {
//     console.log("Get name handler")// query params not modatore
//     res.status(200).send();
// })

// GET  /users/1
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = userService.getUser(id)

    if (!user) return res.status(404).send({ message: "User not found"});

    res.status(200).send(user);
})

// POST /users
router.post('/', (req, res) => {
    console.log(req.body);
    // if
    const newUser = userService.addNewUser(req.body)
    res.status(200).send(newUser)

})

module.exports = router;

// When we have routes with same structure the oder of putin them in code important like getName route staying
// on top of the get :id route because they have same structure.
// const newUser = {
//     ...req.body,
//     _id: String(Math.random())
// };
//
// users.push(newUser);