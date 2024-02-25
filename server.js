const express = require('express');
const app = express();
const cors = require('cors');
require('./database/connect')
const bodyParser = require('body-parser')


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/users')
app.use(userRoutes)

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})