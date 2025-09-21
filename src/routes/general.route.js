import { Router } from "express";
import { saveMoodData, getCommunityThoughts,getJurnalData,postCommunityThought,saveJournalEntry } from "../controllers/general.controller.js";


const router = Router();

router.route("/save-mood").post(saveMoodData);
router.route("/save-journal").post(saveJournalEntry);
router.route("/get-journal").get(getJurnalData);
router.route("/post-thought").post(postCommunityThought);
router.route("/get-thoughts").get(getCommunityThoughts);

export default router;