import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { Box, Paper, Typography, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TasksList = () => {
  const { code } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/ProjectManagment/projectREST/projectTasks/${code}`
      )
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [code]);

  return (
    <div>
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <h1>Tasks List</h1>
      </Box>
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
        {tasks.map((task) => (
          <Paper key={task.code} elevation={7} sx={{ width: "30%" }}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h4">
                task
                {tasks.indexOf(task) + 1}
              </Typography>
              <Typography variant="h5">Code :</Typography>
              {task.code}
              <Typography variant="h5">description :</Typography>
              {task.description}
              <Typography variant="h5">Start Date </Typography>
              {task.startDate}
              <Typography variant="h5">End Date </Typography>
              {task.endDate}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 3,
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="primary"
                  component={Link}
                  to={`/update-task/${task.code}`}
                  sx={{ marginRight: 1 }}
                >
                  <Tooltip title="Update Task" arrow>
                    <EditIcon />
                  </Tooltip>
                </IconButton>

                <IconButton
                  color="primary"
                  component={Link}
                  to={`/delete-task/${task.code}`}
                  sx={{ marginRight: 1 }}
                >
                  <Tooltip title="Delete task" arrow>
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

export default TasksList;
