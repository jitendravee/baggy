import express from 'express';
import connectDB from './db/index.js'; 
import dotenv from 'dotenv';
import signUpRoute from './routes/signUp.route.js';
import signInRoute from './routes/signIn.route.js';
import cors from 'cors';

dotenv.config({
    path: './.env'
});

const app = express();

app.use(cors())
connectDB().then(() => {
    app.listen(process.env.PORT || 3500, () => {
        console.log(`Server is running on ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("Server connection failed ", err);
});

app.use(express.json());
app.use('/signup', signUpRoute);
app.use('/signin', signInRoute);

app.get('/', (req, res) => {
    res.send('Hi from the server');
});
