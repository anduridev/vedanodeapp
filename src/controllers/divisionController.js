const prisma = require("../models/prisma");
const divisionSchema = require("../schema/divisionSchema");


async function createDivision(req, res) {
    const data = req.body;
    try {
        const validate = divisionSchema.validate(data);
        if (validate.error) {
            res.status(400).send(validate.error.details[0].message)
        } else {
            const  result= await prisma.division.create({ data: data });
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
async function getDivisions(req,res) {
    try{
       const items = await prisma.division.findMany({include:{guests:true}});
       res.status(200).send(items);
    }catch(error){
        res.status(500).send(error)
    }
}


module.exports = { createDivision,getDivisions }