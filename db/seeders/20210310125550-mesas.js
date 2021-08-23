"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "mesas",
      [
        {
          numero: 1,
          qtd_cadeiras: 1,
          ambiente: "Bar",
        },
        {
          numero: 2,
          qtd_cadeiras: 1,
          ambiente: "Bar",
        },
        {
          numero: 3,
          qtd_cadeiras: 1,
          ambiente: "Bar",
        },
        {
          numero: 4,
          qtd_cadeiras: 1,
          ambiente: "Bar",
        },
        {
          numero: 5,
          qtd_cadeiras: 1,
          ambiente: "Bar",
        },
        {
          numero: 6,
          qtd_cadeiras: 4,
          ambiente: "Salão Principal",
        },
        {
          numero: 7,
          qtd_cadeiras: 4,
          ambiente: "Salão Principal",
        },
        {
          numero: 8,
          qtd_cadeiras: 4,
          ambiente: "Salão Principal",
        },
        {
          numero: 9,
          qtd_cadeiras: 4,
          ambiente: "Salão Principal",
        },
        {
          numero: 10,
          qtd_cadeiras: 8,
          ambiente: "Salão Principal",
        },
        {
          numero: 11,
          qtd_cadeiras: 8,
          ambiente: "Salão Principal",
        },
        {
          numero: 12,
          qtd_cadeiras: 6,
          ambiente: "Ambiente Externo",
        },
        {
          numero: 13,
          qtd_cadeiras: 6,
          ambiente: "Ambiente Externo",
        },
        {
          numero: 14,
          qtd_cadeiras: 4,
          ambiente: "Ambiente Externo",
        },
        {
          numero: 15,
          qtd_cadeiras: 4,
          ambiente: "Ambiente Externo",
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("mesas", null, {});
  },
};
