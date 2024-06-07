const express = require('express'); // Import the Express framework
const createRouter = require('./helpers/create_router'); // Import the createRouter function from the helpers folder
const app = express(); // Create an Express application instance
const cors = require('cors'); // Import the CORS middleware

const MongoClient = require('mongodb').MongoClient; // Import the MongoDB client

app.use(express.json()); // Use the JSON middleware to parse JSON bodies
app.use(cors()); // Use the CORS middleware to enable Cross-Origin Resource Sharing

// Connect to the MongoDB server
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('run_tracker'); // Get a reference to the 'run_tracker' database
    const runCollection = db.collection('runs'); // Get a reference to the 'runs' collection
    const runsRouter = createRouter(runCollection); // Create a router for the 'runs' collection
    app.use('/api/runs', runsRouter); // Use the router for requests to '/api/runs'
})
.catch(console.error); // Log any errors that occur during the connection

// Start the server and listen on port 9000
app.listen(9000, function () {
    console.log("Listening on port 9000"); // Log a message when the server starts
});
