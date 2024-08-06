const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user");
const Port = 8000;

app.use(express.json());
app.use(cors());

app.post("/Login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("not registered");
      }
    })
    .catch((err) => {
      console.error("Error during login:", err);
      res
        .status(500)
        .json({ error: "Internal server error", details: err.message });
    });
});

app.post("/Register", async (req, res) => {
  User.create(req.body)
    .then((user) => {
      if (user) {
        res.json("success");
      } else {
        res.json("not registered");
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

mongoose
  .connect("mongodb+srv://mahada:2oK7HXj9xTTdZOX8@cluster0.2becqoh.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
    app.listen(Port, () => {
      console.log("server started at port ", Port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
