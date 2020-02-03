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
    redisClient.get(numberOfVisits, (err, x) => {
        res.send("Number of visits is " + x);
        redisClient.set(numberOfVisits, parseInt(x) + 1);
    });
});

app.listen(8081, () => console.log("Listening on port 4001"));