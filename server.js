const express = require('express');
const prompt = require('./prompt');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
    prompt();
});