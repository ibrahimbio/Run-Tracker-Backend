use run_tracker;
db.dropDatabase();


db.runs.insertMany([
    {
        date: "20/5/24",
        distance: 5,
        time: 0.5
    },
    {
        date: "19/5/24",
        distance: 5,
        time: 0.5
    }
]);