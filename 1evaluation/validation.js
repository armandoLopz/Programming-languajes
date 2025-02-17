export class person{
  
  constructor(name, lastName, idUser, phoneNumber, addressUser) {
    this.name = name;
    this.lastName = lastName;
    this.idUser = idUser;
    this.phoneNumber = phoneNumber;
    this.addressUser = addressUser;
  }

  //Methods

  toString() {
    return `Persona:
    Nombre: ${this.name}
    Apellido: ${this.lastName}
    ID: ${this.idUser}
    Teléfono: ${this.phoneNumber}
    Dirección: ${this.addressUser}`;
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
}

export class car{

  constructor( idCar, yearCar,brandCar, modelCar, colorCar,photoCar,ownerCar){

    this.idCar = idCar;
    this.yearCar = yearCar;
    this.brandCar = brandCar;
    this.modelCar = modelCar;
    this.colorCar = colorCar;
    this.photoCar = photoCar;
    this.ownerCar = ownerCar
  }

  //Methods 

  toString() {
    return `Carro:
    ID: ${this.idCar}
    Año: ${this.yearCar}
    Modelo: ${this.brandCar}
    Color: ${this.colorCar}
    Foto: ${this.photoCar}

    Propietario: ${this.ownerCar}`;
  }

  //Getters 

  get getIdCar() {
    return this._idCar;
  }
  
  get getYearCar() {
      return this._yearCar;
  }

  get getbrandCar() {
    return this._brandCar;
  }

  get getColorCar() {
      return this._colorCar;
  }

  get getOwnerCar() {
    return this._ownerCar;
}

  //Setters 

  set setIdCar(newIdCar) {
      this._idCar = newIdCar;
  }

  set setYearCar(newYearCar) {
      this._yearCar = newYearCar;
  }

  set setbrandCar(newbrandCar) {
      this._brandCar = newbrandCar;
  }

  set setColorCar(newColorCar) {
      this._colorCar = newColorCar;
  }

  set setOwnerCar(newOwnerCar) {
    this._ownerCar = newOwnerCar;
}
}

export class validationFormUser {

    constructor(person) {
      
      this.person = person;
    }    
    namesValidation() {
      //Se utilizara para las validaciones de nombre y apellido
      const correctNames = [this.person.name, this.person.lastName].filter(this.valueInput);
      return correctNames.length === 2 ? true : false;
    }
  
    idUserValidation() {
      const idText = this.person.idUser.toString().length;
      return idText >= 7 && idText < 9 ? true : false;
    }
  
    phoneNumberValidation() {
      const phoneNumberText = this.person.phoneNumber.toString().length;
      return phoneNumberText === 7 ? true : false;
    }
  
    addressUserValidation() {
      const lengthAddres = this.person.addressUser.toString().length;
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

 export class validationFormCar{

    constructor(car){

      this.car = car;
    }

    idCarValidation(){

      return this.car.idCar.length === 7 ? true : false;

    }

    yearCarValidation(){

      return this.car.yearCar >= 1800 && this.car.yearCar <= 2025 ? true : false;
    }

    modelValidation(){

      return this.car.brandCar !== "entry" ? true : false;

    }

    validationAllAtributes() {
      const listMethodAtributes = [
        this.idCarValidation(),
        this.yearCarValidation(),
        this.modelValidation()
      ];

      const allValid = listMethodAtributes.every(method => method);
      return allValid;
    }
  }

export class user {

  constructor(name, lastName, id){

    this.name = name;
    this.lastName = lastName;
    this.id = id;
  }
}

export class listData {

  constructor(listPerson, setIdCar){

    this.listPerson = listPerson;
    this.setIdCar = setIdCar;
  
  }

  //METHODS

  addPerson(person){

    this.listPerson.add(person);
    
  }

  addIdCar(idCar){

    this.setIdCar.add(idCar);
  }
}

export class validationListData{

  constructor(listData){

    this.listData = listData;
  }

  notRepeatIdCar(id){
    
    return this.listData.setIdCar.has(id);
  }

  notRepeatPerson(name, lastName, idUser) {
      
    this.listData.listPerson.forEach((person) => {
      person.idUser === idUser && (person.name !== name || person.lastName !== lastName) ? true: false  
    });
  }

  noRepeatData(id, [name,lastName,idUser]){

    const listMethodAtributes = [
      this.notRepeatIdCar(id),
      this.notRepeatPerson([name,lastName,idUser])
    ];

    const allValid = listMethodAtributes.every(method => method);
    return allValid;
  }
  
}