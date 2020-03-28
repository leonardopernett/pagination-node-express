const mongoose = require('mongoose');

// mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/paginate',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db=>console.log('db is connected'))
  .catch(err=>console.error(err))