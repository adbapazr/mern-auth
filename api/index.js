import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log(error);
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});

app.use("/api/user", userRoutes);