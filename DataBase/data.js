const mongoose=require('mongoose')

const conectarMongo = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/SomosTec');
    console.log('connected to mongoDb');   
}

module.exports = conectarMongo;