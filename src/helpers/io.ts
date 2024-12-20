import path from "path"
import { fileURLToPath } from "url"
import fs from "fs/promises"

interface Note{
    id: number
    wotd: string
}

const __filename = fileURLToPath(import.meta.url)
console.log(__filename)
const __dirname = path.dirname(__filename)
console.log(__dirname)
const DATA_FILE = path.join(__dirname, "../../data/data.json")
console.log(DATA_FILE)


export async function readData(): Promise<Note[] | null> {
    try {
        const rawNotes = await fs.readFile(DATA_FILE, "utf8")
        const notes = JSON.parse(rawNotes)

        return notes
    } catch (error) {
        console.error(error);
        return null
    }
}

export async function writeData(data: Note[]) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
    } catch (error) {
        console.error(error);
        
    }
}