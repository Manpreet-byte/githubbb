const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const PORT = process.env.PORT || 3000;

require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const userRoutes=require("./routes/userRoutes")
app.use("/users",userRoutes)


app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});