'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        type: Sequelize.STRING
        
      },
      Name: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      teacherId:{
         type: Sequelize.STRING,
         allowNull: false,
         references:{model:'Teachers', key:'id'},
         onDelete: "SET NULL",
         onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Courses');
  }
};