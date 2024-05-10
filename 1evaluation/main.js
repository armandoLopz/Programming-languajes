import { person, car, validationFormUser,validationFormCar } from './validation.js';

const user = new person();
const car1 = new car();

const validationUser = new validationFormUser(user);
const validationCar = new validationFormCar(car1);

//
const form_car = document.getElementById("form2");
const tableListCars = document.getElementById("inventario");

//dictionary 
const  corolla = document.getElementById("corollaPhoto");
const camry = document.getElementById("camryPhoto");
const rav4 = document.getElementById("rav4Photo");

const accord = document.getElementById("accordPhoto");
const crv = document.getElementById("crvPhoto");
const civic = document.getElementById("civicPhoto");

const spark = document.getElementById("sparkPhoto");
const cruze = document.getElementById("cruzePhoto");
const silverado = document.getElementById("silveradoPhoto");

const escape = document.getElementById("escapePhoto");
const f150 = document.getElementById("f150Photo");
const mustang = document.getElementById("mustangPhoto");

const sentra = document.getElementById("sentraPhoto");
const versa = document.getElementById("versaPhoto");
const rogue = document.getElementById("roguePhoto");


const images = {

    corolla: corolla.src,
    camry: camry.src,
    rav4: rav4.src,
    accord: accord.src,
    crv: crv.src,
    civic: civic.src,
  
    // Chevrolet
    spark: spark.src,
    cruze: cruze.src,
    silverado: silverado.src,
  
    // Ford
    escape: escape.src,
    f150: f150.src,
    mustang: mustang.src,
  
    // Nissan
    sentra: sentra.src,
    versa: versa.src,
    rogue: rogue.src,
  };

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
    celdaNamesUser.textContent = car.ownerCar.name.toUpperCase() + " " + car.ownerCar.lastName.toUpperCase() ;
    fila.appendChild(celdaNamesUser);

    const celdaBrandModelCar = document.createElement('td');
    celdaBrandModelCar.textContent = car.brandCar.toUpperCase() + " " + car.modelCar.toUpperCase();
    fila.appendChild(celdaBrandModelCar);

    const celdaFoto = document.createElement('td');
    celdaFoto.textContent = car.photoCar;
    fila.appendChild(celdaFoto);

    const celdaColor = document.createElement('td');
    celdaColor.style.backgroundColor = car1.colorCar;
    
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
        readdButton.addEventListener('click', () => {
            
            addTableSee(car1);
            document.querySelector('.informacion').classList.remove('hidden');
            document.getElementById('menu').classList.add('hidden');
            document.getElementById('table').classList.add('hidden');
            
            document.getElementById('exit_user').addEventListener('click',() =>{
                document.querySelector('.informacion').classList.add('hidden');
                document.getElementById('menu').classList.remove('hidden');
                document.getElementById('table').classList.remove('hidden');
            
            })
           
        
        });
        
 
    celdaActions.appendChild(readdButton);

    const editButton = document.createElement('button');
    editButton.classList.add("actualizar")
    editButton.textContent = 'Actualizar';
    editButton.addEventListener('click', function() {
        fila.remove();
    
        mostrarFormulario1()
    
        // Actualizar los datos del formulario de usuario con los datos de la fila seleccionada
        document.getElementById("name").value = car1.ownerCar.name;
        document.getElementById("lastName").value = car1.ownerCar.lastName;
        document.getElementById("idUser").value = car1.ownerCar.idUser;
        document.getElementById("phone").value = car1.ownerCar.phoneNumber;
        document.getElementById("address").value = car1.ownerCar.addressUser;

        document.getElementById("idCar").value = car1.idCar ;
        document.getElementById("yearCar").value = car1.yearCar;
        document.getElementById("marca").value = car1.brandCar;
        document.getElementById("modelo").value = car1.modelCar;
        document.getElementById("colorCar").value = car1.colorCar;
    
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
    const image = document.getElementById("imageSee");

    document.getElementById("completeName").textContent = car.ownerCar.name.toUpperCase() + " " + car.ownerCar.lastName.toUpperCase(); 
    document.getElementById("idSee").textContent = car.ownerCar.idUser;
    document.getElementById("phoneSee").textContent = car.ownerCar.phoneNumber;
    document.getElementById("addressSee").textContent = car.ownerCar.addressUser.toUpperCase();

    //Datos carro
    document.getElementById("idCarSee").textContent = car.idCar; 
    document.getElementById("yearCarSee").textContent = car.yearCar;
    document.getElementById("brandCarSee").textContent = car.brandCar.toUpperCase();
    document.getElementById("modelCarSee").textContent = car.modelCar.toUpperCase();

    image.src = images[car.modelCar.toLowerCase()];
}

function getModelsForBrand(marca) {
    const brandModels = new Map([
      ['toyota', ['Corolla', 'Camry', 'RAV4']],
      ['honda', ['Civic', 'Accord', 'CR-V']],
      ['nissan', ['Sentra', 'Versa', 'Rogue']], 
      ['ford', ['F-150', 'Escape', 'Mustang']],
      ['chevrolet', ['Spark', 'Cruze', 'Silverado']]
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

    correctDataCar === true
  ? (() => {
      addElementsTable(car1);
      //addObjectToSet(car1);
      addTableSee(car1)
      
    })()
  : alert("Verifique sus datos");         
});
