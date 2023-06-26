const express = require("express");
require("./conn.js");
const { default: mongoose } = require("mongoose");
var app = express();
const port = process.env.PORT || 3000;
const users = require("./schema1.js");
app.use(express.json());

app.get("/", async (req, res) => {
  let arr = await users.find({}).sort({ name:1 });
  res.send(arr);
});

app.post("/login", async (req, res) => {
  let obj = req.body;
  let new_user = new users(obj);
  console.log(req.body);
  try {
    let r = await new_user.save();

    //  let r= await users.deleteMany({})
    console.log(r);
    // 201 means created
    res.status(201).send("Done!!!");
  } catch (e) {
    //400 shows that bad request
    //if we will not use status code then
    // it will run fine becoz of catch and will show error with
    //code 200 OK
    res.status(400).send(e);
  }
});

app.delete("/delete", async (req, res) => {
  let result = await users.deleteOne(req.body);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
