var palla = {
    name: "palla",
    weight: 10
}

console.log(palla);

palla.weight = parseInt(prompt("Che peso vuoi dare alla palla?"));

console.log(palla);

var giochi = [];

giochi.push(palla);

console.log(giochi);

var martello = {};

martello.name = prompt("Che nome vuoi dare al martello?");
martello.weight = parseInt(prompt("Che peso vuoi dare al martello?"));

giochi.push(martello);

console.log(giochi);