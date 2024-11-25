const Combat = require("../models/combat.model.js");

async function getAllCombats(req, res) {
  try {
    const combats = await Combat.findAll({ where: req.query });
    if (combats) {
      return res.status(200).json(combats);
    } else {
      return res.status(404).send("> No combats found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneCombat(req, res) {
  try {
    const combat = await Combat.findByPk(req.params.id);
    if (combat) {
      return res.status(200).json(combat);
    } else {
      return res.status(404).send("> Combat not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createCombat(req, res) {
  try {
    const combat = await Combat.create(req.body);
    return res
      .status(200)
      .json({ message: "> Combat created", combat: combat });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateCombat(req, res) {
  try {
    const [combatExist, combat] = await Combat.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (combatExist !== 0) {
      return res
        .status(200)
        .json({ message: "> Combat updated", combat: combat });
    } else {
      return res.status(404).send("> Combat not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteCombat(req, res) {
  try {
    const combat = await Combat.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (combat) {
      return res.status(200).json("> Combat deleted");
    } else {
      return res.status(404).send("> Combat not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllCombats,
  getOneCombat,
  createCombat,
  updateCombat,
  deleteCombat,
};
