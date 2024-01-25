package com.enit.BackManagment.entity;

import java.io.Serializable;
import java.lang.String;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.json.bind.annotation.JsonbTypeAdapter;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Project implements Serializable {
  
	@Id
	private String code;
	private String description;
	
	@JsonbTypeAdapter(DateAdapter.class)
	private Date startDate;
	
	@OneToMany(mappedBy = "project", fetch = FetchType.EAGER)
	@JsonbTransient
	private List<Task> tasks = new ArrayList<>();

	private static final long serialVersionUID = 1L;
	
	public Project(String code, String description, Date startDate) {
		super();
		this.code = code;
		this.description = description;
		this.startDate = startDate;
	}
	public Project() {
		super();
	    this.tasks = new ArrayList<>();

	}   
	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}   
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}   
	public Date getStartDate() {
		return this.startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
   
	
	public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    // Add task to the project
    public void addTaskToProject(Task task) {
        tasks.add(task);
        task.setProject(this);
    }

    // Remove task from project
    public void removeTaskFromProject(Task task) {
        tasks.remove(task);
        task.setProject(null);
    }
    
}
