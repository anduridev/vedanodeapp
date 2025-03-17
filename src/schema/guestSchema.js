const Joi = require('joi');
// Joi schema for validation
const guestSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    dob: Joi.date().optional(),
    gender: Joi.string().optional(),
    aadharNumber: Joi.string().optional(),
    fee: Joi.number().optional(),
    joiningDate: Joi.date().optional(),
    roomNo: Joi.number().optional(),
    building: Joi.string().optional(),
    sharingType: Joi.string().optional(),
    paymentMode: Joi.string().valid('MONTHLY', 'WEEKLY', 'DAILY').required(),
    phoneNumber: Joi.string().optional(),
    divisionId:Joi.string(),
});

module.exports = guestSchema;