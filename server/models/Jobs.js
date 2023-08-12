const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: String,
  dateApplied: Date,
  followUp: Date,
  notes: String,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
