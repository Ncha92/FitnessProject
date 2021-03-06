package com.ex.model;

import org.hibernate.annotations.Persister;

import javax.persistence.*;

@Entity
public class Person {

    @Id
    private String id;

    private String firstname;

    private String lastname;

    private String username;

    private String email;

    private String password;

    private int maxbench;

    private int maxsquat;

    public Person() {
    }

    public Person(String id, String firstname, String lastname, String username, String email, String password, int maxbench, int maxsquat) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.maxbench = maxbench;
        this.maxsquat = maxsquat;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getMaxbench() {
        return maxbench;
    }

    public void setMaxbench(int maxbench) {
        this.maxbench = maxbench;
    }

    public int getMaxsquat() {
        return maxsquat;
    }

    public void setMaxsquat(int maxsquat) {
        this.maxsquat = maxsquat;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
