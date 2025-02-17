const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config()


const app = (express())
app.use(express.json())
const taskRoutes = require("./routes/taskRoutes");


mongoose.connect(process.env.MONGODB)
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err))

app.use("/tasks", taskRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{

    console.log(`server listening on the port ${PORT}`)
})