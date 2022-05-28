//jshint esversion:6
const express = require(`express`);
const conn = require(`./mongoose`);
const routes = require(`./routers/routes`);

const server = express();


server.use(express.json());

server.use(`/`, routes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
});