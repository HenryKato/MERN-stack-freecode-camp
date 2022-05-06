const mongoose = require('mongoose');

const Schema = mongoose.Schema; // get the constructor for object schemas

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
},{
    timestamps: true
});

// Create the User Entity or Object based on the userSchema
const User = mongoose.model('User', userSchema);
module.exports = User;