const Team = require("../models/team.model.js");

async function getAllTeams(req, res) {
  try {
    const teams = await Team.findAll({ where: req.query });
    if (teams) {
      return res.status(200).json(teams);
    } else {
      return res.status(404).send("> No teams found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneTeam(req, res) {
  try {
    const team = await Team.findByPk(req.params.id);
    if (team) {
      return res.status(200).json(team);
    } else {
      return res.status(404).send("> Team not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createTeam(req, res) {
  try {
    const team = await Team.create(req.body);
    return res.status(200).json({ message: "> Team created", team: team });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateTeam(req, res) {
  try {
    const [teamExist, team] = await Team.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (teamExist !== 0) {
      return res.status(200).json({ message: "> Team updated", team: team });
    } else {
      return res.status(404).send("> Team not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteTeam(req, res) {
  try {
    const team = await Team.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (team) {
      return res.status(200).json("> Team deleted");
    } else {
      return res.status(404).send("> Team not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllTeams,
  getOneTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
