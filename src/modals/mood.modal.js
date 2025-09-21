import mongoose, {Schema} from "mongoose";

const moodSchema = new Schema({
    mood: {
        type: [String],
        enum: ['Happy', 'Sad', 'Angry', 'Anxious', 'Energetic', 'Calm'],
        required: true,
    },
    intensity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // }

}, { timestamps: true });


export const Mood = mongoose.model("Mood", moodSchema);