const Joi = require('joi');

const divisionSchema = Joi.object({
    name:Joi.string().required(),
    totalRooms:Joi.number().min(1).required(),
    address:Joi.string().required().min(10)
});

module.exports = divisionSchema;