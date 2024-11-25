const router = require("express").Router();
const { checkAuth, checkAdmin } = require("../middleware/index.js");


const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

router.get("/", getAllUsers);
router.get("/:id", checkAuth, checkAdmin, getOneUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);




module.exports = router;
