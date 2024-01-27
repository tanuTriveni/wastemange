import express from 'express'
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to the mongo');
})
.catch((err) => {
    console.log(err)
})

const app = express();
app.listen(3000,()=>{
    console.log('server listening at 3000')
})
