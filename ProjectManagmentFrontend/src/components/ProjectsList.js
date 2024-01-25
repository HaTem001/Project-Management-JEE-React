import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/ProjectManagment/projectREST/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 3,
          flexWrap: "wrap",
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        {projects.map((project) => (
          <Paper key={project.code} elevation={3} sx={{ width: "30%" }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h4">
                project
                {projects.indexOf(project) + 1}
              </Typography>
              <Typography variant="h5">Code :</Typography>
              {project.code}
              <Typography variant="h5">description :</Typography>
              {project.description}
              <Typography variant="h5">Start Date </Typography>
              {project.startDate}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 3,
                  alignItems: "center",
                }}
              >
                <Button variant="contained" sx={{ mt: 2 }}>
                  <Link to={`/tasks/${project.code}`}>See Tasks</Link>
                </Button>

                <IconButton
                  color="primary"
                  component={Link}
                  to={`/add-task/${project.code}`}
                  sx={{ marginRight: 1 }}
                >
                  <Tooltip title="Add Task To Project" arrow>
                    <AddIcon />
                  </Tooltip>
                </IconButton>

                <IconButton
                  color="primary"
                  component={Link}
                  to={`/update-project/${project.code}`}
                  sx={{ marginRight: 1 }}
                >
                  <Tooltip title="Update Project" arrow>
                    <EditIcon />
                  </Tooltip>
                </IconButton>

                <IconButton
                  color="primary"
                  component={Link}
                  to={`/delete-project/${project.code}`}
                  sx={{ marginRight: 1 }}
                >
                  <Tooltip title="Delete Project" arrow>
                    <DeleteIcon />
                  </Tooltip>
                </IconButton>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </div>
  );
};

export default ProjectsList;
