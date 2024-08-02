const express = require('express')
const app = express()
const port = 8000;
const route=require('./route/user.route')
const cors = require('cors');



app.use(cors());
app.use(express.json());

app.use('/',route);










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})