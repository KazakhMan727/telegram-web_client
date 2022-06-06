const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const usersRouter = require("./routers/usersRouter");
require("./modules/telegramBot");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/users", usersRouter);

const CONNECTION_STRING = "mongodb+srv://KazakhMan:maha101107@cluster0.zhxop.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, (err) => {
    if (err) return console.log("connection error");
    app.listen(8080);
});