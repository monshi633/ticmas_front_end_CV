/*
document.getElementById("boton").onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Texto cambiado";
}
*/
document.getElementById("boton").addEventListener("click", function() {
    console.log("Hola desde EventListener");
    document.getElementById("demo").innerHTML = "Texto cambiado";
});

document.getElementById("boton_color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#FF0000"
});

document.getElementById("boton_ocultar").addEventListener("click", function() {
    document.getElementById("demo").style.display = "None";
});

document.getElementById("boton_mostrar").addEventListener("click", function() {
    document.getElementById("demo").style.display = "block";
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
}