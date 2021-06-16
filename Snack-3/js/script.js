var numbers = [2, 3, 4];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
    
    sum += numbers[i];

}

var average = sum / numbers.length;

console.log(average);

var basketballPlayers = [
    {
        name: "Michael",
        surname: "Jordan",
        year: 1965,
        score: 1100
    },

    {
        name: "Kobe",
        surname: "Bryant",
        year: 1975,
        score: 600
    },

    {
        name: "Mattia",
        surname: "Ferrari",
        year: 1996,
        score: 100
    }
];

var tableHeader = document.getElementById('table-header');
var tableBody = document.getElementById('table-body');

for (const key in basketballPlayers[0]) {
    
    tableHeader.innerHTML += "<th>" + key + "</th>";
        
}

for (var x = 0; x < basketballPlayers.length; x++) {
    
    tableBody.innerHTML += "<tr><td>" + basketballPlayers[x].name + "</td><td>" + basketballPlayers[x].surname + "</td><td>" + basketballPlayers[x].year + "</td><td>" + basketballPlayers[x].score + "</td></tr>";
    
}


var scoreSum = 0;

for (var i = 0; i < numbers.length; i++) {

    scoreSum += basketballPlayers[i].score;

}

var averageScore = scoreSum / basketballPlayers.length;

console.log(averageScore);