const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();
require('./database/connect');


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/users')
app.use(userRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 8080');
})