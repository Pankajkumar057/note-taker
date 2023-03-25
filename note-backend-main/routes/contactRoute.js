const NotesModel = require('../models/contacts/contactModel')
const jwt = require('jsonwebtoken')
const router = require('express').Router();
const app = express();
router.post("/posts", async (req, res) => {
  try {
    // const url = result.secure_url;
    const { title, description, } = req.body;
    const Posts = await NotesModel.create({
      title: title,
      description: description,
    })
    res.json({ status: "ok", Posts })
  } catch (e) {
    res.status(400).json({
      status: "Failed to post",
      message: e.message,
    });
  }
});

router.delete('/delete', async (req, res) => {
  try {
    let delIds = req.headers['ids'].split(',');
    console.log(delIds);
    let deleted = await contactModel.deleteMany({ _id: { $in: delIds } });
    console.log(deleted.deletedCount);
    res.status(200).send({ status: "Success" })
  } catch (e) {
    res.status(500).send({ status: "Failed", error: e })
  }
})

module.exports = router;