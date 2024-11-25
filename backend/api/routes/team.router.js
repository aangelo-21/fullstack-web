const router = require("express").Router();

const {
  getAllTeams,
  getOneTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/team.controller.js");

router.get("/", getAllTeams);
router.get("/:id", getOneTeam);
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

module.exports = router;
