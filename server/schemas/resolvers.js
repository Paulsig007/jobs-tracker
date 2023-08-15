const { Job } = require("../models");

const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find();
    },
    job: async (parent, { jobId }) => {
      return await Job.findById(jobId);
    },
  },

  Mutation: {
    addJob: async (
      parent,
      { company, position, status, dateApplied, followUp, notes }
    ) => {
      const job = await Job.create({
        company,
        position,
        status,
        dateApplied,
        followUp,
        notes,
      });
      return job;
    },
    updateJob: async (parent, { jobId, ...args }) => {
      const job = await Job.findOneAndUpdate(
        { _id: jobId },
        {
          $set: args,
        },
        { new: true }
      );
      return job;
    },
    removeJob: async (parent, { jobId }) => {
      const job = await Job.findOneAndDelete(jobId);
      return job;
    },
  },
};

module.exports = resolvers;
