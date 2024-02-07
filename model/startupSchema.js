const mongoose = require('mongoose');

const startUp = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    registrationNo: {
        type: String,
        require: true,
        unique: true
    },
    mobno: {
        type: Number,
        require: true
    },
    team: {
        type: Number,
        require: true,
    },
    field: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    Requirements: {
        type: String,
        require: true,
    }, phase: {
        type: String,
        require: true,
    }
});
const Register = new mongoose.model("startUp",startUp);
module.exports = Register;