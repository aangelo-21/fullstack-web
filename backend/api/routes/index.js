const router = require("express").Router();

router.use("/user", require("./user.router"));
router.use("/favourite", require("./favourite.router"));
router.use("/comment", require("./comment.router"));
router.use("/pokemonComment", require("./pokemonComment.router"));
router.use("/team", require("./team.router"));
router.use("/trainerCard", require("./trainerCard.router"));
router.use("/combat", require("./combat.router"));
router.use("/tournament", require("./tournament.router"));
router.use('/auth', require('./auth.router'))


module.exports = router;
