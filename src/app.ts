
import "reflect-metadata";
import bodyParser from 'body-parser'

const express = require('express')

import routes from "./routes/index"
const app = express()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
routes(app)

app.listen(8888)
console.log('Listening on port 8888!')