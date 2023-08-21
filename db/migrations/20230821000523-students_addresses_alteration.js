'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    //npx sequelize migration:generate --name students_addresses_alteration;
    // Tatget the table then the column to add. 

    await queryInterface.addColumn("student_addresses", "phone_number",{
      type: Sequelize.STRING,
      allowNull:false,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("student_addresses", "phone_number")
  }
};
