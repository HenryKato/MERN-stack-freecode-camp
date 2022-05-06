const mongoose = require('mongoose');

const Schema = mongoose.Schema; // get the constructor for object schemas

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
},{
    timestamps: true
});

// Create the User Entity or Object based on the userSchema
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;