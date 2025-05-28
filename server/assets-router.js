const express = require("express");
const router = express.Router();

const imageRegex = /\/.+\.(svg|png|jpg|jpeg)$/;
const videoRegex = /\/.+\.(mp4|ogv)$/;

router.get(imageRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

router.get(videoRegex, (req, res) => {
  const filePath = req.path;
  res.redirect(303, `http://localhost:3000/src${filePath}`);
});

module.exports = router;
// this router handles requests for images and videos, redirecting them to the appropriate path on the server.