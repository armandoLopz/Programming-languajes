class validationForm {

    constructor(name, lastName, idUser, cellphone, addressUser){

        this.name = name;
        this.lastName = lastName;
        this.idUser = idUser;
        this.cellphone = cellphone;
        this.addressUser = addressUser;
        
    }
    
    namesValidation(){

        //Se utilizara para las validaciones de nobre y apellido
        const correctNames = [this.name, this.lastName].filter(this.valueInput);
        
        return correctNames.length === 2 ? true : false;
    }

    valueInput(input) {
        const valorInput = input.trim();
        
        return valorInput !== '';
    }
}

const val = new validationForm("Armando","",2,2,2);

console.log(val.namesValidation());