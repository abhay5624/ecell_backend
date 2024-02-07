const express = require("express")
const router = express.Router();
const auth_controller = require("../controller/auth_controller")
router.route('/').post(auth_controller.home);
router.route('/startregistration').post(auth_controller.startUpController)
router.route('/contactus').post(auth_controller.messageSend);
module.exports = router;