const db = require('../data/dbConfig');

module.exports = {
  addUser,
  find,
  findBy,
  findById
}

function find() {
  return db('users').select('id', 'username', 'password', 'department')
}

function findBy(filter) {
  return db('users').where(filter)
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'department')
    .where({ id })
    .first()
}

async function addUser(user) {
  const [id] = await db('users').insert(user)
  return findById(id)
}
