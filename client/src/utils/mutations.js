import { gql } from "@apollo/client";

export const ADD_JOB = gql`
  mutation addJob(
    $company: String!
    $position: String!
    $status: String!
    $dateApplied: Date!
    $followUp: Date!
    $notes: String!
  ) {
    addJob(
      company: $company
      position: $position
      status: $status
      dateApplied: $dateApplied
      followUp: $followUp
      notes: $notes
    ) {
      company
      position
      status
      dateApplied
      followUp
      notes
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation updateJob(
    $company: String
    $position: String
    $status: String
    $dateApplied: Date
    $followUp: Date
    $notes: String
  ) {
    updateJob(
      company: $company
      position: $position
      status: $status
      dateApplied: $dateApplied
      followUp: $followUp
      notes: $notes
    ) {
      company
      position
      status
      dateApplied
      followUp
      notes
    }
  }
`;
