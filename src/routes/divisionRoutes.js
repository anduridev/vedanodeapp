const divisionRoute = require('express').Router();
const divisionController = require('../controllers/divisionController');

divisionRoute.post("/",divisionController.createDivision);
divisionRoute.get("/",divisionController.getDivisions)








module.exports = divisionRoute;