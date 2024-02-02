const express = require('express');
const sequelize = require('./config/connection');
const prompt = require('./prompt');
// const Employee = require('./models/Employee');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// function for closing application

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {})
  })
  .then(() => {
    prompt();
  });

module.exports = close;