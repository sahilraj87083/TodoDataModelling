import mongoose from "mongoose";

const todSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },

    subTodod : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'SubTodo'
        }
    ] // arrays of subTodos
}, {timestamps : true})