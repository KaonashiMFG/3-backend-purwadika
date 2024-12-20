import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
const app = express();
app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to familymart</h1>");
});
const PORT = 8000;
app.get("/api/v1", async (req, res) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const DATA_FILE = path.join(__dirname, "../data/data.json");
        const rawNotes = await fs.readFile(DATA_FILE, "utf8");
        const notes = JSON.parse(rawNotes);
        res.status(200).json({ data: notes });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "general error. BLOK" });
    }
});
app.listen(PORT, () => {
    console.log(`server is on! on port: ${PORT}`);
});
