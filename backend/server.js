const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = 5000;

app.get("/", (req, res) =>
  res.send(`express server is running on port${port}!`)
);

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Example app listening on port  ${PORT}!`));
