const tasks = require("../models").tasks;

module.exports = {
  async addTask(req, res) {
    await tasks
      .create({
        name: req.body.name,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        assignees: req.body.assignees,
        projects: req.body.projects,
        description: req.body.description,
        priority: req.body.priority,
        // selectedFile: req.file.selectedFile,
      })
      .then((prject) =>
        res.status(200).send({
          message: "Task Added",
        })
      )
      .catch((error) => res.status(400).send(error.message));
  },
  async fetchTask(req, res) {
    await tasks
      .findAll({})
      .then((task) => res.status(200).send(task))
      .catch((error) => res.status(400).send(error));
  },
};
