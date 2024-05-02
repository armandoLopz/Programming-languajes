import { person, car, validationFormUser,validationFormCar } from './validation.js';

const user = new person();
const car1 = new car();

const validationUser = new validationFormUser(user);
const validationCar = new validationFormCar(car1);


function mostrarFormulario1() {

    document.getElementById('form_car').classList.add('hidden');
    document.getElementById('form_user').classList.remove('hidden');
}

function mostrarFormulario2(ownerCar) {

    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.remove('hidden');
}

document.getElementById('nextBtn').addEventListener('click', function() {

    event.preventDefault(); 

    user.name = document.getElementById("name").value;
    user.lastName = document.getElementById("lastName").value;
    user.idUser = document.getElementById("idUser").value;
    user.phoneNumber = document.getElementById("phone").value;
    user.addressUser = document.getElementById("address").value;

    const correctData  = validationUser.validationAllAtributes()
    
    correctData == true ? mostrarFormulario2(user) : alert("Verifique sus datos");
});

document.getElementById('atras').addEventListener('click', function() {
    event.preventDefault();
    mostrarFormulario1();
});