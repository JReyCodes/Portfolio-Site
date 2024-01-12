const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())

app.use('/build', express.static(path.join(__dirname, '../build')));


const index = path.join(__dirname, '../client/index.js');
app.get('/', (req, res) => res.sendFile(index))


app.listen(3000, () => console.log('listening on port 3000...'))