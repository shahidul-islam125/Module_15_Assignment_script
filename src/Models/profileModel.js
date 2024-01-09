const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
        // unique: true,
        // match: /^\S+@\S+\.\S+$/
      },
    phone: {
        type: String
        // unique: true,
        //Validation BD Mobile No
        // validate: {
        //     validator: function(value){
        //         //Regex validation
        //         return /^(\+8801|01)[3-9]\d{8}$/.test(value)
        //     },
        //     message: props => `${props.value} is not a valid number.`
        // }
    },
    admissionDate: {
        type: String,
        required: true
    },
    courses: {
        type: String
    }


}, {versionKey: false})


const profileModel = mongoose.model("profiles", dataSchema)

//export
module.exports = profileModel;


