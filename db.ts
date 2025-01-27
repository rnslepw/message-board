const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

const findById = async (id) => {
  return messages.find((m) => m.id === Number(id));
};

module.exports = { messages, findById };
