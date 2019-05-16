const router = require('express').Router();
const bcrypt = require('bcryptjs');

const tokenService = require('./token-service');
const Users = require('../users/users-model')

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.addUser(user)
    .then(added => {
      const token = tokenService.generateToken(added);
      res.status(201).json({
        message: `Welcome ${added.username}!`, token
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenService.generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}, here's a token of my appreciation!`, token
        })
      } else {
        res.status(401).json({ message: 'Invalid credentials' })
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router;