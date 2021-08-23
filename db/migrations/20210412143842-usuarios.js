'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable("usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tipo: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      senha: {
        allowNull:false,
        type: Sequelize.TEXT

      },
    });
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("usuarios");
  }
};
