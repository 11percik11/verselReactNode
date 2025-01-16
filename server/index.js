const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());  // Разрешаем запросы с любых источников
app.use(express.json());

app.use('/', (req, res) => {
    res.send("Server is running!334242")
})

app.listen(5000, console.log("Server run on port 5000."))