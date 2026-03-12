const express = require('require');
const router = express.Router();
const carController = require('../controllers/carController');
const validate = require('../midd;eware/validate');
const { createCarSchema } = require('../validations/carValidation');

router.get('/',carController.getAllCars);
router.post('/', validate(createCarSchema), carController.createCar);

module.exports = router;