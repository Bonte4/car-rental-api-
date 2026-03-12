const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const validate = require('../middleware/validate');
const { createCustomerSchema } = require('../validations/customerValidation');

router.get('/', customerController.getAllCustomers);
router.post('/', validate(createCustomerSchema), customerController.createCustomer);

module.exports = router;