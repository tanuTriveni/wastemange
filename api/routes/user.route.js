import express from 'express';
import { test } from '../controllers/user.controller.js';
const router =express.Router();
router.get('/',test);
export default router;




// router.get('/',(req,res)=>{
//     res.json({
//         message:'Api is working'
//     })
// })