const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connection successful'))
.catch((err) => console.log(err))