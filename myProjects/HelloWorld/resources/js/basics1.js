
// (( VARIABLES ))

// Variable simple

var persona = {
    nombre: 'Miguel Angel',
    apellido: 'Abad',
    edad: '23',
};

// Variable objeto

var amigos = [
    {nombre: 'Pepelu', edad: 36,},
    {nombre: 'Jaime', edad: 35},
    {nombre: 'Guillermo', edad: 36},
    {nombre: 'Nacho', edad: 35},
];

/* ------------------------------------------------------------- */


// (( FUNCIONES ))

function miPrimeraFuncion(){
    return 23;
};
// Función con parámetros (funciones declarativas) 
function miSegundaFuncion (a,b){ 
    return a + b;
};

// Al llamar a la función le pasaríamos los parámetros que queremos:
console.log(miPrimeraFuncion(2,2));

function miTerceraFuncion(a,b){
    var mul = a * b;
    return mul - 2;
};

// Funciones de tipo Expresión (guardar la función en una variable)

var miPrimeraFuncionExpresion = function(){
    return 'Hello World';
};

// Template Strings -> `${parametro}`

function miNombre(nom){
    var nombre = `${nom}`;
    return nombre;
};

var ageUser = function(age){
    return `Tu edad es: ${age} años`;
};



/* ------------------------------------------------------------- */

// (( Operadores unitarios ))

!true; //NO verdadero

3 == '3'; // operador de igualdad dinámico -> arrojaría true como valor de retorno
3 === 3; // operador estricto -> arrojaría true pero en el anterior ejemplo arrojaría false

// comparadores ->    <   >   >=   <= 

// && -> y
// || -> o

var edad = 34;
edad++;
edad += 4;

/* ------------------------------------------------------------- */

// (( CONDICIONALES))

var edad = 18;
if (edad === 18){
    console.log('Puedes votar! Es tu primera vez!');
} else if (edad > 18){
    console.log('Puedes votar!');
} else {
    console.log('NO puedes votar! No eres mayor de edad');
};

/* ------------------------------------------------------------- */

// (( BLUCLES / LOOPS))

var amigos = ['Pepelu', 'Jaime', 'Guillermo', 'Nacho'];

function saludarAmigos(amigo){
    console.log(`Hola ${amigo}!`);
};

// Bucle FOR

for(var i = 0; i < amigos.length; i++){
    saludarAmigos(amigos[i]);
};

// Bucle FOR alternativo

for (amigo of amigos){
    saludarAmigos(amigo);
};

/* ------------------------------------------------------------- */

// (( MÉTODOS ))

var ejemploUno = 'Hello World!';

console.log(ejemploUno.toUpperCase());  // Pinta -> HOLA MUNDO

console.log(ejemploUno.toLowerCase()); // Pinta -> hola mundo

// ...para más métodos -> https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Useful_string_methods

var secuencia = [1, 2, 3];

secuencia.push(4); // Método PUSH -> Añade el valor al final de un string

console.log(secuencia);

secuencia.pop(); // Método POP -> Quita el último elemento


var frutas = ['mango', 'fresa', 'plátano', 'naranja'];

var nuevaLong = frutas.unshift('mandarina'); // Método UNSHIFT -> Añade al índice [0] el parámetro deseado

console.log(frutas);

var borrarFruta = frutas.shift('mandarina'); // Método SHIFT -> Quita del índice [0] el parámetro deseado








