const express = require("express");
const usersRouter = express.Router();
const models = require("./../Models");
const telegramBot = require("../modules/telegramBot");

usersRouter.get("/", (request, response) => {
    models.User.find({}, (err, results) => {
        if (err) return console.log(err);
        response.send(results);
    });
});

usersRouter.post("/sendMessage", (request, response) => {
    const {chatId, message} = request.body;

    telegramBot.sendMessage(chatId, message);

    response.status(200).send("message sent");
});

module.exports = usersRouter;