// Operadores aritmeticos
let a = 10;
let b = 5;
console.log(a + b); // 15 (suma)
console.log(a % b); // 0 (módulo)
console.log(a ** b); // 100000 (exponenciación)

// Operadores de comparación
console.log(a == 10); // true (igualdad)
console.log(a === "10"); // false (igualdad estric
console.log(a > b); // true (mayor que)

// Operadores lógicos
let esMayor = a > b;
let esPar = a % 2 === 0;
console.log(esMayor && esPar); // true (AND)
console.log(!esMayor); // false (NOT)

// Operadores de asignación
let c = 20;
c += 10; // c = c + 10
console.log(c); // 30

//ejercicio 1
let base = 10;
let altura = 5;
let area = base * altura
console.log(area); //50

//ejercicio 2
let num1 = 10;
let num2 = 20;
console.log(num1 < num2);

//ejercicio 3
let Mayor = true;
let par = false;
console.log(Mayor && par); //false
console.log(Mayor || par); //true

//ejercicio 4 
let valor =10;
valor +=5;
console.log(valor); //15

//ejercicio 5
let numero = 8;
console.log(numero > 0 && numero % 2 === 0); //true