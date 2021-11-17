function mostrarHola() {
  mostrar('hola');
}

function mostrarMensajedeSalida() {
  mostrar('adios');
}

function mostrar(v) {
  console.log(v);
}

// function sumarDosNumeros(n1 = 3, n2 = 6) {
//   let resultado = parseInt(n1) + parseInt(n2);
//   let numeros = document.getElementsByClassName('numero');
//   let resultados = document.getElementsByClassName('resultado');
//   for (let i = 0; i < resultados.length; i++) {
//     numeros[i].innerHTML = i + 2;
//     resultados[i].innerHTML = resultado + i;
//   }
// }
// let n1 = prompt('Ingrese un número:');
// let n2 = prompt('Ingrese otro número:');

// sumarDosNumeros(n1, n2);

let nombrePersona = prompt('Ingrese su nombre:');
let edadPersona = prompt('Ingrese su edad:');

function mostrarPersona(nombre, edad) {
  let h1Nombre = document.getElementById('nombre');
  let h1Edad = document.getElementById('edad');

  h1Nombre.innerText = nombre;
  h1Edad.innerText = edad;
}


mostrarPersona(nombrePersona, edadPersona);
let hola = "hola";
"hola".toUpperCase();

hola = "aoe";

"ho.la.oeuoeu".split("."); // ["ho", "la", "oeuoeu"]

console.log("hola"-1, hola.toUpperCase());
// lista nombres de usuarios
let u = ['ntntnth', 'aeaoe', 'mrrcrdrcd'];
for (let i = 0; i < u.length; i++) {
  console.log(u[i]);
}
