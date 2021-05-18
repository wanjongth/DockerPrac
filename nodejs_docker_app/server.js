const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

// app
const app = express();
app.get('/', (req, res) => {
    res.send("hello hello!!!")
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);