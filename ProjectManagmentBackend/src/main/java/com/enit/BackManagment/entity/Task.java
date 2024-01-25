package com.enit.BackManagment.entity;

import java.io.Serializable;
import java.lang.String;
import java.util.Date;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.json.bind.annotation.JsonbTypeAdapter;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
public class Task implements Serializable {

	@Id
	private String code;
	private String description;
	
	@JsonbTypeAdapter(DateAdapter.class)
	private Date startDate;
	
	@JsonbTypeAdapter(DateAdapter.class)
	private Date endDate;
	
	@ManyToOne
	@JoinColumn(name = "project_code",referencedColumnName = "code", nullable=false)
	@JsonbTransient
    private Project project;
	
	
	private static final long serialVersionUID = 1L;
	
	public Task() {
		super();
	}   
	
	public Task(String code, String description, Date startDate, Date endDate) {
		super();
		this.code = code;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
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
	public Date getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Date endDate) {
		//if endDate < startDate than attribute the same value to both dates 
		if (endDate.before(startDate)) {
            this.endDate = startDate;
        } else {
            this.endDate = endDate;
        }
	}
   
	
	public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
