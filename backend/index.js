import express from "express";
import { connectMongoDB } from "./connection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.js"
const app= express();
const PORT=8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:true,
    credentials:true
}))

connectMongoDB("mongodb+srv://jaismanjhinger:dblearningbuddy@clusterlb.pfqmnk8.mongodb.net/")
.then(()=>console.log("MongoDB connected"));

app.use(cookieParser());

//routes
app.use("/user",userRoute);

//routes end


app.listen(PORT,()=>{
    console.log("Running on port 8000");
})