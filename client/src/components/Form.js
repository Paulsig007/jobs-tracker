import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../utils/mutations";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [addJob, { error }] = useMutation(ADD_JOB);

  const [formState, setFormState] = React.useState({
    company: "",
    position: "",
    dateApplied: "",
    notes: "",
    status: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleChange = (event) => {
  //   // there is an event here becuase we are using the onChange event listener. This is how we get the value of the input.
  //   const { name, value } = event.target;
  //   // name is the name attribute of the input element. value is the value attribute of the input element.
  //   setFormState({ ...formState, [name]: value });
  //   // we are using a spread operator here to preserve the other key value pairs in the formState object. We are then setting the value of the input to the key of the input.
  //   console.log(formState);
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addJob({
        variables: { ...formState },
      });

      setFormState({});

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
            // this is using a spread operator to preserve the other styles in the modalStyle object.
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
            // onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Position"
            variant="outlined"
            name="position"
            // onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="dateApplied"
            variant="outlined"
            name="dateApplied"
            // onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Notes"
            variant="outlined"
            name="notes"
            // onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            name="status"
            // onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {error && <div>Something went wrong...</div>}
        </Box>
      </Modal>
    </div>
  );
};

export default Form;
