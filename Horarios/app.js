const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8080;


app.use(cors());
app.use(express.json());

app.use('/', require('./routes/index'));

app.use('*', (req, res) => {
  res.status(404).send({
    success: false,
    message: `Requested path ${req.baseUrl} not found`
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
