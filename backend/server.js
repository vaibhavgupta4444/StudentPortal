import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import studentRouter from './routes/studentRoutes.js';

//App configuration
const app=express();
const port=process.env.PORT||4000;
connectDB()

// middlewares
app.use(express.json());
app.use(cors());

// Api 
app.use('/api/student',studentRouter);

app.get('/',(req,res)=>{
    res.send('api working');
});

app.listen(port);