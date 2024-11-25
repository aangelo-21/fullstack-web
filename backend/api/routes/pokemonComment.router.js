const router = require("express").Router();

const {
  getAllPokemonComments,
  getOnePokemonComment,
  createPokemonComment,
  updatePokemonComment,
  deletePokemonComment,
} = require("../controllers/pokemonComment.controller.js");

router.get("/", getAllPokemonComments);
router.get("/:id", getOnePokemonComment);
router.post("/", createPokemonComment);
router.put("/:id", updatePokemonComment);
router.delete("/:id", deletePokemonComment);

module.exports = router;
