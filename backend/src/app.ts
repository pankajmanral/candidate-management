/*
Responsible for creating/configuring Express 
routes 
middleware 
error handling 
*/

import express from "express"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Candidate management is running."
    })
})

app.get("/api/v1/candidate", (req, res) => {
    res.json({
        success: true,
        data: []
    })
})

app.post("/api/v1/add-candidate", (req, res) => {
    console.log(req.body)
    res.json({
        success: true,
        data: req.body
    })
})

export default app