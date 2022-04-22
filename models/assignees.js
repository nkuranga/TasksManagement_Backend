"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class assignees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      assignees.belongsTo(models.tasks, {
        foreignKey: "task_id",
        as: "assignee",
      });
    }
  }
  assignees.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      task_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "assignees",
    }
  );
  return assignees;
};
