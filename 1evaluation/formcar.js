import validationFormUser from './validation.js';

const validation = new validationFormUser();
function mostrarFormulario2() {
    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.remove('hidden');
}

document.getElementById('nextBtn').addEventListener('click', function() {

    console.log("Nombre que viene del DOM " + document.getElementById("name").value );
    validation.name = document.getElementById("name").value;
    validation.lastName = document.getElementById("lastName").value;
    validation.idUser = document.getElementById("idUser").value;
    validation.phoneNumber = document.getElementById("phone").value;
    validation.addressUser = document.getElementById("address").value;


    console.log("VALORES SETEADOS APARTIR DEL FORM");
    console.log(validation.name + " " + validation.lastName + " " + validation.idUser + " " + validation.phoneNumber + " " + validation.addressUser);
    
    console.log("SE VALIDARON TODOS LOS ATRIBUTOS" + validation.validationAllAtributes());

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