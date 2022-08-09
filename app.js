const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(port, () => console.log(`server runnning on port ${port}`));
