const express = require("express");
const cors = require("cors");
const testRoute = require("./routes/test.routes");
const authRoute = require("./routes/authRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const cartRoute = require("./routes/cartRoute");

const app = express();

// middleware

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/uploads", express.static("uploads")); // server image.

// routes
app.use("/api",testRoute);

module.exports = app;