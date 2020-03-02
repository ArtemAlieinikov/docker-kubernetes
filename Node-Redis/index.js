const express = require('express');
const redis = require("redis");

const app = express();
const redisClient = redis.createClient({
    host: "redis-server",
    port: 6379
});
const numberOfVisits = "numberOfVisits";

redisClient.set(numberOfVisits, 0);

app.get('/', (req, res) => {
    redisClient.get(numberOfVisits, (err, visits) => {
        res.send("Number of visits is " + visits);
        redisClient.set(numberOfVisits, parseInt(visits) + 1);
    });
});

app.listen(8081, () => console.log("Listening on port 4001"));