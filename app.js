"use strict"

const express = require('express')
var users = require('./routes/users');
var passport = require('passport')
var Strategy = require('passport-local').Strategy
var app = express()
var bodyParser = require('body-parser');
var api = require('./controllers/userController')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use(new Strategy(api.signIn))



app.use(passport.initialize());
// app.use('/', passport.authenticate('local', { session:false}) , function (req,res){
//   var user = req.users
//   user.send(user)
// })


app.use('/api', users);


app.listen(3000)
module.exports = app;