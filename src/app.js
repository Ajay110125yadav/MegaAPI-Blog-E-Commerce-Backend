const express = require("express");
const cors = require("cors");
const testRoute = require("./routes/test.routes");
const authRoute = require("./routes/authRoute");

const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

// routes
app.use("/api",testRoute);

module.exports = app;