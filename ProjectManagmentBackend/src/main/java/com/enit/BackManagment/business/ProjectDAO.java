package com.enit.BackManagment.business;

import java.util.List;

import com.enit.BackManagment.entity.Project;
import com.enit.BackManagment.entity.Task;

import jakarta.ejb.Local;

@Local
public interface ProjectDAO {
	
	List<Project> getAllProjects();
	void addProject(Project project);
	Project getProjectByCode(String projectCode);
	void findProjectByCodeAndDelete(String projectCode);
	List<Task> getTasksForProject(String projectCode);
	void updateProject(Project project);

}
