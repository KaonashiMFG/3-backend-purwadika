import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

console.log(import.meta.url);
// get your directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "../../data/data.json");

let data = []

// read data
const rawData = await fs.readFile(DATA_FILE, "utf-8");
const parsedData = JSON.parse(rawData);
data = parsedData
console.log(parsedData);

// write data
const newData = {id:"3", notes: "asu"}
try {
  await fs.writeFile(DATA_FILE, JSON.stringify(newData, null, 0))
} catch (error) {
  console.error(error);
}
