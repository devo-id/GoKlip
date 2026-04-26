require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
