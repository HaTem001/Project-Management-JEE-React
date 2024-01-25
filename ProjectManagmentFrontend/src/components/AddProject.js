import React, { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddProject = () => {
  const [project, setProject] = useState({
    code: "",
    description: "",
    startDate: "",
  });
  const [message, setMessage] = useState(null);
  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/ProjectManagment/projectREST/add", project)
      .then((response) => {
        console.log("Project added successfully:", response);
        setMessage("Projet ajouté avec succès !");
      })
      .catch((error) => {
        console.error("Error adding project:", error);
        setMessage("Projet ajouté avec succès !");
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
        value={project.code}
        onChange={handleChange}
      />
      <TextField
        label="Description"
        name="description"
        value={project.description}
        onChange={handleChange}
      />
      <TextField
        label="Start Date"
        name="startDate"
        placeholder="YYYY-MM-DD HH:MM:SS(optional)"
        value={project.startDate}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Project
      </Button>
      {message && <h2>{message}</h2>}
    </Box>
  );
};

export default AddProject;
