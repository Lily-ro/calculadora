const pantalla = document.getElementById("pantalla");

//funcion para agregar numeros y operaciones
function agregar(valor){
pantalla.value += valor;
}

//funcion para borrar
function limpiar(){
pantalla.value = "";
}

//función para calcular
function calcular(){
try{

//evaluacion de operacion matematica
pantalla.value = eval(pantalla.value);
}catch{
pantalla.value = "Error";
}
}


document.addEventListener("keydown",function(e){

//elemento para agregar operaciones en pantallas
if("0123456789+-*/.".includes(e.key)){
agregar(e.key);
}

//elemento para ejecutar operación
if(e.key==="Enter"){
calcular();
}

//borrador de caracteres
if(e.key==="Backspace"){
pantalla.value = pantalla.value.slice(0,-1);
}

});