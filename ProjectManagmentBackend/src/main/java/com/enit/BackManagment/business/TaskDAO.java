package com.enit.BackManagment.business;

import java.util.List;

import com.enit.BackManagment.entity.Task;

import jakarta.ejb.Local;

@Local
public interface TaskDAO {
	
	List<Task> getAllTasks();
	public void addTask(String code, Task task);
	void updateTask(Task task);
	void findTasktByCodeAndDelete(String taskCode);
    Task getTaskByCode(String taskCode);
     
}


