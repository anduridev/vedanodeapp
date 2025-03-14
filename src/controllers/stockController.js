const prisma = require("../models/prisma");
const stockSchema = require("../schema/stockSchema");


async function createStockItem(req, res) {
    const data = req.body;
    try {
        const validate = stockSchema.validate(data);
        if (validate.error) {
            res.status(400).send(validate.error.details[0].message)
        } else {
            const  result= await prisma.stock.create({ data: data });
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
async function getStockItems(req,res) {
    try{
       const items = await prisma.stock.findMany();
       res.status(200).send(items);
    }catch(error){
        res.status(500).send(error)
    }
}


module.exports = { createStockItem,getStockItems }