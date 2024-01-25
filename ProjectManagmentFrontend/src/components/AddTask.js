import React, { useState } from "react"; //, useEffect
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const AddTask = () => {
  const { code } = useParams();
  const [task, setTask] = useState({
    code: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/ProjectManagment/taskREST/add/${code}`, task)
      .then((response) => {
        console.log("Task added successfully:", response);
        history.push(`/tasks/${code}`);
        setMessage("Task added succesfuly");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
        setMessage("Error adding task !");
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
        marginTop: 4,
        marginBottom: 4,
        width: "30%",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Code"
        name="code"
        value={task.code}
        onChange={handleChange}
      />
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
      />
      <TextField
        label="Start Date"
        name="startDate"
        placeholder="YYYY-MM-DD HH:MM:SS(optional)"
        value={task.startDate}
        onChange={handleChange}
      />
      <TextField
        label="End Date"
        name="endDate"
        placeholder="YYYY-MM-DD HH:MM:SS(optional)"
        value={task.endDate}
        onChange={handleChange}
      />
      {task.endDate && task.startDate && task.endDate < task.startDate && (
        <Typography color="error">
          Start date must be earlier than end date otherwise the same value will
          be attributed to both !
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
      {message && <h2>{message}</h2>}
    </Box>
  );
};

export default AddTask;
