var express = require('express');
var api = require('../controllers/userController')
var jwt = require('../helper/jwt_validation')
var passport = require('passport')
var router = express.Router();

router.post('/signup', api.signUp) // daftar
router.post('/signin', passport.authenticate('local', { session:false}) , function (req,res){
  var user = req.user
  res.send(user)
})

router.get('/users', jwt.verifyAdmin, api.getAllUser) //
router.get('/users/:id', jwt.verifyLogin, api.getSingleUser) //
router.post('/users', jwt.verifyAdmin, api.createUser) //
router.delete('/users/:id', jwt.verifyAdmin, api.deleteUser) //
router.put('/users/:id', jwt.verifyLogin, api.updateUser)

module.exports = router