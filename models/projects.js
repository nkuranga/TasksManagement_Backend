"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      projects.hasMany(models.tasks, {
        foreignKey: "project_id",
        as: "project",
      });
    }
  }
  projects.init(
    {
      projectName: DataTypes.STRING,
      assignee: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "projects",
    }
  );
  return projects;
};
