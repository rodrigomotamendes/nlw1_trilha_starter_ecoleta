const express = require("express")
const server = express()

server.use(express.static("public"))

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.listen(3000)