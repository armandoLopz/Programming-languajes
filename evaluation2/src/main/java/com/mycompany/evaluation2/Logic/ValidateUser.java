/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.evaluation2.Logic;

public class ValidateUser {
    
    private User user;

    public ValidateUser() {
    }

    public ValidateUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    //METHODS

    public boolean validateId(){

        return user.getId() >= 1000000 && user.getId() <= 35000000? true : false;
    }

    public boolean validateNumber(){

        return user.getPhoneNumber().length() == 11 ? true : false; 
    }
}
