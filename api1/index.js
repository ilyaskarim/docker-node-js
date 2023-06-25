const port = process.env.PORT || 1200;
const express = require("express");
const app = express();

// create a route for the app
app.get("/", (req, res) => {
  res.send(
    `Hello World! I am running on port ${port} and admin name is ${process.env.adminName}!`
  );
});
app.listen(port, () => console.log(`Server running on port ${port}!`));
