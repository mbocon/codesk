const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 8080
const path    = require('path')

app.use(express.static('build'));


// MongoDB Connection
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log("MongoDB connection established:", mongoURI)
);


// Error / Disconnection
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));


// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



app.get('*', (req, res) => {
	res.sendFile(path.join(`${__dirname}/build/index.html`))
} )



app.listen(PORT, () => {
	console.log('listening on port', PORT)
})