import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Health check pass.'
    })
})

app.get("/api/v1/candidates", (req, res) => {
    res.status(200).json({
        success: true,
        data: []
    })
})

app.post("/api/v1/add-candidate", (req, res) => {
    res.status(201).json({
        success: true,
        data: req.body
    })
})

// :id -> params 
app.get("/api/v1/candidate/:id", (req, res) => {
    res.json({
        success: true,
        candidateId: req.params.id
    })
})

app.get("/api/v1/get-candidate", (req, res) => {
    res.json({
        success: true,
        data: req.query
    })
})

export default app