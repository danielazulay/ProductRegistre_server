const mongoose = require('mongoose')


function connectToDb(){

    return mongoose.connect('mongodb://localhost:27017/lkls',{
        UseNewUrlParser:true,
        UseUnifiedTopology:true
    })
}



module.exports = connectToDb