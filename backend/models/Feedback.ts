
import mongoose from 'mongoose'

const Feedback = new mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"userSchema"
    },
    event:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Event"
    },
    feedback:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:Date
    }
   
});

const Feedbacks = mongoose.model('Feedback', Feedback);

module.exports = Feedbacks;
