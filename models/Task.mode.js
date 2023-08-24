const {model, Schema } = require('mongoose')
const taskSchema= new Schema ({
    title: String,
    description: String,
    deadline:Number,
    priority:Number,
    overallStatus:{
        type:String,
        enum:['termianda','rechazada']
    },
    subTasks:[{type: Schema.Types.ObjectId,ref:"SubTask"}]
})

module.exports=model("Task",taskSchema)