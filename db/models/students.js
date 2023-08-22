// Copy from mvc page under schedule and modify accordingly.
//  Try to follow column name
"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {}
 //Students.hasMany('students_addresses')
  Students.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      current_course: {
        type: DataTypes.STRING,
      },
      // createdAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: new Date(),
      // },
      // updatedAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: new Date(),
      // },
    },
    {
      sequelize,
      modelName: "students",
      underscored: true,
      timestamps: false,
    }
  );
  return Students;
};