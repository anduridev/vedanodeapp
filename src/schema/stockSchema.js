const Joi = require('joi');

const stockSchema = Joi.object({
    name:Joi.string().required(),
    quantity:Joi.number().required().min(1),
    price:Joi.number().required(),
    dateOfPurchase:Joi.date().required()
});

module.exports = stockSchema;