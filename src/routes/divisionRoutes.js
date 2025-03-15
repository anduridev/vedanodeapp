const divisionRoute = require('express').Router();
const divisionController = require('../controllers/divisionController');

divisionRoute.post("/", divisionController.createDivision);
divisionRoute.get("/", divisionController.getDivisions)
divisionRoute.get("/:id", divisionController.getDivision);

divisionRoute.delete("/:id", divisionController.deleteDivision);
divisionRoute.put("/:id", divisionController.updateDivision);





module.exports = divisionRoute;