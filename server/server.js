require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// clipboard schema
const clipboardSchema = new mongoose.Schema({
  customId: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    default: "",
  },
});

const Clipboard = mongoose.model("Clipboard", clipboardSchema);

// id generator
function generateId() {
  return Math.random().toString(36).substring(2, 8);
}

// create or get clipboard
app.post("/api/clipboards", async (req, res) => {
  let { customId } = req.body;

  if (!customId) {
    customId = generateId();
  }

  let clipboard = await Clipboard.findOne({ customId });

  if (!clipboard) {
    clipboard = await Clipboard.create({ customId });
  }

  res.json({
    customId: clipboard.customId,
    content: clipboard.content,
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
