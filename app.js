const express = require('express');
const app = express();

const PORT = 3000;
// Create Middleware
const mid = (req, res, next) => {
    console.log('Mid');
    if(true) return res.status(401).send('Mid');

    next();
}
// We can create Middleware for specific Routes

app.get('/', mid, (req, res) => {
    console.log('Request');
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Server up and running, PORT: ${PORT}`);
})