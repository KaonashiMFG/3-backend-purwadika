import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/note-controller";

const router = express.Router();

router.route("/").get(getAllNotes).post(addNote);
router.route("/:id").put(updateNote).delete(deleteNote);

export default router;
