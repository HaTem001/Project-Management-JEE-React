package com.enit.BackManagment.webservice;

import java.util.List;

import com.enit.BackManagment.business.ProjectDAO;
import com.enit.BackManagment.entity.Project;
import com.enit.BackManagment.entity.Task;

import jakarta.ejb.EJB;
import jakarta.jws.WebParam;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/projectREST")
public class ProjectRestServices {
	
	
	
	@EJB
	ProjectDAO projectDAO;

	@GET
	@Path("projects")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Project> getAllProjectsWEB() {
		return projectDAO.getAllProjects();

	}

	@POST
	@Path("add")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void addProjectWEB(@WebParam Project project) {
		projectDAO.addProject(project);
	}

	
	
	@DELETE
	@Path("/delete/{code}")
	@Produces(MediaType.APPLICATION_JSON)
	public void findByIdAndDeleteWEB(@PathParam(value = "code") String code) {
		projectDAO.findProjectByCodeAndDelete(code);

	}
	
	
	@GET
    @Path("/projects/{projectCode}")
    @Produces(MediaType.APPLICATION_JSON)
    public Project getProjectByCodeWEB(@PathParam(value = "projectCode") String projectCode) {
        return projectDAO.getProjectByCode(projectCode);
    }
	
	
	@GET
    @Path("/projectTasks/{projectCode}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Task> getTasksForProject(@PathParam("projectCode") String projectCode) {
        Project project = projectDAO.getProjectByCode(projectCode);

        if (project == null) {
            throw new NotFoundException("Project not found");
        }

        return project.getTasks();
    }
	

	@PUT
    @Path("/update/{code}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateProject(@PathParam("code") String projectCode, Project updatedProject) {
        Project existingProject = projectDAO.getProjectByCode(projectCode);

        if (existingProject == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Project not found").build();
        }

        // Update the project properties
        existingProject.setDescription(updatedProject.getDescription());
        existingProject.setStartDate(updatedProject.getStartDate());

        // Perform the update
        try {
            projectDAO.updateProject(existingProject);
            return Response.status(Response.Status.OK).entity("Project updated successfully").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Error updating project").build();
        }
    }

}
