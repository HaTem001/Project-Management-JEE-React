import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const UpdateProject = () => {
  const { code } = useParams();
  const [project, setProject] = useState({
    Code: "",
    description: "",
    startDate: "",
  });

  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/ProjectManagment/projectREST/projects/${code}`
      )
      .then((response) => setProject(response.data))
      .catch((error) => console.error("Error fetching project:", error));
  }, [code]);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting project:", project);

    axios
      .put(
        `http://localhost:8080/ProjectManagment/projectREST/update/${code}`,
        project
      )
      .then((response) => {
        console.log("Project updated successfully:", response);
        setMessage("Project updated successfully !");
      })
      .catch((error) => {
        console.error("Error updating project:", error);
        setMessage("Error updating project.");
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
      <h2>Edit Project</h2>
      <Typography>Project code : {project.code}</Typography>
      <TextField
        label="Description"
        name="description"
        value={project.description}
        onChange={handleChange}
      />
      <TextField
        label="Start Date"
        name="startDate"
        value={project.startDate}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
      {message && <h2>{message}</h2>}
    </Box>
  );
};
export default UpdateProject;
