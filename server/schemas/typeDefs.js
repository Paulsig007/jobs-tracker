const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Job {
    _id: ID!
    company: String!
    position: String!
    status: String!
    dateApplied: String!
    followUp: String
    notes: String
  }

  type Query {
    jobs: [Job]
    job(jobId: ID!): Job
  }

  type Mutation {
    addJob(
      company: String!
      position: String!
      status: String!
      dateApplied: String!
      followUp: String
      notes: String
    ): Job
    updateJob(
      _id: ID!
      company: String
      position: String
      status: String
      dateApplied: String
      followUp: String
      notes: String
    ): Job
    removeJob: Job
  }
`;

module.exports = typeDefs;
