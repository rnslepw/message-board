const { messages, findById } = require("../db.ts");

const getMessages = async (req, res) => {
  res.render("index", { messages: messages });
};

const getMessageById = async (req, res) => {
  const { id } = req.params;
  const currentMessage = await findById(id);
  res.render("message", { message: currentMessage });
};

const createNewMessage = async (req, res) => {
  messages.push({ ...req.body, added: new Date(), id: messages.length + 1 });
  res.redirect("/");
};

module.exports = { getMessages, createNewMessage, getMessageById };
