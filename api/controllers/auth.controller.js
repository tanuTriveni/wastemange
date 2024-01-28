

import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next) => {
   const{ username,email,password } = req.body;

   const hashpassword=bcryptjs.hashSync(password,10);
   const newuser =new User({username,email,password:hashpassword});
try{
   await newuser.save()
   res.status(201).json({message:"User created successfully"})
}
catch(error){next(errorHandler(300,"something went wrong"));
}


 
}
export const signin = async (req,res,next)=>{
   const{email,password}=req.body;
   try{
      const validUser=await User.findOne({email})
      if(!validUser) return  next(errorHandler(404,'Uesr not found'))
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
      


const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);

//removing the password
//each time user sign in it will get the new token
const{password:hashedPassword,...rest}=validUser._doc;
const expiryDate=new Date(Date.now()+3600000);
res.cookie('access_token',token,{httpOnly:true,expires:expiryDate},).status(200).json(rest);
   }
catch(error){
   next(error);
}
}

//custom error :though  there is no error in the system but still we have to show some error to the user 

// If a middleware or route handler calls next(), it moves on to the next regular middleware or route handler in the stack.

// If a middleware or route handler calls next(err), it skips to the next middleware or route handler that has four parameters (often referred to as an error-handling middleware). This is where error handling logic is expected.

//one way hash functin : ist irreversible
//here original password is not  stored  and here we use the bcryptjs library
// two way hash function : its reversible i.e original password is used


//waterfall

// In the context of web development and browser performance analysis, the term "waterfall" typically refers to the Waterfall Chart, which is a graphical representation of the sequence and duration of various elements loading on a web page.

// When you open the Developer Tools in Google Chrome and navigate to the "Network" tab, you can initiate a network request to a website. The network tab then displays a waterfall chart that provides insights into the loading process of different resources (such as HTML, CSS, JavaScript files, images, etc.) on the web page.