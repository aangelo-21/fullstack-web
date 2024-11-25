const router = require("express").Router();

const {
  getAllTournaments,
  getOneTournament,
  createTournament,
  updateTournament,
  deleteTournament,
} = require("../controllers/tournament.controller.js");

router.get("/", getAllTournaments);
router.get("/:id", getOneTournament);
router.post("/", createTournament);
router.put("/:id", updateTournament);
router.delete("/:id", deleteTournament);

module.exports = router;
