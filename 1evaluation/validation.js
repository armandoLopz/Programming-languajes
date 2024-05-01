class validationForm {

    constructor(name, lastName, idUser, phoneNumber, addressUser){

        this.name = name;
        this.lastName = lastName;
        this.idUser = idUser;
        this.phoneNumber = phoneNumber;
        this.addressUser = addressUser;
        
    }
    
    namesValidation(){

        //Se utilizara para las validaciones de nombre y apellido
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

        return lengthAddres <= 35 && lengthAddres >= 2? true : false;
    }

    valueInput(input) {

        const valorInput = input.trim();
        
        return valorInput !== '' &&  valorInput.length >= 2 ? true : false;
    }

    validationAllAtributes(){

        const listMethodAtributes = [this.namesValidation(),this.idUserValidation(), this.phoneNumberValidation(), this.addressUserValidation()]

        const allValid = listMethodAtributes.every(method => method);

        return allValid;
    }
}

const val = new validationForm("ajaj", "aa" , 1 , 2,4);

console.log(val.namesValidation());
console.log("Validacion del objeto malo " + val.validationAllAtributes());

const val2 = new validationForm("Armando", "Lopez", 29911900,4377572, "naguaanagua");

console.log("Validacion del objeto bueno " + val2.validationAllAtributes()); 