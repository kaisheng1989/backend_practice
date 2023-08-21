"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // Note to follow the column and poistion of the column set in migration
    // Follow the same name in migration. 
    // Amending Seeder files are okay. Not to amend Migration files midway.
    await queryInterface.bulkInsert("student_addresses", [
      {
        address: "45 Island Ave",
        student_id: 1,
        phone_number: "9999999999",
      },
      {
        address: "CWB 55 Victoria Road",
        student_id: 2,
        phone_number: "129859285",
      },
      {
        address: "Novena Near the TB outpatient",
        student_id: 3,
        phone_number:"9813598135",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("student_addresses", null, {})
  },
};
