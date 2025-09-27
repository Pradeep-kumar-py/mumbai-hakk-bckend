import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import generalRoutes from './routes/general.route.js';
import appointmentRoutes from './routes/bookAppointment.route.js';

import dotenv from 'dotenv';
import connectDB from './db/dbConnect.js';
dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;

const isDevelopment = process.env.NODE_ENV !== 'production';

const api = isDevelopment ? [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:5173", 
    "http://localhost:5174",
    "http://localhost:3000",
    "http://localhost:3001"
] : [
    "https://sniffi.in",
    "https://www.sniffi.in", 
    "https://admin.sniffi.in"
];

app.use(cors({
    origin: isDevelopment ? true : api,
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/", express.static("public"));
// Routes for handling user-related requests
app.use("/api/user", userRoutes);
app.use("/api/general", generalRoutes);
app.use("/api/appointments", appointmentRoutes)
// app.use("/api/upload", uploadRoutes);
// app.use("/api/book", bookRoutes);
// app.use("/api/otp", otpRoutes);







app.get("/", (req, res) => {
    res.send("API is running...")
});



connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1);
    });