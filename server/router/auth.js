const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

require("../db/conn");
const User = require("../model/userSchema");
const { cloudinary } = require("../utils/cloudinary");

/* router.get("/", (req,res) =>{
    res.send(`Hello world from the server router js`);
}); */

// Using promises
/* router.post("/register", (req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error: " please fill up the fields properly" })
    }

    User.findOne({email: email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({ error: "email already exists"});
        }
        const user = new User({name, email, phone, work, password, cpassword});
        user.save().then(()=>{
            res.status(201).json({ message: "user registered successfully"});
        }).catch((err)=> res.status(500).json({error: "failed to register"}));
    }).catch((err)=>{ console.log(err); });
}) */

//Using async await
router.post("/register", async (req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error: " please fill up the fields properly" })
    }
    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(422).json({ error: "email already exists"});
        } else if(password != cpassword){
            return res.status(422).json({error:"password not matching"});
        }
        const user = new User({name, email, phone, work, password, cpassword});
        await user.save();
            res.status(201).json({ message: "user registered successfully"});
    } catch(err){
        console.log(error);
    }
});

router.post("/signin", async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({error:"please fill up the fields properly"})
    }
    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            const isMatch = await bcrypt.compare(password, userExist.password);
            if(isMatch){
                let token = await userExist.generateAuthToken();
                console.log(token);
                res.cookie("jwtoken",token, {
                    expires: new Date(Date.now() + 25892000000)
                })
                return res.status(201).json({message: "user successsfully logged in"});
            } else {
                return res.status(422).json({error: "invalid credentials pass"});
            }
        } else {
            return res.status(422).json({error: "invalid credentials email"});
        }
    }
    catch(error){
        console.log(error);
    }
});

router.post('/api/upload/', async (req,res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr, {
            upload_preset: 'jasminscreation'
        })
        console.log(uploadedResponse);
        res.json({msg: 'yayayaya'})
        console.log(fileStr);
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'something went wrong'})
    }
});

router.get('/api/images', async (req,res)=>{
    const { resources } = await cloudinary.search.
    expression('folder:Jasminscreation')
    .sort_by('public_id','desc')
    .max_results(30)
    .execute();
    const publicIds = resources.map((file) => file.
    public_id);
    res.send(publicIds);
});

module.exports = router;