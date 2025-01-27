const { Router } = require("express");
const indexRouter = Router();

const {
  getMessages,
  createNewMessage,
  getMessageById,
} = require("../controllers/messageController.ts");

// Index routes
indexRouter.get("/", getMessages);
indexRouter.get("/message/:id", getMessageById);
// New routes
indexRouter.get("/new", (req, res) => res.render("new"));
indexRouter.post("/new", createNewMessage);
// Error routes
indexRouter.get("*", (req, res) => res.render("404"));

module.exports = indexRouter;
