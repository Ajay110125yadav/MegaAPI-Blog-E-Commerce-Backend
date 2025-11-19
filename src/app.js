const express = require("express");
const cors = require("cors");
const testRoute = require("./routes/test.routes");

const app = express();

// middleware

app.use(cors());
app.use(express.json());

// routes
app.use("/api",testRoute);

module.exports = app;