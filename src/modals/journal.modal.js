import mongoose,{Schema} from "mongoose";

const journalSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // }
}, { timestamps: true });

export const Journal = mongoose.model("Journal", journalSchema);