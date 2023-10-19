const express = require("express");
const path = require("node:path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "..", "out/")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "out", "index.html"));
});

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
