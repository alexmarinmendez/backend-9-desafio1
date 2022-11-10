const express = require('express')
const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

app.use(express.static('public'))