function mostrarFormulario2() {
    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.remove('hidden');
}

document.getElementById('nextBtn').addEventListener('click', function() {
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
});import './validation.js';

function mostrarFormulario2() {
    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.remove('hidden');
}

document.getElementById('nextBtn').addEventListener('click', function() {
    
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


const validation = new va