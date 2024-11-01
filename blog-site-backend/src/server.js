import express from 'express';

const app = express();
let articlesInfo = [
    {
        name: "learn-react",
        upvotes: 0
    },
    {
        name: "learn-node",
        upvotes: 0
    },
    {
        name: "mongodb",
        upvotes: 0
    },
];
app.use(express.json());

app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send(`Hello! ${req.body.name}`);
});

app.get('/hello/:name', (req, res) => {
    console.log(req.params);

    const { name } = req.params;
    res.send(`Hello! ${name}`);
});

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;

    const article = articlesInfo.find(a => a.name === name);
    if (!article) {
        res.send('The article doesn\'t exists.');
    }
    else {
        article.upvotes += 1;
        res.send(`The article has ${article.upvotes} upvotes.`);
    }
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000.');
});
