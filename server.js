require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override")
const morgan = require("morgan")

const app = express();
const PORT = process.env.PORT || 3000;
const Drug = require("./models/drug.js")
const drugCtrl = require("./controllers/drugs.js")

// Middleware to parse incoming JSON payloads
app.use(express.json());
app.use(methodOverride("_method"))
app.use(morgan("dev"))

// Establish connection to the local MongoDB database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB successfully.");
  })
  .catch((error) => {    console.error("❌ MongoDB connection error:", error);
  });

app.get("/", drugCtrl.home);
app.get("/drugs", drugCtrl.index);
app.get("/drugs/new", drugCtrl.showNewForm);
app.get("/drugs/:drugId", drugCtrl.show);
app.get("/drugs/:drugId/edit", drugCtrl.edit);
app.post("/drugs", drugCtrl.create);
app.put("/drugs/:drugId", drugCtrl.update);
app.delete("/drugs/:drugId", drugCtrl.deleteDrug);

// Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://127.0.0.1:${PORT}`);
});