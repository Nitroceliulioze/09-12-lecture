import express from "express";
import { connectionToMongo } from "./utils/connection.js";
import catRoute from "./routes/catRoute.js"

const app = express();
const port = 3002;


app.use('/', catRoute);


app.listen(port, () => {
    connectionToMongo();
    console.log(`Listen port ${port}`)
})