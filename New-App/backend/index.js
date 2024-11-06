import express from 'express';
import cors from 'cors'
import { MongoClient } from 'mongodb';


const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
await client.connect();
console.log("Database Connected");
const db = client.db('SDHub');
const collection = db.collection('users');


app.post('/signup', async (req, res) => {
    console.log(req.body);
    const inserted = await collection.insertOne(req.body);
    console.log(inserted);
    res.status(201).json(inserted);
})


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})