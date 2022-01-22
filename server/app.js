const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
// const cors = require("cors");
const app = express();

const {cloudinary} = require('./utils/cloudinary');

 /* app.use(cors({
    origin: '*',
})); */ 

dotenv.config({ path: './config.env'});
require('./db/conn');
//const User = require("./model/userSchema");
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true}));
app.use(require("./router/auth"));

const port = process.env.PORT;

/* const middleware = (req,res,next)=>{
    console.log(`Hello my middleware`);
    next();
}

app.get("/about",middleware, (req,res)=>{
    res.send(`Hello about world from server`);
    console.log('hi');
}); 
app.get("/contact", (req,res)=>{
    res.send(`Hello contact world from server`);
});
app.get("/signin", (req,res)=>{
    res.send(`Hello login world from server`);
});
app.get("/signup", (req,res)=>{
    res.send(`Hello registration world from server`);
}); */

/* if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
} */

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
});