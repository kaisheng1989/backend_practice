// Copy from mvc page under schedule and modify accordingly.
//  Try to follow column name
// there should be a reference. since addresses have a reference to student id.
"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Students_Addresses extends Model {}
  Students_Addresses.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
      student_id:{
        type:DataTypes.INTEGER,
        references:{
          model:'students',
          key:'id'
        }
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
      modelName: "students_addresses",
      underscored: true,
      timestamps: false,
    }
  );
  return Students_Addresses;
};
