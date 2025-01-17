'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'account', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('Users', 'cover', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "https://i.imgur.com/yLZPe7q.jpg"
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'account')
    await queryInterface.removeColumn('Users', 'cover')
  }
}
