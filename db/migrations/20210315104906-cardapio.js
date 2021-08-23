"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("cardapios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      produto: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      preco: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      categoria: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      imagem: {
        type: Sequelize.TEXT,
      },
      imagem_destaque: {
        type: Sequelize.TEXT,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("cardapios");
  },
};
