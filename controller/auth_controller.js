const register = require('../model/startupSchema')
const messages = require('../model/contactSchema')
const home = async (req,res) => {
    res.end("hello from ecell");
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
        Requirements, phase } = req.body;
        const startUpExist = await register.findOne({ registrationNo });
        const startupExit2 = await register.findOne({email})
        if (startUpExist) {
            console.log(startUpExist);
            res.status(402).json({ msg: " registration number already exist" });
        } else if (startupExit2) {
            res.status(402).json({ msg: " email already exist" });            
        } else {
            const startupCreated = register.create({name,email,registrationNo,mobno,team,field,title,description,Requirements, phase});
            res.status(201).json({ startupCreated });
        }
        
    } catch (error) {
        console.log("error from registration",error)
        res.status(500).json({error})
    }
}
const messageSend = async (req, res) => {
    try {
        const {name, email, message }= req.body;
        const msgCreated = messages.create({ name, email, message });
        if (msgCreated) {
            res.status(201).json({ msgCreated });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}
module.exports = { home , startUpController, messageSend}