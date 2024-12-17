import mongoose from "mongoose";

const problem = new mongoose.Schema({
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

const Problems = mongoose.model('problem',problem );

export default Problems;