const express = require("express");
const redis = require("redis");

const app = express();
const redisClient = redis.createClient();
const NumberOfVisits = "numberOfVisits";

redisClient.set(NumberOfVisits, 0);

app.get('/', (req, res) => {
    redisClient.get(NumberOfVisits, (x) => {
        res.send("Number of visits is " + x);
        redisClient.set(NumberOfVisits, parseInt(++x));
    });
});

app.listen(8081, () => console.log("Listening on port 8081"));