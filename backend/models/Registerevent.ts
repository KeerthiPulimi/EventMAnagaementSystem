import mongoose, { Schema } from 'mongoose';

const RegisterSchema = new Schema({
    student: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "userSchema"
    },
    event: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Event"
    },
    name: { type: String },
    email: { type: String }, // No unique constraint here
    mobileNumber: { type: String },
    collegename: { type: String },
    department: { type: String },
    roll_number: { type: String },
    section: { type: String }
});

const Registerevent = mongoose.model('Registerevent', RegisterSchema);

export default Registerevent;
