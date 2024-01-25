package com.enit.BackManagment.webservice;

import java.util.List;

import com.enit.BackManagment.business.TaskDAO;
import com.enit.BackManagment.entity.Task;

import jakarta.ejb.EJB;
import jakarta.jws.WebParam;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/taskREST")
public class TaskRestServices {
	
	
	
	@EJB
	TaskDAO taskDAO;

	@GET
	@Path("tasks")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Task> getAllTasksWEB() {
		return taskDAO.getAllTasks();

	}

	
	@POST
	@Path("add/{code_project}")
    @Produces(MediaType.APPLICATION_JSON) 
	public void addTaskWeb(@PathParam(value="code_project")String code_project, @WebParam Task task )throws Exception {
		  taskDAO.addTask(code_project,task);
	}

	
	
	@DELETE
	@Path("/delete/{code}")
	@Produces(MediaType.APPLICATION_JSON)
	public void findTasktByCodeAndDeleteWEB(@PathParam(value = "code") String code) {
		taskDAO.findTasktByCodeAndDelete(code);

	}
	
	
	@GET
    @Path("/tasks/{taskCode}")
    @Produces(MediaType.APPLICATION_JSON)
    public Task getTaskByCodeWEB(@PathParam(value = "taskCode") String taskCode) {
        return taskDAO.getTaskByCode(taskCode);
    }
	
	
	@PUT
    @Path("/update/{code}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateTask(@PathParam("code") String taskCode, Task updatedTask) {
        Task existingTask = taskDAO.getTaskByCode(taskCode);

        if (existingTask == null) {
            return Response.status(Response.Status.NOT_FOUND).entity("Task not found").build();
        }

        // Update the task properties
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setStartDate(updatedTask.getStartDate());
        existingTask.setEndDate(updatedTask.getEndDate());

        // Perform the update
        try {
            taskDAO.updateTask(existingTask);
            return Response.status(Response.Status.OK).entity("Task updated successfully").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Error updating task").build();
        }
    }
	
	
	
	
}