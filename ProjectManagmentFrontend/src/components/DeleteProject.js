import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";

const DeleteProject = () => {
  const { code } = useParams();
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const handleDelete = () => {
    axios
      .delete(
        `http://localhost:8080/ProjectManagment/projectREST/delete/${code}`
      )
      .then((response) => {
        console.log("Project deleted successfully:", response);
        setMessage("Projet supprimé avec succès !");
        history.push("/projects");
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
        setMessage(
          "Erreur lors de la suppression du projet. Veuillez réessayer."
        );
      });
  };

  return (
    <div>
      <h2>Are you sure to delete this project ?</h2>
      <Button variant="contained" color="primary" onClick={handleDelete}>
        Delete
      </Button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteProject;
