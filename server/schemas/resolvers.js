const { Job } = require("../models");

const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find({});
    },
  },
  Mutation: {
    addJob: async (parent, args) => {
      const job = await Job.create(args);
      return job;
    },
    updateJob: async (parent, args) => {
      const job = await Job.findOneAndUpdate({ _id: args._id }, args, {
        new: true,
      });
      return job;
    },
    deleteJob: async (parent, args) => {
      const job = await Job.findOneAndDelete({ _id: args._id });
      return job;
    },
  },
};

module.exports = resolvers;
