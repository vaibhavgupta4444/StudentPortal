import express from 'express'
import { studentDetail, studentLogin,studentRegistration } from '../controller/studentController.js'
import authStudent from '../middleware/authStudent.js';

const studentRouter=express.Router();

studentRouter.get('/',authStudent,studentDetail)
studentRouter.post('/register',studentRegistration)
studentRouter.post('/login',studentLogin)


export default studentRouter;
