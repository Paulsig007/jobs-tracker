const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Job {
    _id: ID
    company: String
    position: String
    status: String
    dateApplied: String
    followUp: String
    notes: String
  }

  type Query {
    jobs: [Job]
    job(_id: ID!): Job
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
    removeJob(_id: ID!): Job
  }
`;

module.exports = typeDefs;
