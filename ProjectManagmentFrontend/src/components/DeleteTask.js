import React from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const DeleteTask = () => {
  const { code } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/ProjectManagment/taskREST/delete/${code}`)
      .then((response) => {
        console.log("Task deleted successfully:", response);
        history.goBack();
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div>
      <h2>Are you sure to delete this task?</h2>
      <Button variant="contained" color="primary" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteTask;
