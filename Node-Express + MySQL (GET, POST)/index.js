const express = require("express");
const app = express();
const path = require('path');

const db = require('./db'),
userRoutes = require('./controllers/user_controller')

app.use('/api/users', userRoutes)

db.query("SELECT 1")
 .then(() => {
    console.log('db connection succeeded.');
    app.listen(3001);
    console.log("3001 is the port")
 })
 .catch(err => console.log("failed\n"+err))

