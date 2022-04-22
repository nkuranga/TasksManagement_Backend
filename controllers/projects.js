const projects = require("../models").projects;

module.exports = {
  async addProject(req, res) {
    await projects
      .create({
        projectName: req.body.projectName,
        assignee: req.body.assignee,
      })
      .then((prject) =>
        res.status(200).send({
          message: "Project Added",
        })
      )
      .catch((error) => res.status(400).send(error.message));
  },
  async fetchProject(req, res) {
    await projects
      .findAll({})
      .then((project) => res.status(200).send(project))
      .catch((error) => res.status(400).send(error));
  },
};
