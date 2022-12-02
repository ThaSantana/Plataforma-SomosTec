const express=require('express')
const cors=require('cors')
const connectMongoDb=require('./DataBase/data')

const app = express();
app.use(cors());
app.use(express.json());

async function createServer() {
    await connectMongoDb().catch((err) => {
        console.log(`Error connecting to mongoDb. ${err}`);
    });

    app.listen(8080, console.log('Conectado na porta 8080'));
}

createServer();