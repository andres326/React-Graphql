import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo ok');
});

app.listen(8000, () => console.log('Server funcionando'));