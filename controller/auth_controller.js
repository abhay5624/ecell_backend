const register = require('../model/startupSchema')
const home = async (req,res) => {
    res.json({msg: "hello from ecell"});
}
const startUpController = async (req, res) => {
    try {
        const { name,email,
        registrationNo,
        mobno,
        team,
        field,
        title,
        description,
        Requirements, phase} = req.body;
        const startupCreated = register.create({name,email,registrationNo,mobno,team,field,title,description,Requirements, phase});
        res.status(201).json({ startupCreated });
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
module.exports = { home , startUpController}