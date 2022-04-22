"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tasks.hasMany(models.assignees, {
        foreignKey: "task_id",
        as: "assignee",
      });
      tasks.belongsTo(models.projects, {
        foreignKey: "project_id",
        as: "project",
      });
    }
  }
  tasks.init(
    {
      name: DataTypes.STRING,
      startdate: DataTypes.DATE,
      enddate: DataTypes.DATE,
      assignees: DataTypes.STRING,
      projects: DataTypes.STRING,
      description: DataTypes.STRING,
      priority: DataTypes.STRING,
      project_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tasks",
    }
  );
  return tasks;
};
