const Joi = require('joi');

const createRentalSchema = Joi.object({
    car: Joi.string().required(),
    customer: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required()
});

module.exports = { createRentalSchema };