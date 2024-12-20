import { Request, Response } from "express";
import { readData, writeData } from "../helpers/io";

export async function getAllNotes(req: Request, res: Response) {
  try {
    const notes = await readData();
    res.status(200).json({ data: notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "general error. BLOK" });
  }
}

export async function addNote(req: Request, res: Response) {
  try {
    const notes = await readData();

    if (notes) {
      notes.push(req.body);
      await writeData(notes);
      res.status(201).json({ message: "success" });
      return;
    }

    res.status(404).json({ data: "lhoooo. ko kaga ada??!!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "salah coi" });
  }
}

export async function updateNote(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const id = req.params.id;
    const notes = await readData();

    if (!notes) {
      res.status(404).json({ message: "target not found" });
      return;
    }

    const noteIndex = notes?.findIndex((note) => note.id === +id);

    if (noteIndex === -1) {
      res.status(404).json({ message: "target note is not exist" });
      return;
    }

    notes[noteIndex] = { id: notes[noteIndex].id, wotd: req.body.wotd };
    await writeData(notes);

    res.status(200).json("note updated");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error woi" });
  }
}

export async function deleteNote(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const notes = await readData();

    if (!notes) {
      res.status(404).json({ message: "no notes found!" });
      return;
    }

    const filteredData = notes.filter((note) => note.id !== +id);

    await writeData(filteredData);

    res.status(200).json({ message: "deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error co" });
  }
}
