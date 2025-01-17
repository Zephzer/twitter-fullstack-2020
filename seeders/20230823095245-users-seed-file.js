'use strict'

const bcrypt = require('bcrypt-nodejs')
const faker = require('faker')
const Users = [{
  email: 'root@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
      name: 'root',
      account: 'root',
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
}]
const numUsers =  5
for (let i = 1; i <= numUsers; i++) {
  const maxLength = 160
  const user = {
    email: `user${i}@example.com`,
    password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10)),
    name: `user${i}`,
    account: `user${i}`,
    role: 'user',
    introduction: faker.lorem.text().slice(0, maxLength),
    created_at: new Date(),
    updated_at: new Date()
  }
  Users.push(user)
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', Users, {})
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', {})
  }
}
