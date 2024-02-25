const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dekrypt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connection successful'))
.catch((err) => console.log(err))