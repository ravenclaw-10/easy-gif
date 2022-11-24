const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000
app.use(cors())

app.use(express.json())

app.use('/auth', require('./auth'))

app.listen(port, () => {
  console.log(`Aj-Notebook listening on port http://localhost:${port}`)
})
