  // String Constant Concatenation
  const greetingFirst = 'Hello World';
  console.log('Hello First ' + greetingFirst);

  // Arrow Function
  const greetingSecond = function(name) {
    return 'Hello Second ' + name;
  }
  console.log(greetingSecond('John'));
  // Arrow Function without text Function
  const greetingThird = (name) => {
    return `Hello Third-- ${name}`;
    //|1234567890'¿¡?=)(/&%$#"!°¬|@·~€{[]}^*¨´+`-_:;,.<>ºª
  }
  console.log(greetingThird('John'));
  // Arrow Function without text Function and without parentheses
  const greetingFourth = name => {
    return `Hello Fourth ${name}`;
  }
  console.log(greetingFourth('John'));
  // Arrow Function Implicit Return
  const greetingFifth = name => `Hello Fifth ${name}`;
  console.log(greetingFifth('John'));
  // Arrow Function Implicit Return two parameters
  const greetingSixth = (name,lastName) => `Hello Sixth ${name} ${lastName}`;
  console.log(greetingSixth('John','Avila'));

  // Lexical Binding
  const lexicalUniqueMethod = {
    name: 'John',
    lastName: 'Avila',
    messageWithTradicionalFunction: function (message) {
      console.log(`Unique Method: My name is ${this.name} ${this.lastName} and my message is: ${message} `);
    }
  };
  lexicalUniqueMethod.messageWithTradicionalFunction('Show Unique Method');

  // Lexical Binding with Arrow Function
  const lexicalTwoMethod = {
    name: 'John',
    lastName: 'Avila',
    messageWithTradicionalFunction: function (message) {
      console.log(`One Method Tradicional: My name is ${this.name} ${this.lastName} and my message is: ${message} `);
    },
    messageWithArrowFunction: (message) => {
      console.log(`Two Method Arrow Function: My name is ${this.name} ${this.lastName} and my message is: ${message} `);
    }
  };
  lexicalTwoMethod.messageWithTradicionalFunction('It is tradicional');
  lexicalTwoMethod.messageWithArrowFunction('It is arrow function');

// Constructors Function
const personalizedMessage=()=>'Goodbye everybody !';
function Rocket(name,ownMessage){
  this.name=name
  this.launchMessage=ownMessage
};
const falcon9Rocket = new Rocket('Falcon 9',personalizedMessage);
const falconHeavyRocket = new Rocket('Falcon Heavy',personalizedMessage);

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());
console.log(falconHeavyRocket.name);
console.log(falconHeavyRocket.launchMessage());

const RocketWithArrowFunction = (name,ownMessage) => (
  {
    name:name,
    launchMessage:ownMessage
  }
);

const personalizedMessageForArrowFunction=()=>'Successful launch !';
const falcon9Rocket1 = RocketWithArrowFunction('Falcon Arrow',personalizedMessageForArrowFunction);

console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.launchMessage());

// En JavaScript, los tipos de funciones pueden clasificarse de varias maneras según su comportamiento y uso. Aquí tienes una lista de algunos tipos comunes de funciones en JavaScript:

// 1. Funciones Declarativas (o con nombre):
// Se definen con la palabra clave function
// Pueden ser referenciadas antes de su declaración.
function suma(a, b) { return a + b; } 

// 2. Funciones Expresivas (o anónimas):
// Se asignan a variables.
// A menudo se utilizan para asignar funciones como valores a variables.
const suma1 = function(a, b) { return a + b; };

// 3. Funciones Flecha:
// Introducidas en ES6, proporcionan una sintaxis más concisa.
// Tienen un comportamiento ligeramente diferente con respecto al valor de this.
const suma2 = (a, b) => a + b; 

// 4. Funciones Constructoras:
// Utilizadas para crear objetos con new.
// Utilizan this para asignar propiedades al nuevo objeto.
function Persona(nombre, edad) { this.nombre = nombre; this.edad = edad; } const persona1 = new Persona('Juan', 25); 

// 5. Funciones de Orden Superior (Higher-Order Functions):
// Aceptan funciones como argumentos o devuelven funciones.
// Ejemplos incluyen map, filter, reduce.

// 6. Funciones Recursivas:
// Llamadas a sí mismas durante la ejecución.
// Útiles para problemas que se pueden dividir en subproblemas más pequeños.
function factorial(n) { if (n === 0 || n === 1) { return 1; } else { return n * factorial(n - 1); } } 

// 7. Funciones Anidadas (Nested Functions):
// Definidas dentro de otra función.
// Pueden acceder a las variables de la función contenedora (closure).
function exterior() { let variableExterior = 'Exterior'; function interior() { console.log(variableExterior); } interior(); } exterior(); 

// 8. Métodos de Objeto:
// Funciones que son propiedades de objetos y se llaman métodos cuando se invocan en el contexto de ese objeto.
const objeto = { metodo: function() { console.log('Hola desde el método'); } }; objeto.metodo(); 

// 9. Funciones Asincrónicas:
// Utilizadas para manejar operaciones asíncronas con callbacks, Promesas o Async/Await.
async function fetchData() { const response = await fetch('<https://api.example.com/data>'); const data = await response.json(); console.log(data); } 

// 10. Funciones Puras:
// Dado el mismo conjunto de entradas, siempre producirán el mismo resultado sin causar efectos secundarios observables. 
// No dependen de ni modifican estados externos.
function suma(a, b) { return a + b; } 

//Implicit Binding:
// Ocurre cuando se invoca un método de un objeto, y this se vincula al objeto que contiene el método.
const person = {
  name: 'Adam',
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Output: Hello, I'm Adam

//Explicit Binding:
//Ocurre cuando se usan métodos como call, apply, o bind para establecer explícitamente el valor de this.

function greet() {
  console.log(`Hello, I'm ${this.name}`);
}
const adam = { name: 'Adam' };
greet.call(adam); // Output: Hello, I'm Adam

//New Binding:
//Ocurre cuando una función se invoca con la palabra clave new, creando así un nuevo objeto y vinculando this a ese objeto.

function Person(name) {
  this.name = name;
}
const adam1 = new Person('Adam');
console.log(adam1.name); // Output: Adam

//Lexical Binding:
//Ocurre cuando se utiliza this en una función dentro de otra función. En este caso, this se vincula al contexto léxico de la función exterior.

const person1 = {
  name: 'Adam',
  greet: function() {
    const innerFunction = () => {
      console.log(`Hello, I'm ${this.name}`);
    };
    innerFunction();
  }
};
person1.greet(); // Output: Hello, I'm Adam

// Window Binding:
// Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador).
function showName() {
  console.log(this.name);
}

window.name = 'Adam';
showName(); // Output: Adam

// Create PowerpuffGirl objets
function PowerpuffGirl (name, color, superpower) {
  this.name = name;
  this.color = color;
  this.superpower = superpower;
  this.isLeader = false;

  this.displayInfo = function () {
    console.log(`Powerpuff Girl Information:
     Name: ${this.name}
     Color: ${this.color}
     Superpower: ${this.superpower}
     ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
    `);
  }

  this.becomeLeader = function () {
    this.isLeader = true;
    console.log(`${this.name} has become the leader of the Powerpuff Girls !`);
  }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
// Cambiar el líder
blossom.becomeLeader();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

const listaDeCompras = {
  manzana:5,
  pera:3,
  naranja:2,
  uva:1
};
for(fruta in listaDeCompras){
  console.log(fruta);
}

for(fruta in listaDeCompras){
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

for(fruta of listaDeCompras){
  console.log(fruta);
}

// Creation CLASS
/*
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} aÃ±os.`);
  }
}

const persona1 = new Persona("Mariana", 25);

persona1.saludar();

*/
// Class with herencia and instancia
/*
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra");
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`);
  }
}

const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function () {
  console.log("Este es un metodo");
};

Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo metodo");
};

Animal.prototype.tercerMetodo = function () {
  console.log("Un metodo mÃ¡s");
};
*/

/*
class Animal{constructor(nombre,tipo){this.nombre=nombre;this.tipo=tipo;}
emitirSonido(){console.log("El animal emite un sonido");}}
class Perro extends Animal{constructor(nombre,tipo,raza){super(nombre,tipo);this.raza=raza;}
emitirSonido(){console.log("El perro ladra");}
correr(){console.log(`${this.nombre} corre alegremente`);}}
const perro1=new Perro("Bobby","Perro","Pug");console.log(perro1);perro1.correr();perro1.emitirSonido();perro1.nuevoMetodo=function(){console.log("Este es un metodo");};Perro.prototype.segundoMetodo=function(){console.log("Es otro nuevo metodo");};Animal.prototype.tercerMetodo=function(){console.log("Un metodo mÃ¡s");};
*/
