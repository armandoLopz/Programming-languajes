class validationForm {

    constructor(name, lastName, idUser, phoneNumber, addressUser){

        this.name = name;
        this.lastName = lastName;
        this.idUser = idUser;
        this.phoneNumber = phoneNumber;
        this.addressUser = addressUser;
        
    }
    
    namesValidation(){

        //Se utilizara para las validaciones de nobre y apellido
        const correctNames = [this.name, this.lastName].filter(this.valueInput);
        
        return correctNames.length === 2 ? true : false;
    }

    idUserValidation(){

        const idText = this.idUser.toString().length;

        return idText >= 7 && idText <9 ? true : false;
   
    }

    phoneNumberValidation(){

        const phoneNumberText = this.phoneNumber.toString().length;

        return phoneNumberText === 7 ? true : false;
    }

    addressUserValidation(){

        const lengthAddres = this.addressUser.toString().length;

        return lengthAddres <= 35 ? true : false;
    }

    valueInput(input) {
        const valorInput = input.trim();
        
        return valorInput !== '';
    }

    
}

const val = new validationForm("Armando","",0,4198159,"NAGUANAGUA, TERRAZAS DE PARAMACAY");

console.log(val.namesValidation());

console.log(val.idUserValidation());

console.log(val.phoneNumberValidation());

console.log(val.addressUserValidation());