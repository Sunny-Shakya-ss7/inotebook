const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  let obj = {
    name: "Sunny",
    age: 21,
  };
  res.json(obj);
});

module.exports = router;
