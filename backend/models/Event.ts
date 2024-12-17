import mongoose from 'mongoose';



const Events = new mongoose.Schema({
    faculty:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"facultySchema"
    },
        title: { type: String, required: true },
        from_date: { type: Date, required: true }, // Consider using Date type if you're storing dates
        to_date: { type: Date, required: true }, // Consider using Date type if you're storing dates
        start_time: { type: String, required: true },
        end_time: { type: String, required: true },
        participants: { type: String, required: true },
        strength: { type: Number, required: true }, // Updated to Number
        pic: [{ type: String }], // Updated to array of Strings
        amount: { type: Number, required: false }, // Updated to Number
        year:{type:String},
        others:{type:String},
        department:{
            type:String
        },
        clubs:{
            type:String
        },
        organized:{
            type:String
        },
        description:{
            type:String
        },
        location:{
            type:String
        },
        registered:{
            type:Number,
            default:0
        }
      
})

const Event = mongoose.model('Events', Events);

export default Event;