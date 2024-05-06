const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')

require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

const router = require('../backend/routes')
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api", router)


const connectDB = require("../backend/config/db");
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});

