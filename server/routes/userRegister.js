const express = require('express');
const {registerController, authController }= require('../controller/userRoutes');
const protect = require('../middleware/authMiddleware');

router = express.Router();


router.post('/register', registerController )
router.post('/get-user',protect, authController)

module.exports = router;