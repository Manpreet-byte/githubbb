const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
mongoose.connect("mongodb+srv://manpreet24_:Manpreet098@cluster0.hm6o1n7.mongodb.net/")
 .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const userRoutes=require("./routes/userRoutes")
app.use("/users",userRoutes)

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})
