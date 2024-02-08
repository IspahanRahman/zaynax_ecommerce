require("dotenv").config();
require("./config/database").connect();
const express = require('express');

const apiRoute = require('./routes/allRoute');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', apiRoute);

app.get('/',(req,res)=>{
  res.send('Hello World');
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));