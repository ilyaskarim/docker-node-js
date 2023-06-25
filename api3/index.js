const port = process.env.PORT || 1400;
const express = require("express");
const app = express();
const Sequelize = require("sequelize");

const database = new Sequelize("test", "root", "pass", {
  host: "8cc35e462739",
  dialect: "mysql",
});

const Game = database.define("game", {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
});

const User = database.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

const UserGame = database.define("user_game", {
  userId: Sequelize.INTEGER,
  gameId: Sequelize.INTEGER,
});

database
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    // insert 20 users
    for (let i = 0; i < 20; i++) {
      User.create({
        name: `user${i}`,
        email: `email+${i}@gmail.com`
      });
    }
    // insert 20 games
    for (let i = 0; i < 20; i++) {
      Game.create({
        name: `game${i}`,
        description: `description${i}`
      });
    }
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// create a route for the app
app.get("/", (req, res) => {
  res.send(`Hello World! I am running on port ${port}!`);
});


app.get("/games", async (req, res) => {
  const games = await Game.findAll();
  res.json(games);
})

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
})

app.listen(port, () => console.log(`Server running on port ${port}!`));
