import express from "express"
import noteRoutes from "./routes/note-routes"

const app = express()
const PORT = 8000

app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Welcome to familymart</h1>")
})

app.use("/api/v1", noteRoutes)

app.listen(PORT, ()=>{
    console.log(`server is on! on port: ${PORT}`)
})
