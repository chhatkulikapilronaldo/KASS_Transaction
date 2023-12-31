/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("login_infos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid:{
        allowNull:false,
        type:Sequelize.STRING
      },
      PhoneNumber: {
        allowNull: false,
        type: Sequelize.BIGINT,
      },
      Password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      Token:{
        type: Sequelize.STRING
      },
      date: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("login_infos");
  },
};