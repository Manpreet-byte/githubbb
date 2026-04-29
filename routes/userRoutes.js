const express=require('express')
const router=express.Router()
const mongoose = require("mongoose");
const User= require("../models/User")

router.post("/",async(req,res)=>{
    try{
        const user=new User(req.body)
        await user.save()
        res.send(user)

    }
    catch (err) {
    res.status(400).send({ error: err.message });
  }
})


router.get("/",async(req,res)=>{
    try{
        const users=await User.find()
        res.send(users)
        console.log(users)
    }
    catch(err){
        res.status(500).send({ error: err.message });
    }
})


router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid user id" });
    }

    const user = await User.findById(id);
    if (!user) return res.status(404).send({ error: "User not found" });

    res.send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


router.put("/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true 
        })
        if(!user) return res.status(404).send({error:"User not found"})
        res.send(user)

    }
    catch (err) {
    res.status(400).send({ error: err.message });
    }

})
router.delete("/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).send({error:"User not found"})
            res.send({message:"User deleted successfully"})
    }
    catch (err) {
    res.status(400).send({ error: err.message });
    }
})


module.exports = router;
