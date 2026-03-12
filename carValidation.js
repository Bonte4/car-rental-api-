const Joi = require('joi');

const createCarSchema = Joi.objct({
    brand: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number().min(1990).required(),
    available: Joi.boolean().optional()
});

module.exports = { createCarSchema };