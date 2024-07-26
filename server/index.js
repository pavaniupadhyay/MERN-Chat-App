const express= require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const userRoutes =require("./routes/userRoutes")

const app=express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes)
 
mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log("DB connected");
})
.catch((err)=>{
  console.log(err.message);
});

app.listen(process.env.PORT,()=>{
  console.log(`server started on port ${process.env.PORT}`);
})