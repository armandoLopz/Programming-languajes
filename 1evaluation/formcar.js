import validationFormUser from './validation.js';

const validation = new validationFormUser();
function mostrarFormulario2() {
    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.remove('hidden');
}

document.getElementById('nextBtn').addEventListener('click', function() {

    validation.name = document.getElementById("name").value;
    validation.lastName = document.getElementById("lastName").value;
    validation.idUser = document.getElementById("idUser").value;
    validation.phoneNumber = document.getElementById("phone").value;
    validation.addressUser = document.getElementById("address").value;

    
    event.preventDefault(); 
    mostrarFormulario2();
});

function mostrarFormulario1() {
    document.getElementById('form_car').classList.add('hidden');
    document.getElementById('form_user').classList.remove('hidden');
}

document.getElementById('atras').addEventListener('click', function() {
    event.preventDefault();
    mostrarFormulario1();
});