require("dotenv").config();
const connectDB = require("./src/config/db");
const app = require("./src/app");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})