import express from 'express';
import connectDB from './db/index.js'; 
import dotenv from "dotenv";
import signUpRoute from './routes/signUp.route.js'

dotenv.config({
    path: './.env'

});
const app = express();



connectDB().then( () => {
    app.listen(process.env.PORT || 3500 ,() => {
console.log(`Server is running on ${process.env.PORT}`);
        
})
}).catch((err) => {
console.log("server connection failed ", err);
})

app.get('/', (res,req) => {
    res.send('hii from the server')
})

