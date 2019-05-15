const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model')

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.addUser(user)
    .then(added => {
      res.status(201).json(added)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router;