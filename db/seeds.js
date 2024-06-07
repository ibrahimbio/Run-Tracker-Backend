//Switch to the run_tracker database (or create it if it doesn't exist)
use run_tracker;

//Drop the run_tracker databse, removing all collections and data within it
db.dropDatabase();

db.runs.insertMany([

    {
        date: "20/6/24",
        distance: 5,
        time: 0.5
    },
    {
        date: "19/6/24",
        distance: 8,
        time: 0.9
    }
    

]);
