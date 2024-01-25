package com.enit.BackManagment.business.impl;

import java.util.Collections;
import java.util.List;

import com.enit.BackManagment.business.ProjectDAO;
import com.enit.BackManagment.entity.Project;
import com.enit.BackManagment.entity.Task;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Stateless
public class ProjectDAOImpl implements ProjectDAO{
	
	@PersistenceContext(unitName = "ProjectUnit")
	EntityManager em;
	
	
	@Override
	public void addProject(Project project) {
		em.persist(project);
		
	}
	
	@Override
	public List<Project> getAllProjects() {
        return em.createQuery("SELECT p FROM Project p", Project.class).getResultList();
    }

	

	@Override
	public Project getProjectByCode(String projectCode) {
        return em.find(Project.class, projectCode);
	}

	@Override
	public void findProjectByCodeAndDelete(String projectCode) {
		Project p= em.find(Project.class, projectCode);
		em.remove(p);
		
	}

	
	@Override
	public List<Task> getTasksForProject(String projectCode) {
	    Project project = em.find(Project.class, projectCode);

	    if (project != null) {
	        
	        project.getTasks().size();
	        return project.getTasks();
	    } else {
	        return Collections.emptyList(); 
	    }
	}


	@Override
	public void updateProject(Project project) {
		em.merge(project);
	}

}
