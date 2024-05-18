const express = require('express');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express()
 
app.use(express.json())
app.use(cors())
// middlewares should be above actual routes
const rootRouter  = require('./routes/index');   

app.use("/api/v1", rootRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})