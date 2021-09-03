const express = require("express");
const axios = require("axios");
const router = express.Router();
router.get("/healthcheck", (err, res) => {
    return res.send(`
        I am Healthcheck Service 2\n
        Node env: ${process.env.NODE_ENV}\n
        DB username: ${process.env.DB_USERNAME}\n
        DB password: ${process.env.DB_PASSWORD}
        `);
});
router.get("/", (err, res) => {
    return res.send("I am Service two");
});
router.get("/hello", (err, res) => {
    return res.send("Saying hello two...");
});
router.get("/getService2/healthcheck", async (err, res) => {
    const { data } = await axios({
        method: "GET",
        url: "http://myservice1:2173/healthcheck",
    }).catch(() => true);
    return res.send(data);
});
module.exports = router;
