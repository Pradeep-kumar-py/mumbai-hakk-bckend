import mongoose, {Schema} from "mongoose";

const moodSchema = new Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    thought: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Community = mongoose.model("Community", moodSchema);
