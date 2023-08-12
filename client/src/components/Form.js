import React from "react";
// import { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../utils/mutations";

const Form = () => {
  const [open, setOpen] = React.useState(false);
  const [addJob, { error }] = useMutation(ADD_JOB);

  const [formState, setFormState] = React.useState({
    company: "",
    position: "",
    link: "",
    notes: "",
    status: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addJob({
        variables: { ...formState },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Job</Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          component="form"
          sx={{
            ...modalStyle,
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <Typography variant="h6" component="h2" align="center">
            Please Add a Job
          </Typography>
          <TextField
            id="outlined-basic"
            label="Company"
            variant="outlined"
            name="company"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Position"
            variant="outlined"
            name="position"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="dateApplied"
            variant="outlined"
            name="dateApplied"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Notes"
            variant="outlined"
            name="notes"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            name="status"
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
