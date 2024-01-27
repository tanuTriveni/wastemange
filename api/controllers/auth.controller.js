

import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req,res,next) => {
   const{ username,email,password } = req.body;

   const hashpassword=bcryptjs.hashSync(password,10);
   const newuser =new User({username,email,password:hashpassword});
try{
   await newuser.save()
   res.status(201).json({message:"User created successfully"})
}
catch(error){next(error);
}


 
}

//custom error :though  there is no error in the system but still we have to show some error to the user 

// If a middleware or route handler calls next(), it moves on to the next regular middleware or route handler in the stack.

// If a middleware or route handler calls next(err), it skips to the next middleware or route handler that has four parameters (often referred to as an error-handling middleware). This is where error handling logic is expected.

//one way hash functin : ist irreversible
//here original password is not  stored  and here we use the bcryptjs library
// two way hash function : its reversible i.e original password is used