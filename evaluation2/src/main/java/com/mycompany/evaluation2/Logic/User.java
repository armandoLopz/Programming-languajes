/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.evaluation2.Logic;

import java.util.ArrayList;

public class User extends person{
    
    private String address, phoneNumber;
    private ArrayList<Vehicle> buyVehicleList, rentVehicleList;
    public User() {
    }

    
    public User(String name, String lastname, int id, String address, String phoneNumber) {
        super(name, lastname, id);
        this.address = address;
        this.phoneNumber = phoneNumber;
    }


    public User(String name, String lastname, int id,String address, String phoneNumber, ArrayList<Vehicle> buyVehicleList, ArrayList<Vehicle> rentVehiclesList ){
        super(name, lastname, id);

        this.address = address;
        this.phoneNumber = phoneNumber;
        this.buyVehicleList = buyVehicleList;
        this.rentVehicleList = rentVehiclesList;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ArrayList<Vehicle> getBuyVehicleList() {
        return buyVehicleList;
    }

    public void setBuyVehicleList(ArrayList<Vehicle> buyVehicleList) {
        this.buyVehicleList = buyVehicleList;
    }

    public ArrayList<Vehicle> getRentVehicleList() {
        return rentVehicleList;
    }

    public void setRentVehicleList(ArrayList<Vehicle> rentVehicleList) {
        this.rentVehicleList = rentVehicleList;
    }
    
}
