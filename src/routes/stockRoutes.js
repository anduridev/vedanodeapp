const stockRoute = require('express').Router();
const stockController = require('../controllers/stockController');

stockRoute.post("/",stockController.createStockItem);
stockRoute.get("/",stockController.getStockItems)








module.exports = stockRoute;