const router = require("express").Router();

const {
  getAllCombats,
  getOneCombat,
  createCombat,
  updateCombat,
  deleteCombat,
} = require("../controllers/combat.controller.js");

router.get("/", getAllCombats);
router.get("/:id", getOneCombat);
router.post("/", createCombat);
router.put("/:id", updateCombat);
router.delete("/:id", deleteCombat);

module.exports = router;
