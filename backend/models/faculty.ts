
import mongoose from 'mongoose'

const facultySchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    name: { type: String, required: true },
    Avathar: {
        type: String
    },
    college:{
        type:String
    },
    department:{
        type:String
    },
    verificationCode: { type: String },
    isVerified: { type: Boolean, default: false },
    // verificationCode: { type: String },
});

const faculty = mongoose.model('facultySchema', facultySchema);

module.exports = faculty;
