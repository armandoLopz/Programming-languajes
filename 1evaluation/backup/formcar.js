import { person, car, validationFormUser,validationFormCar } from './validation.js';

const user = new person();
const car1 = new car();

const validationUser = new validationFormUser(user);
const validationCar = new validationFormCar(car1);

const form_car = document.getElementById("form2");
const tableListCars = document.getElementById("inventario");

function mostrarFormulario1() {

    document.getElementById('form_car').classList.add('hidden');
    document.getElementById('form_user').classList.remove('hidden');
}

function mostrarFormulario2(ownerCar) {

    //Se asigna el propietario del carro
    car1.ownerCar = ownerCar;
    
    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.remove('hidden');
}

function addElementsTable(car) {
    console.log("hola desde la funcion");
    const fila = document.createElement('tr');
    console.log("Se esta ejecutando la funcion");
    const celdaCedula = document.createElement('td');
    celdaCedula.textContent = car.idCar;
    fila.appendChild(celdaCedula);
    
    const celdaYear = document.createElement('td');
    celdaYear.textContent = car.yearCar;
    fila.appendChild(celdaYear);

    const celdaModelo = document.createElement('td');
    celdaModelo.textContent = car.brandCar;
    fila.appendChild(celdaModelo);

    const celdaFoto = document.createElement('td');
    celdaFoto.textContent = car.photoCar;
    fila.appendChild(celdaFoto);

    const celdaColor = document.createElement('td');
    celdaColor.textContent = car.colorCar;
    fila.appendChild(celdaColor);

    
    // Agrega la fila a la tabla
    tableListCars.appendChild(fila)
    console.log("Se agrego los datos");
    //Se muestra la pag principal
    //form_car.submit()
}

document.getElementById('nextBtn').addEventListener('click', function() {

    event.preventDefault(); 

    user.name = document.getElementById("name").value;
    user.lastName = document.getElementById("lastName").value;
    user.idUser = document.getElementById("idUser").value;
    user.phoneNumber = document.getElementById("phone").value;
    user.addressUser = document.getElementById("address").value;

    const correctDataUser  = validationUser.validationAllAtributes()
    
    correctDataUser == true ? mostrarFormulario2(user) : alert("Verifique sus datos");
});

document.getElementById('atras').addEventListener('click', function() {
    event.preventDefault();
    mostrarFormulario1();
});

form_car.addEventListener('submit', (event) => {
    event.preventDefault();
    
    car1.idCar = document.getElementById("idCar").value;
    car1.yearCar = document.getElementById("yearCar").value;
    car1.brandCar = document.getElementById("brandCar").value;
    car1.colorCar = document.getElementById("colorCar").value;
    car1.photoCar = document.getElementById("photoCar").value;

    const correctDataCar = validationCar.validationAllAtributes()
    console.log("Se setearon los datos");
    correctDataCar == true ? addElementsTable(car1) : alert("Verifique sus datos"); 
    
});