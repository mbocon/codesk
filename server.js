const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 8000
const path = require('path');
const db = mongoose.connection;
const passport = require('./config/passport')();
const parser = require('body-parser')
const cors = require('cors')

app.use(express.static('build'));

// Environment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/merncrud';

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('MongoDB connection established:', mongoURI));
  
// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON
app.use(express.static('build'));// serves the build dir
app.use(parser.json());
app.use(passport.initialize());
app.use(cors());


// Routes
const userController = require('./controllers/users');
app.use('/users', userController);



app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/build/index.html`));
});



app.listen(PORT, () => {
	console.log('listening on port', PORT)
});

