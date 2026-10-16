const mongoose = require("mongoose");
const drugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  typeOfDrug: { type: String, required: true },
  consequences: { type: String, required: false },
  distribution: { type: String, required: true },
});

const drug = mongoose.model("Drug", drugSchema);

module.exports = drug;
