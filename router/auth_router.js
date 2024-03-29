const express = require("express")
const router = express.Router();
const auth_controller = require("../controller/auth_controller")
const registrationSchema = require("../validator/auth_validator")
const validate = require("../middleware/validator_middleware");
router.route('/').post(auth_controller.home);
router.route('/startregistration').post(validate(registrationSchema),auth_controller.startUpController)
router.route('/contactus').post(auth_controller.messageSend);
module.exports = router;