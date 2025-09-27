import { BookAppointment } from "../modals/bookAppointment.modal.js";


const bookAppointment = async (req, res) => {
    try {
        const { petName, petType, name, email, phone, date, time, service, message } = req.body;

        // Check if an appointment already exists for the given date and time
        const existingAppointment = await BookAppointment.findOne({ date, time });
        if (existingAppointment) {
            return res.status(400).json({ message: "An appointment already exists for the selected date and time." });
        }

        const newAppointment = new BookAppointment({
            petName,
            petType,
            name,
            email,
            phone,
            date,
            time,
            service,
            message
        });

        await newAppointment.save();
        res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
    } catch (error) {
        console.error("Error booking appointment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getAppointments = async (req, res) => {
    try {
        const appointments = await BookAppointment.find().sort({ date: 1, time: 1 });
        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ['Pending', 'Confirmed', 'Completed', 'Cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status value" });
        }

        const appointment = await BookAppointment.findByIdAndUpdate(id, { status }, { new: true });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.status(200).json({ message: "Appointment status updated successfully", appointment });
    } catch (error) {
        console.error("Error updating appointment status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export { bookAppointment, getAppointments, updateAppointmentStatus };