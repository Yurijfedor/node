const express = require("express");
const app = express();

const PORT = 3000;

app.use("/home", (reg, res, next) => {
  res.send("middleware request");
  next();
});

app.get("/home", (reg, res) => {
  res.send("get request");
});

app.post("/home", (reg, res) => {
  res.send("post request");
});

app.delete("/home", (reg, res) => {
  res.send("delete request");
});

app.listen(PORT, (err) => {
  if (err) console.error("Error at server launch", err);
  console.log(`server works at port ${PORT}`);
});
