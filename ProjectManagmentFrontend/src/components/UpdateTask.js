import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const UpdateTask = () => {
  const { code } = useParams();
  const [task, setTask] = useState({
    code: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/ProjectManagment/taskREST/tasks/${code}`)
      .then((response) => setTask(response.data))
      .catch((error) => console.error("Error fetching task:", error));
  }, [code]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      console.error("Task is undefined. Unable to update.");
      return;
    }
    axios
      .put(
        `http://localhost:8080/ProjectManagment/taskREST/update/${code}`,
        task
      )
      .then((response) => {
        console.log("Task updated successfully:", response);
        setMessage("Task updated successfully !");
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        setMessage("eRROR WHILE MODIFYING TASK !!.");
      });
  };

  return task ? (
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
      <h2>Modifier la Tâche</h2>
      <Typography>Code de la tâche : {task.code}</Typography>
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
      />
      <TextField
        label="Date de début"
        name="startDate"
        value={task.startDate}
        onChange={handleChange}
      />
      <TextField
        label="Date de fin"
        name="endDate"
        value={task.endDate}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Modifier
      </Button>
      {message && <h2>{message}</h2>}
    </Box>
  ) : null;
};

export default UpdateTask;
