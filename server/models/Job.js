const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    dateApplied: {
      type: String,
      required: true,
    },
    followUp: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { toJSON: { virtuals: true }, id: false }
);

const Job = model("job", jobSchema);

module.exports = Job;
