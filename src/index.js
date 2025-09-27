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

const api = [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://localhost:8082"
]

app.use(cors({
    origin: api,
    methods: ["GET", "POST", "PUT", "DELETE"],
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