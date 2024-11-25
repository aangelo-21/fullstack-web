const TrainerCard = require("../models/trainerCard.model.js");

async function getAllTrainerCards(req, res) {
  try {
    const trainerCards = await TrainerCard.findAll({ where: req.query });
    if (trainerCards) {
      return res.status(200).json(trainerCards);
    } else {
      return res.status(404).send("> No TrainerCards found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneTrainerCard(req, res) {
  try {
    const trainerCard = await TrainerCard.findByPk(req.params.id);
    if (trainerCard) {
      return res.status(200).json(trainerCard);
    } else {
      return res.status(404).send("> TrainerCard not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createTrainerCard(req, res) {
  try {
    const trainerCard = await TrainerCard.create(req.body);
    return res
      .status(200)
      .json({ message: "> TrainerCard created", trainerCard: trainerCard });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateTrainerCard(req, res) {
  try {
    const [trainerCardExist, trainerCard] = await TrainerCard.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (trainerCardExist !== 0) {
      return res
        .status(200)
        .json({ message: "> TrainerCard updated", trainerCard: trainerCard });
    } else {
      return res.status(404).send("> TrainerCard not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteTrainerCard(req, res) {
  try {
    const trainerCard = await TrainerCard.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (trainerCard) {
      return res.status(200).json("> TrainerCard deleted");
    } else {
      return res.status(404).send("> TrainerCard not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllTrainerCards,
  getOneTrainerCard,
  createTrainerCard,
  updateTrainerCard,
  deleteTrainerCard,
};
