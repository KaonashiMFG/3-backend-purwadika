import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = 8001;
app.get("/api/v1", (req, res) => {
    res.status(404).json({ message: "welcome to my API" });
});
app.get("/api/v1/data", async (req, res) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const DATA_FILE = path.join(__dirname, "../data/data.json");
        const rawData = await fs.readFile(DATA_FILE, "utf-8");
        const parsedData = JSON.parse(rawData);
        res.status(200).json({ data: parsedData });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "general error. good luck!" });
    }
});
app.listen(PORT, () => {
    console.log(`server listening is active: ${PORT}`);
});
