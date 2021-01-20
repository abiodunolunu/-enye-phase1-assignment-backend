const express = require('express')
const app = express()

const axios = require('axios')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

app.use(bodyParser.json())
app.use('/api', routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})