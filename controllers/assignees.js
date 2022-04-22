const assignees = require("../models").assignees;

module.exports = {
  async addAssign(req, res) {
    await assignees
      .create({
        name: req.body.name,
        email: req.body.email,
        task_id: req.body.task_id,
      })
      .then((assign) =>
        res.status(200).send({
          meassge: "Assignee Saved",
        })
      )
      .catch((error) => res.status(400).send(error));
  },
  async fetchAssignees(req, res) {
    await assignees
      .findAll({})
      .then((assign) => res.status(200).send(assign))
      .catch((error) => res.status(400).send(error));
  },
};
