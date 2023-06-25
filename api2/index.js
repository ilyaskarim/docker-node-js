const port = process.env.PORT || 1300;
const express = require("express");
const app = express();
const axios = require("axios")

// create a route for the app
app.get("/", (req, res) => {
  res.send(`Hello World! I am running on port ${port}!`);
});

app.get("/games-from-api3" , async (req, res) => {
  const data = await axios.get("http://api3:1400/games");
  res.json(data.data);
})

app.listen(port, () => console.log(`Server running on port ${port}!`));
