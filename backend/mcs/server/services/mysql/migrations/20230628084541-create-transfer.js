'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transfers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Sender_Account:{
        allowNull: false,
        type:Sequelize.BIGINT
      },
      Receiver_Account:{
        allowNull: false,
        type:Sequelize.BIGINT
      },
      Amount:{
        allowNull:false,
        type:Sequelize.BIGINT
      },
    Remarks:{
      allowNull:false,
      type:Sequelize.STRING
    },
    date: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transfers');
  }
};