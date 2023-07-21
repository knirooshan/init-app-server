import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";

dotenv.config();

// const connect = () => {
//     mongoose.connect(process.env.MONGO).then(() => {
//         console.log("Connected to DB!")
//     }).catch(err => {
//         throw err;
//     })
// }

const url = process.env.MONGO
const connect = () => {
    mongoose.connect(url, { useNewUrlParser: true })
    const db = mongoose.connection
    db.once('open', _ => {
        console.log('Database connected:', url)
    })

    db.on('error', err => {
        console.error('connection error:', err)
    })
}


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";

    return res.status(status).json({
        success: false,
        status,
        message,
    })

});

app.listen(8800, () => {
    connect();
    console.log("Connected to Server!");
})