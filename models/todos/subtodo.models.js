import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },

    completed : {
        type : Boolean,
        default : false
    },

    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' // this is the name of some model exported 
    }
}, {timestamps : true})

export const SubTodo = mongoose.model("SubTodo", subTodoSchema)