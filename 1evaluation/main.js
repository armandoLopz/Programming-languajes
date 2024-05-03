const tableDom = document.getElementById("inventario");
localStorage.setItem("table", tableDom);

document.getElementById('add').addEventListener('click',function(){
    event.preventDefault();
    window.location.href="formCar.html";
});