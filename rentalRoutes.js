const express = require('express');
const router = express.Router();
const rentalcontroller = require('../controllers/rentalController');
const validate = require('../middleware/validate');
const { createRentalSchema } = require('../validations/rentalValidation');

router.post('/', validate(createRentalSchema), rentalcontroller.createRental);
router.put('/:id/return', rentalController.returnCar);

module.exports = router;