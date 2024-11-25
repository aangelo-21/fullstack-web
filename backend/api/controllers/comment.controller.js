const Comment = require("../models/comment.model.js");

async function getAllComments(req, res) {
  try {
    const users = await Comment.findAll({ where: req.query });
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(404).send("> No comments found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneComment(req, res) {
  try {
    const user = await Comment.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("> Comment not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createComment(req, res) {
  try {
    const user = await Comment.create(req.body);
    return res.status(200).json({ message: "> Comment created", user: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateComment(req, res) {
  try {
    const [userExist, user] = await Comment.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "> Comment updated", user: user });
    } else {
      return res.status(404).send("> Comment not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteComment(req, res) {
  try {
    const user = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("> Comment deleted");
    } else {
      return res.status(404).send("> Commet not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
};
