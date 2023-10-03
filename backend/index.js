import express  from "express"
import { PORT ,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';


const app = express();


//Middleware for handling CORS POLICY


app.use(cors());

//Middle ware for parsing request body 

app.use(express.json());

// homepage response 


app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send("Welcome to Mern stack")
});


/* Server Connection */

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})


//Routes

app.use('/books',booksRoute);



/* Database Connection */

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to Database')
})
.catch((error)=>{
    console.log(error);
})