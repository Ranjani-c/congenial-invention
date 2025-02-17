const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title:{type:String , required:true},
    description:{type:String},
    status:{type:String , enum:["pending","Completed"] , default:"pending"},
    dueDate:Date
});
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;