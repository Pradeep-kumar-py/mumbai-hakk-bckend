import { Community } from "../modals/community.modal.js";
import {Journal} from "../modals/journal.modal.js";
import { Mood } from "../modals/mood.modal.js";


export const saveMoodData = async (req, res) => {
    try {
        const { mood, intensity, description } = req.body;


        // Validate input
        if (!mood || !intensity) {
            return res.status(400).json({ message: "Mood and intensity are required" });
        }

        // Create a new mood entry
        const newMood = new Mood({
            mood,
            intensity,
            description,

        });

        // Save the mood entry to the database
        await newMood.save();

        return res.status(201).json({ message: "Mood data saved successfully", mood: newMood });
    } catch (error) {
        console.error("Error in saveMoodData: ", error);
        return res.status(500).json({
            message: "Something went wrong while saving mood data",
            error: error.message
        });
    }
};

export const saveJournalEntry = async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = req.user._id;

        // Validate input
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        // Create a new journal entry
        const newJournalEntry = new Journal({
            title,
            content,
            // userId,
        });

        // Save the journal entry to the database
        await newJournalEntry.save();

        return res.status(201).json({ message: "Journal entry saved successfully", journal: newJournalEntry });
    } catch (error) {
        console.error("Error in saveJournalEntry: ", error);
        return res.status(500).json({
            message: "Something went wrong while saving journal entry",
            error: error.message
        });
    }
};

export const postCommunityThought = async (req, res) => {
    try {
        const { thought } = req.body;
        // const userId = req.user._id;

        // Validate input
        if (!thought) {
            return res.status(400).json({ message: "Thought is required" });
        }

        // Create a new community thought entry
        const newCommunityThought = new Community({
            thought,
            // userId,
        });

        // Save the community thought entry to the database
        await newCommunityThought.save();

        return res.status(201).json({ message: "Community thought posted successfully", community: newCommunityThought });
    } catch (error) {
        console.error("Error in postCommunityThought: ", error);
        return res.status(500).json({
            message: "Something went wrong while posting community thought",
            error: error.message
        });
    }
};

export const getCommunityThoughts = async (req, res) => {
    try {
        // Fetch all community thoughts from the database
        const thoughts = await Community.find().populate('userId', 'name').sort({ createdAt: -1 });

        return res.status(200).json({ message: "Community thoughts fetched successfully", thoughts });
    } catch (error) {
        console.error("Error in getCommunityThoughts: ", error);
        return res.status(500).json({
            message: "Something went wrong while fetching community thoughts",
            error: error.message
        });
    }
};

export const getJurnalData = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch all journal entries for the authenticated user
        const journals = await Journal.find({ userId }).sort({ createdAt: -1 });

        return res.status(200).json({ message: "Journal entries fetched successfully", journals });
    } catch (error) {
        console.error("Error in getJurnalData: ", error);
        return res.status(500).json({
            message: "Something went wrong while fetching journal entries",
            error: error.message
        });
    }
};