import mongoose from 'mongoose';



const Quires = new mongoose.Schema({
    faculty:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"facultySchema"
    },
    student:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"userSchema"
    },
    text:{
        type:String
    },
    date:{
        type:Date
    },
    email:{
        type:String
    },
    username:{
        type:String
    }
       
      
})

const Event = mongoose.model('Quires', Quires);

export default Event;