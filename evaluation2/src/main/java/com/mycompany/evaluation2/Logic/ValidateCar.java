package com.mycompany.evaluation2.Logic;

public class ValidateCar {
    
    private Vehicle vehicle;
    
    public ValidateCar(){

    }

    public ValidateCar(Vehicle vehicle){

        this.vehicle = vehicle;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public boolean validateIdCar(){

        return vehicle.getId().length() == 7 ? true : false;
    }
}
