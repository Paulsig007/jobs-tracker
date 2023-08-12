import { gql } from "@apollo/client";

export const QUERY_JOBS = gql`
  query getJobs {
    jobs {
      _id
      company
      position
      status
      dateApplied
      followUp
      notes
    }
  }
`;
