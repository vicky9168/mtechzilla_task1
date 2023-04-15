import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'

// import auth from './middleware/auth.js'
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({limit:'30mb',extended:true}))
app.use(cors());

app.use('/user',userRoutes)


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log("connected to mongodb....."))
.catch((err)=>console.log(err.message));


app.get("/",(req,res)=>{
  res.send("App running");
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

