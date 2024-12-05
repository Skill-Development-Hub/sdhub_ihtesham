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
});

app.post('/signin', async (req, res) => {
    const collection = db.collection('users');
    const userDetails = await collection.findOne(req.body);
    if(userDetails != null)
        res.status(201).json({ message: "User Details found", data : userDetails});
    else
        res.status(401).json({ message: "Invalid Credentials", data: ""});
});


app.get('/getusers', async (req, res) => {
    const collection = db.collection('users');
    const users = await collection.find({}).toArray();
    if(users != null)
        res.status(201).json({ message: "User Details", data : users });
    else
        res.status(401).json({ message: "No Data", data: "" });
});

app.get('/getdataset', async (req, res) => {
    const collection = db.collection('dataset');
    const dataset = await collection.find({}).toArray();
    if(dataset != null)
        res.status(201).json({ message: "User Details", data : dataset });
    else
        res.status(401).json({ message: "No Data", data: "" });
});

app.get('/getStudents', async (req, res) => {
    
    const students = await collection.find({}).toArray();
    console.log(students);
    res.status(201).json(students);
})


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})