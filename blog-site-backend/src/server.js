import express from 'express';
import { MongoClient } from 'mongodb';

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

// POST route to add a comment to an article by name
app.post('/api/articles/:name/comment', (req, res) => {
    const { name } = req.params; // Destructures the article name from params
    const { postedBy, text } = req.body; // Destructures postedBy and text from the request body

    // Finds the article object in the articlesInfo array by name
    const article = articlesInfo.find(a => a.name === name);

    if (article) {
        // If the article is found, add the comment to its comments array
        article.comments.push({ postedBy, text });
        // Respond with the updated comments array
        res.send(article.comments);
    } else {
        // If the article is not found, respond with an error message
        res.send(`The article titled ${name} doesn't exist.`);
    }
});

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-blog-db');
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404).send('Article Not Found!');
    }
});

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('react-blog-db');
    await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 }
    });

    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.send(`${article.upvotes}`);
    } else {
        res.sendStatus(404).send('Article Not Found!');
    }
});

// Starts the server on port 8000 and logs a message to confirm
app.listen(8000, () => {
    console.log('Server is listening on port 8000.');
});
