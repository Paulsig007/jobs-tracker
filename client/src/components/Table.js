import React from "react";
import { useState } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { QUERY_JOBS } from "../utils/queries";

const Table = () => {
  const { loading, data } = useQuery(QUERY_JOBS);
  const jobs = data?.jobs || [];
  console.log(jobs);

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <TableRow
              key={job._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {job.company}
              </TableCell>
              <TableCell align="right">{job.position}</TableCell>
              <TableCell align="right">{job.link}</TableCell>
              <TableCell align="right">{job.notes}</TableCell>
              <TableCell align="right">{job.status}</TableCell>
              <TableCell align="right">
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
