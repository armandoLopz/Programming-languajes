/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.evaluation2.Logic;

import java.util.Date;

public class Truck extends Vehicle{
    
    private String model,typeVehicle;
    private User owner;
    public Truck(){
        
    }
    
    public Truck(String name, String brand,String id, Date year, String model, String typeVehicle, User owner){
        
        super(name,brand,id,year);
        
        this.owner = owner;
        this.model = model;
        this.typeVehicle = typeVehicle;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }
    
    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getTypeVehicle() {
        return typeVehicle;
    }

    public void setTypeVehicle(String typeVehicle) {
        this.typeVehicle = typeVehicle;
    }
    
    
}
