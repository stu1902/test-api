const express = require("express");
const router = express.Router();
const dummyData = [{
    "name": "Stu Thomas",
    "age": 46,
    "description": "Developer"
  },
  {
    "name": "Someone",
    "age": 25,
    "description": "Frontend Developer"
  },
  {
    "name": "Another",
    "age": 24,
    "description": "Backend Developer"
  }
];
router.get("/", (req, res) => {
  res.json(dummyData);
});
router.get("/:user_id", (req, res) => {
  const user_id = req.params.user_id;
if (dummyData.length <= user_id) return res.json({ message: "User not found" });
  res.json(dummyData[user_id]);
});
module.exports = router;