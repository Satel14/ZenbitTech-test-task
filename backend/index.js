const express = require('express');
const messageRouter = require('./routes/message')


var cors = require('cors')

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/', messageRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})