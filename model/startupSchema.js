const mongoose = require('mongoose');
const Bcryptjs = require('bcryptjs')
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
    },
    phase: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});
startUp.pre('save', async function (next) {
    const user = this;

    if(!user.isModified("password")){
        next();
    }
    try {
        console.log(user)
        console.log("from registraion", user.password);
        const saltRound = await Bcryptjs.genSalt(10);
        const hash_password = await Bcryptjs.hash(user.password,saltRound)
        user.password= hash_password;
    }catch (error){
        next(error);
    }
})
startUp.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d"
        })
    } catch (error) {
        console.log("from Token: ",error);
    }
}
const Register = new mongoose.model("startUp",startUp);
module.exports = Register;