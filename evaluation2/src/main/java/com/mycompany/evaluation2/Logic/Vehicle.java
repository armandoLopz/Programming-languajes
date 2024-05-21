/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.evaluation2.Logic;

import java.util.Date;

public abstract class Vehicle {

    private String name, brand;
    private Date year;
    private enum typeCar {
        
        CARRO, CAMIONETA,MOTO
    }

    public Vehicle() {
    }

    public Vehicle(String name, String brand, Date year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }

    @Override
    public String toString() {
        return "Vehicle{" + "name=" + name + ", brand=" + brand + ", year=" + year + '}';
    }
    
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Date getYear() {
        return year;
    }

    public void setYear(Date year) {
        this.year = year;
    }
    
    
}
