import express from 'express'
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
import userRoutes from './routes/user.route.js' 
import authRoutes from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to the mongo');
})
.catch((err) => {
    console.log(err)
})

const app = express();
app.use(express.json())
app.listen(3000,()=>{
    console.log('server listening at 3000')
})

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    // 500 :internal server error 
    const message =err.message|| 'Internal server error'
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode,
    });
})

// app.get('/',()=>{
//     res.json({
//         message:"this is the triveni"
//     })
// })





// The app.use("/api/user", userRoutes) line in Express is setting up a route for the /api/user path and associating it with the routes defined in the userRoutes router.

// Let's break down what this line is doing:

// app.use: This is an Express method used to mount middleware functions. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. They can perform various tasks, modify the request or response objects, and end the request-response cycle.

// "/api/user": This is the path for which the middleware function (in this case, the userRoutes router) will be invoked. It specifies that the middleware should be triggered when a request is made to a path starting with "/api/user". For example, it will match paths like "/api/user", "/api/user/profile", etc.

// userRoutes: This is the router that contains the specific routes and middleware functions for handling requests to paths starting with "/api/user". The userRoutes router is expected to handle requests related to the "/api/user" endpoint.


// Middleware functions can perform various tasks such as modifying the request or response objects, terminating the request-response cycle, or calling the next middleware function in the stack. They are commonly used for tasks like logging, authentication, error handling, and more.