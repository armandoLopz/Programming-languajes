import { person, car, validationFormUser,validationFormCar, listData, validationListData } from './validation.js';

const user = new person();
const car1 = new car();

const validationUser = new validationFormUser(user);
const validationCar = new validationFormCar(car1);

const listFilaData = [];
//Prueba

const setPersons = new Set();
const setIdCars = new Set();

const data = new listData(setPersons, setIdCars);
const validationData = new validationListData(data);

//
const form_car = document.getElementById("form2");
const tableListCars = document.getElementById("inventario");

function mostrarFormulario1() {
    
    document.getElementById('form_user').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('table').classList.add('hidden');
}

function mostrarFormulario2(ownerCar) {

    car1.ownerCar = ownerCar;

    document.getElementById('form_car').classList.remove('hidden');
    document.getElementById('form_user').classList.add('hidden');
   
}

function showTable() {

    document.getElementById("form1").reset();
    document.getElementById("form2").reset();

    document.getElementById('form_user').classList.add('hidden');
    document.getElementById('form_car').classList.add('hidden');

    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('table').classList.remove('hidden');
}

function addObjectToSet(car1) {
    
    data.addPerson(car1.ownerCar);
    data.addIdCar(car1.idCar);
}

function addElementsTable(car) {
    
    const fila = document.createElement('tr');
    
    const celdaIdCar = document.createElement('td');
    celdaIdCar.textContent = car.idCar;
    fila.appendChild(celdaIdCar);
    
    const celdaNamesUser = document.createElement('td');
    celdaNamesUser.textContent = car.ownerCar.name + " " + car.ownerCar.lastName ;
    fila.appendChild(celdaNamesUser);

    const celdaBrandModelCar = document.createElement('td');
    celdaBrandModelCar.textContent = car.brandCar + " " + car.modelCar;
    fila.appendChild(celdaBrandModelCar);

    const celdaFoto = document.createElement('td');
    celdaFoto.textContent = car.photoCar;
    fila.appendChild(celdaFoto);

    const celdaColor = document.createElement('td');
    celdaColor.textContent = car.colorCar;
    fila.appendChild(celdaColor);

    //Se agregan los botones a la tabla 
    addButtonsTable(fila);
    
    
    // Agrega la fila a la tabla
    tableListCars.appendChild(fila)
    showTable();
}

function addButtonsTable(fila) {

    const celdaActions = document.createElement('td');
    celdaActions.classList.add("celda");
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("eliminar");
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {

        this.parentElement.parentElement.remove(); 
      });

    celdaActions.appendChild(deleteButton);

    const readdButton = document.createElement('button');
    readdButton.classList.add("leer");
    readdButton.textContent = 'Ver';

    readdButton.addEventListener('click', ()=>{
            
        
        
    });
    celdaActions.appendChild(readdButton);

    const editButton = document.createElement('button');
    editButton.classList.add("actualizar")
    editButton.textContent = 'Actualizar';
    editButton.addEventListener('click', function() {
        fila.remove();
    
        mostrarFormulario1()
        mostrarFormulario2(car1.ownerCar)
    
        // Actualizar los datos del formulario de usuario con los datos de la fila seleccionada
        document.getElementById("name").value = car1.ownerCar.name;
        document.getElementById("lastName").value = car1.ownerCar.lastName;
        document.getElementById("idUser").value = car1.ownerCar.idUser;
        document.getElementById("phone").value = car1.ownerCar.phoneNumber;
        document.getElementById("address").value = car1.ownerCar.addressUser;
    
        // Actualizar el objeto 'user' con los datos de la fila seleccionada
        user.name = car1.ownerCar.name;
        user.lastName = car1.ownerCar.lastName;
        user.idUser = car1.ownerCar.idUser;
        user.phoneNumber = car1.ownerCar.phoneNumber;
        user.addressUser = car1.ownerCar.addressUser;
    });
    

    celdaActions.appendChild(editButton);
    
    fila.appendChild(celdaActions);
   
}


function regresar() {
    
    document.getElementById('form_user').classList.remove('hidden');
    document.getElementById('form_car').classList.add('hidden');
    
}

function filterModels() {
    const selectBrand = document.getElementById('marca').value;
    const models = getModelsForBrand(selectBrand); 

    const selectModel = document.getElementById('modelo');
    selectModel.innerHTML = ''; 

    models.forEach((models) => {
        const option = document.createElement('option');
        option.value = models;
        option.textContent = models;
        selectModel.appendChild(option);
    });
}

function addTableSee(car) {

    //Datos usuario
    const infoTable = document.getElementById("completeInfo");

    document.getElementById("completeName").textContent = car.ownerCar.name + " " + car.ownerCar.lastName; 
    document.getElementById("idSee").textContent = car.ownerCar.idUser;
    document.getElementById("phoneSee").textContent = car.ownerCar.phoneNumber;
    document.getElementById("addressSee").textContent = car.ownerCar.addressUser;

    //Datos carro

    document.getElementById("idCarSee").textContent = car.idCar; 
    document.getElementById("yearCarSee").textContent = car.yearCar;
    document.getElementById("brandCarSee").textContent = car.brandCar;
    document.getElementById("modelCar").textContent = car.modelCar;

    return infoTable;
    
}
function getModelsForBrand(marca) {
    const brandModels = new Map([
        ['toyota', ['Corolla', 'Camry', 'RAV4','Hilux','Fortuner']],
        ['honda', ['Civic', 'Accord', 'CR-V', 'Brio','HR-V']],
        
    ]);

    return brandModels.get(marca) || [];
}

document.getElementById('add').addEventListener('click',function(){
    event.preventDefault();
    mostrarFormulario1();
   
});
document.getElementById('marca').addEventListener('change', filterModels);

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


document.getElementById('atras').addEventListener('click',function(){
    event.preventDefault();
    regresar();
   
})

form_car.addEventListener('submit', (event) => {
    event.preventDefault();
    
    car1.idCar = document.getElementById("idCar").value;
    car1.yearCar = document.getElementById("yearCar").value;
    car1.brandCar = document.getElementById("marca").value;
    car1.modelCar = document.getElementById("modelo").value;
    car1.colorCar = document.getElementById("colorCar").value;
    
    const fileInput = document.getElementById('filePhoto');

    fileInput.addEventListener('change', function() {

        const selectedFile = this.files[0];
        car1.photoCar = selectedFile.name;
        
    });
    
    const correctDataCar = validationCar.validationAllAtributes();
    console.log("REPEAT DATA CAR " + validationData.notRepeatIdCar(car1.idCar));

    console.log("REPEAT DATA USER  " + validationData.notRepeatPerson(car1.ownerCar.name, car1.ownerCar.lastName, car1.ownerCar.idUser));
    
    //const repeatData =  validationData.notRepeatIdCar(car1.idCar, [car1.ownerCar.name, car1.ownerCar.lastName, car1.ownerCar.idUser]);
    //console.log("RESULTADO DE VALIDAR AMBOS METODOS  " + repeatData);
    correctDataCar === true
  ? (() => {
      addElementsTable(car1);
      addObjectToSet(car1);
      addTableSee(car1)
      
    })()
  : alert("Verifique sus datos");         
});
