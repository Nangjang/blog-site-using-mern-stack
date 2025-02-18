import express from 'express';
import { db, connectToDb } from './db.js';

// Initializing the Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST route to greet and log the request body
app.post('/hello', (req, res) => {
    console.log(req.body); // Logs the request body to the console
    res.send(`Hello! ${req.body.name}`); // Responds with a personalized greeting
});

// GET route to greet by name using URL parameters
app.get('/hello/:name', (req, res) => {
    console.log(req.params); // Logs the URL parameters

    const { name } = req.params; // Destructures the name from params
    res.send(`Hello! ${name}`); // Responds with a personalized greeting
});

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404).send('Article Not Found!');
    }
});

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 }
    });

    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404).send('Article Not Found!');
    }
});

app.post('/api/articles/:name/comment', async (req, res) => {
    const { name } = req.params; // Destructures the article name from params
    const { postedBy, text } = req.body; // Destructures postedBy and text from the request body

    await db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy, text } }
    });

    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404).send('Article Not Found!');
    }
});

// Starts the server on port 8000 and logs a message to confirm
connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000.');
    });
});
