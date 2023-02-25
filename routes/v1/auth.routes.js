const express = require("express");
const validate = require("../../middlewares/validation");
const validation = require("../../validations/auth.validation");
const authController = require("../../controllers/auth.controller");

const router = express.Router();

router.post("/signup", validate(validation.signup), authController.signup);
router.post("/signin", validate(validation.signup), authController.signin);

module.exports = router;
