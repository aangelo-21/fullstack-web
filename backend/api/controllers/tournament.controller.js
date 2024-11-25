const Tournament = require("../models/tournament.model.js");

async function getAllTournaments(req, res) {
  try {
    const tournaments = await Tournament.findAll({ where: req.query });
    if (tournaments) {
      return res.status(200).json(tournaments);
    } else {
      return res.status(404).send("> No Tournaments found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneTournament(req, res) {
  try {
    const tournament = await Tournament.findByPk(req.params.id);
    if (tournament) {
      return res.status(200).json(tournament);
    } else {
      return res.status(404).send("> Tournament not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createTournament(req, res) {
  try {
    const tournament = await Tournament.create(req.body);
    return res
      .status(200)
      .json({ message: "> Tournament created", tournament: tournament });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateTournament(req, res) {
  try {
    const [tournamentExist, tournament] = await Tournament.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (tournamentExist !== 0) {
      return res
        .status(200)
        .json({ message: "> Tournament updated", tournament: tournament });
    } else {
      return res.status(404).send("> Tournament not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteTournament(req, res) {
  try {
    const tournament = await Tournament.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (tournament) {
      return res.status(200).json("> Tournament deleted");
    } else {
      return res.status(404).send("> Tournament not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllTournaments,
  getOneTournament,
  createTournament,
  updateTournament,
  deleteTournament,
};
