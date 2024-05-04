const tableDom = document.getElementById("inventario");
localStorage.setItem("table", tableDom);
function mostrarFormulario1() {

    document.getElementById('form_user').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('table').classList.add('hidden');
}

document.getElementById('add').addEventListener('click',function(){
    event.preventDefault();
    mostrarFormulario1();
   
});
function mostrarFormulario2() {

    document.getElementById('form_car').classList.remove('hidden');
    document.getElementById('form_user').classList.add('hidden');
   
}
document.getElementById('nextBtn').addEventListener('click',function(){
 event.preventDefault();
 mostrarFormulario2();




})
function regresar() {

    document.getElementById('form_user').classList.remove('hidden');
    document.getElementById('form_car').classList.add('hidden');
   
}
document.getElementById('atras').addEventListener('click',function(){
    event.preventDefault();
    regresar();
   
   
   
   
   })