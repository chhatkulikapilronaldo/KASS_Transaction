'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        allowNull:false,
        type:Sequelize.STRING
      },
      FullName: {
        allowNull:false,
        type: Sequelize.STRING
      },
      DOB:{
        allowNull:false,
        type:Sequelize.DATE
      },
     Address:{
      allowNull:false,
      type:Sequelize.STRING
     },
      Email: {
        allowNull:false,
        type: Sequelize.STRING
      },
      PhoneNumber:{
        allowNull:false,
        type: Sequelize.BIGINT
      },
      CitizenShip_No:{
        allowNull:false,
        type:Sequelize.STRING
      },
      Password:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      Confirm_Password:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      Account_Number:{
          allowNull:false,
          type:Sequelize.BIGINT
      },
      is_delete:{
        defaultValue: 0,
        type: Sequelize.TINYINT
      },
      date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      createdAt: {
       
        type: Sequelize.BIGINT(50)
      },
      updatedAt: {
      
        type: Sequelize.BIGINT(50)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};