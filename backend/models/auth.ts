
const mongoose = require('mongoose');






const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    name: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    Avatar: {
        type: String
    },
    verificationCode: { type: String },
});

const User = mongoose.model('userSchema', userSchema);

module.exports = User;
