const express = require('express');

//  Function to create a router for a given MongoDB collection
const createRouter = function(collection) {

    // Create a new router instance
    const router = express.Router(); 

    // Define a GET route on the root path of the router
    router.get('/', (req, res) => {
        // Find all documents in the collection
        collection
            .find()
            .toArray()
            .then((doc) => {   // Convert the documents to an array
                res.json(docs); // Respond with the documents as JSON
            })
            .catch((err) => { // Handle any errors that occur
                console.error(err); // Log the error to the console
                res.status(500); // Set the response status to 500 (Internal Server Error)
                res.json({status: 500, error: err}); // Respond with an error message as JSON
            });
    });

    //Define a POST route on the root path of the router
    router.post('/', (req, res) => {
        const newData = req.body; //Get the new data from the request body
        collection
        .insertOne(newData) // Insert the new data into the collection
        .then((result) => { //Handle successfull insertion
            res.json(result); //Respond with the result of the insertion
        })
        .catch((err) => { // Handle any errors that occur
            console.error(err);  // Log the error to the console
            res.status(500); // Set the response status to 500 (Internal Server Error)
            res.json({status:500, error:err}); // Respond with an error message as JSON
        })
    })

    return router; //Return the configured router


}

module.exports = createRouter // Export the createdRouter Function