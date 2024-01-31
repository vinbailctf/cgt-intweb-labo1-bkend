import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const classes = ["warrior", "mage", "ranger"];

app.get("/newClass", (req, res) => {
  const index = Math.floor(Math.random() * Math.floor(3));
  console.log(index);
  const yourNewClass = classes[index];
  res.send(yourNewClass);
});

app.listen(3001);
console.log("backend started");
