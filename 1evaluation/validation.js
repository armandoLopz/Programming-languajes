export default class validationFormUser {

    constructor(name, lastName, idUser, phoneNumber, addressUser) {
      this.name = name;
      this.lastName = lastName;
      this.idUser = idUser;
      this.phoneNumber = phoneNumber;
      this.addressUser = addressUser;
    }
  
    // Getters
    get getName() {
      return this._name;
    }
  
    get getLastName() {
      return this._lastName;
    }
  
    get getIdUser() {
      return this._idUser;
    }
  
    get getPhoneNumber() {
      return this._phoneNumber;
    }
  
    get getAddressUser() {
      return this._addressUser;
    }
  
    // Setters
    set setName(newName) {
      this._name = newName;
    }
  
    set setLastName(newLastName) {
      this._lastName = newLastName;
    }
  
    set setIdUser(newIdUser) {
      this._idUser = newIdUser;
    }
  
    set setPhoneNumber(newPhoneNumber) {
      this._phoneNumber = newPhoneNumber;
    }
  
    set setAddressUser(newAddressUser) {
      this._addressUser = newAddressUser;
    }

    
    namesValidation() {
      //Se utilizara para las validaciones de nombre y apellido
      const correctNames = [this.name, this.lastName].filter(this.valueInput);
      return correctNames.length === 2 ? true : false;
    }
  
    idUserValidation() {
      const idText = this.idUser.toString().length;
      return idText >= 7 && idText < 9 ? true : false;
    }
  
    phoneNumberValidation() {
      const phoneNumberText = this.phoneNumber.toString().length;
      return phoneNumberText === 7 ? true : false;
    }
  
    addressUserValidation() {
      const lengthAddres = this.addressUser.toString().length;
      return lengthAddres <= 35 && lengthAddres >= 2 ? true : false;
    }
  
    valueInput(input) {
      const valorInput = input.trim();
      return valorInput !== '' && valorInput.length >= 2 ? true : false;
    }
  
    validationAllAtributes() {
      const listMethodAtributes = [
        this.namesValidation(),
        this.idUserValidation(),
        this.phoneNumberValidation(),
        this.addressUserValidation(),
      ];
      const allValid = listMethodAtributes.every(method => method);
      return allValid;
    }
  }