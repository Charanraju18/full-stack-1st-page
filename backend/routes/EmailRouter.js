const express = require('express')
const router = express.Router()
const emailController = require("../Controllers/EmailController")
router.post("/NodeMailer",emailController.mailSender)
module.exports = router;