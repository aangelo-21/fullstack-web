const router = require("express").Router();

const {
  getAllFavourites,
  getOneFavourite,
  createFavourite,
  updateFavourite,
  deleteFavourite,
} = require("../controllers/favourite.controller.js");

router.get("/", getAllFavourites);
router.get("/:id", getOneFavourite);
router.post("/", createFavourite);
router.put("/:id", updateFavourite);
router.delete("/:id", deleteFavourite);

module.exports = router;
