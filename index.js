/* let nombre = "Nataly";
let edad = 34   ;
let saludo = nombre + " " + "tienes" + " " + edad + " " + "años de edad";

console.log(nombre + " " + "tienes" + " " + edad); */

/* let nombre = prompt ("Ingresa el Nombre");
let edad = prompt ("Ingresa tu edad");

let mensaje = (nombre + " " + "tienes " + " " + edad + " " + " años de edad");

alert (mensaje); */

/* let entrada = prompt ("Ingresa una letra");
let salida = ( entrada + " Ingresada");

alert (salida); */

/* let numberOne = prompt('Ingrese el primer numero');
let numberTwo = prompt('Ingresa el segundo numero');
let suma = Number(numberOne) + Number(numberTwo);
alert (suma); */

/* let edad = Number(prompt("Por fabor ingresa tu edad"));

if ( edad < 15){
    alert ("Lo siento no puedes ingresar");
}else if ( edad < 18){
    alert ("Puedes ingresar acompañado con un adulto");
} else {
    alert ("Felicidades puedes ingresar");
} */

/* let Nombre = (prompt("Ingrese su nombre"));

if (Nombre !="") {
    alert (`Hola ${Nombre}`);

} */
/* 
for (let i = 0; i < 100; i++){
    console.log(i);
}

 */
/* 
for (let turno = 1; turno <= 10; turno++){
    let nombre = prompt("Ingrese su nombre para signar un turno");
    let mensaje = `Turno #${turno} Nombre: ${nombre}`;
{
    alert (mensaje);
}
    
} */

/* let numero = parseInt(prompt("Ingrese un numero porfi"));

if(numero % 2 === 0){
    alert("Este es un numero par ok");
}else{
    alert("Este numero no es par loco");
} */

/* function saludar() {
    let nombre = prompt("Ingresa tu nombre");
    let mensaje = `Hola ${nombre}`;
    alert (mensaje);
}

saludar(); */

/*function saludar(){
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert (mensaje);
}

saludar();

const personal = {primerNombre: "Juan", segundoNombre: "Pedro", primerApellido: "Camejo", segundoApellido: "Lira", edad: "38", fechaNac: "09/01/1986" };

console.log(personal["segundoNombre"]);*/

function Usuario (info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
    this.color = info.color;
    this.altura = info.altura;
}

const usuario1 = new Usuario (
    {
    nombre: "Carlos",
    edad: 35,
    color: "blanco",
    direccion: "Av",
    altura: 15
    }
)

console.log (usuario1);