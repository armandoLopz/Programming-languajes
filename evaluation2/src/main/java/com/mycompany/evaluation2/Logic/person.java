/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.evaluation2.Logic;

public abstract class person {

    private String name,lastname,id;

    public person() {
    }

    public person(String name, String lastname, String id) {
        this.name = name;
        this.lastname = lastname;
        this.id = id;
    }

    @Override
    public String toString() {
        return "person{" + "name=" + name + ", lastname=" + lastname + ", id=" + id + '}';
    }
    
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    
}
