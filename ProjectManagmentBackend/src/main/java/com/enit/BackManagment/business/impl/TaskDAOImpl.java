package com.enit.BackManagment.business.impl;

import java.util.List;

import com.enit.BackManagment.business.TaskDAO;
import com.enit.BackManagment.entity.Project;
import com.enit.BackManagment.entity.Task;

import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;


@Stateless
public class TaskDAOImpl implements TaskDAO{
	
	
	@PersistenceContext(unitName = "ProjectUnit")
	EntityManager em;
	
	@Override
	public void addTask(String code, Task task) {
		Project project = em.find(Project.class, code);      
		project.addTaskToProject(task);
		task.setProject(project);

		em.persist(task);
		em.merge(project);
	}
	
	@Override
	public Task getTaskByCode(String taskCode) {
		return em.find(Task.class, taskCode);
	}

	@Override
	public List<Task> getAllTasks() {
        return em.createQuery("SELECT t FROM Task t", Task.class).getResultList();

	}

	@Override
	public void updateTask(Task task) {
		 em.merge(task);
		
	}

	@Override
	public void findTasktByCodeAndDelete(String taskCode) {
		Task task = em.find(Task.class, taskCode);
        if (task != null) {
            em.remove(task);
        }
		
	}


}
