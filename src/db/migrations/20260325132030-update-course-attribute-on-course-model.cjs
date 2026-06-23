'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint
    ('Courses', {
      fields:['id'],
      type:'primary key',
      name:'courses_primary_key'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Courses','courses_primary_key')
}
};
