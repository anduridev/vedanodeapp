const prisma = require("../models/prisma");
const divisionSchema = require("../schema/divisionSchema");


async function createDivision(req, res) {
    const data = req.body;
    try {
        const validate = divisionSchema.validate(data);
        if (validate.error) {
            res.status(400).send(validate.error.details[0].message)
        } else {
            const result = await prisma.division.create({ data: data });
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
async function getDivisions(req, res) {
    try {
        const items = await prisma.division.findMany({ include: { guests: true } });
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error)
    }
}
async function getDivision(req, res) {

    const id = req.params.id;
    try {
        const division = await prisma.division.findUnique({ where: { id: id } });
        if (division) {
            res.status(200).send(division)
        } else {
            res.status(400).send("Requested id not found")
        }
    } catch (error) {
        res.status(500).send(error)
    }

}
async function deleteDivision(req, res) {

    const id = req.params.id;
    try {
        const division = await prisma.division.delete({ where: { id: id } });
        if (division) {
            res.status(200).send("Divison Deleted")
        } else {
            res.status(400).send("Requested id not found")
        }
    } catch (error) {
        res.status(500).send(error)
    }

}
async function updateDivision(req, res) {

    const id =req.params.id;
    const data = req.body;
    try {
        const validate = divisionSchema.validate(data);
        if (validate.error) {
            res.status(400).send(validate.error.details[0].message)
        } else {
            const result = await prisma.division.update({where:{id:id}, data: data });
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
module.exports = { createDivision, getDivisions,getDivision,deleteDivision,updateDivision }