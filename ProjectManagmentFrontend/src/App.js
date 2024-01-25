import React from "react";
import ProjectsList from "./components/ProjectsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/AddProject";
import UpdateProject from "./components/UpdateProject";
import DeleteProject from "./components/DeleteProject";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import DeleteTask from "./components/DeleteTask";

import { Container, Typography, Paper } from "@mui/material";
import ResponsiveAppBar from "./components/navbar";

function Home() {
  return (
    <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h2" gutterBottom>
        Description
      </Typography>
      <Typography variant="h5" gutterBottom>
        Numerous tools to help with project planning and management are
        currently sold on the market, the majority of which tools exploit the
        web. In the same context, we will develop a miniature part of a JEE
        application that can help a head of project to plan projects by creating
        tasks, assigning involved in these tasks and by managing time
        constraints, skills of stakeholders, leave and public holidays. The
        objective The key is to arrive at optimal project durations. This
        application is presented by the architecture below:
      </Typography>
      <img
        src="/images/image1.jpg"
        alt="System Architecture"
        style={{ width: "100%", marginBottom: "20px" }}
      />
      <Typography variant="h5" gutterBottom>
        The system works by allowing users to create, update and delete projects
        as well as add tasks to these projects. Project attributes include a
        unique code, description, and start date. Tasks associated with a
        project also have a unique code, description, start date, and end date.
      </Typography>
      <img
        src="/images/image2.jpg"
        alt="System Functionality"
        style={{ width: "100%", marginBottom: "20px" }}
      />
    </Paper>
  );
}
function App() {
  return (
    <Container>
      <Router>
        <div className="App">
          <ResponsiveAppBar />

          <div className="content">
            <Switch>
              <Route path="/projects" component={ProjectsList} />
              <Route path="/add-project" component={AddProject} />
              <Route path="/update-project/:code" component={UpdateProject} />
              <Route path="/delete-project/:code" component={DeleteProject} />
              <Route path="/tasks/:code" component={TasksList} />
              <Route exact path="/" component={Home} />
              <Route path="/add-task/:code" component={AddTask} />
              <Route path="/update-task/:code" component={UpdateTask} />
              <Route path="/delete-task/:code" component={DeleteTask} />
            </Switch>
          </div>
        </div>
      </Router>
    </Container>
  );
}

export default App;
