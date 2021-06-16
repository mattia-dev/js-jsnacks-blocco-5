// Creare un array di 3 studenti(3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione
// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
//     ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
// {
//     nome: ‘Pippo’,
//     cognome: ‘Baudo’,
//     age: 80,
//         descrizione: ‘’
// }
// Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
// Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
//     Bonus
// Visualizzare nell’html questi dati in una forma tabellare.

function adjustedCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

var students = [
    {
        name: "Mattia",
        surname: "Ferrari",
        age: 24,
        description: ""
    },
    {
        name: "Pinco",
        surname: "Pallo",
        age: 21,
        description: ""
    },
    {
        name: "Panco",
        surname: "Pinco",
        age: 30,
        description: ""
    }
];

console.log(students);

for (var i = 0; i < students.length; i++) {
    
    students[i].description = prompt("Scrivi una breve descrizione di " + students[i].name + " " + students[i].surname);
    
}

console.log(students);

var tableHeader = document.getElementById('table-header');
var tableBody = document.getElementById('table-body');

for (const key in students[0]) {

    tableHeader.innerHTML += "<th>" + adjustedCase(key) + "</th>";

}

for (var x = 0; x < students.length; x++) {

    tableBody.innerHTML += "<tr><td>" + students[x].name + "</td><td>" + students[x].surname + "</td><td>" + students[x].age + "</td><td>" + students[x].description + "</td></tr>";

}