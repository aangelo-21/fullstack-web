const router = require("express").Router();

const {
  getAllTrainerCards,
  getOneTrainerCard,
  createTrainerCard,
  updateTrainerCard,
  deleteTrainerCard,
} = require("../controllers/trainerCard.controller.js");

router.get("/", getAllTrainerCards);
router.get("/:id", getOneTrainerCard);
router.post("/", createTrainerCard);
router.put("/:id", updateTrainerCard);
router.delete("/:id", deleteTrainerCard);

module.exports = router;
