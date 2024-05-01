class validationForm {

    constructor(name, lastName, idUser, phoneNumber, addressUser){

        this.name = name;
        this.lastName = lastName;
        this.idUser = idUser;
        this.phoneNumber = phoneNumber;
        this.addressUser = addressUser;
        
    }
    
    // Getters
    get name() {
        return this._name;
    }

    get lastName() {
        return this._lastName;
    }

    get idUser() {
        return this._idUser;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    get addressUser() {
        return this._addressUser;
    }

    // Setters
    set name(newName) {
        this._name = newName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
    }

    set idUser(newIdUser) {
        this._idUser = newIdUser;
    }

    set phoneNumber(newPhoneNumber) {
        this._phoneNumber = newPhoneNumber;
    }

    set addressUser(newAddressUser) {
        this._addressUser = newAddressUser;
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