/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.

  
*/

let sum = 10 + 20;
console.log("ES.A ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log("ES.B ", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = { name: "Stefano", surname: "Scalfari", age: 31 };
console.log("ES.C ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

function rmvObjProp(object, prop) {
  delete object[prop];
}
rmvObjProp(me, "age");
console.log("ES.D ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
function addObjProp(object, prop, propValue) {
  object[prop] = propValue;
}
addObjProp(
  me,
  "skills",
  "accenni di Java e C, ACPI Machine Language, Javascript"
);
console.log("ES.E ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
function addArrayProp(object, prop, propValue) {
  object[prop] = [object[prop]];
  object[prop].push(propValue);
}
addArrayProp(me, "skills", "secondo elemento array");
console.log("ES.F ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
function rmvArrayProp(object, prop) {
  object[prop].pop();
}
rmvArrayProp(me, "skills");
console.log("ES.G ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  let randNum = Math.floor(Math.random() * 6) + 1;
  return randNum;
}
console.log("ES.1: ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

console.log("ES.2: ", whoIsBigger(15, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa) {
  let arrayFromStr = [stringa];
  return arrayFromStr.map((str) => str.split(" "));
}

console.log("ES.3: ", splitMe("ciao come stai"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, boolean) {
  if (boolean) {
    return stringa.substring(1);
  } else {
    return stringa.substring(0, stringa.length - 2);
  }
}
console.log("ES.4 TRUE: ", deleteOne("STEFANO", true));
console.log("ES.4 FALSE: ", deleteOne("STEFANO", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  return stringa.replace(/\d/, "");
}
console.log("ES.5: ", onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa) {
  if (stringa.match(/@/)) {
    // if (stringa.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { // trovata su internet
    return true;
  } else {
    return false;
  }
}
console.log("ES.6: ", isThisAnEmail("stefano@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  return (weekDay = new Date().getDay()); // Domenica - Sabato : 0 - 6
}
console.log("ES.7: ", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (numero) => {
  let sum = 0;
  let array = [];

  for (let i = 0; i < numero; i++) {
    let randNum = dice();
    sum += randNum;
    array.push(randNum);
  }
  return { somma: sum, numeri: array };
};

console.log("ES.8: ", rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  const insertDate = Date.parse(date);
  const today = Date.now();

  return Math.floor((today - insertDate) / (1000 * 60 * 60 * 24));
}

console.log("ES.9: ", howManyDays("2024-01-01"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(date) {
  if (date === "1992-07-1992") {
    return "AUGURI! OGGI E' IL TUO COMPLEANNO!!";
  } else {
    ("OGGI E' UN GIORNO QUALUNQUE!");
  }
}
console.log("ES.10: ", isTodayMyBirthday("1992-07-1992"));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const object = {
  Title: "The Lord of the Rings: The Fellowship of the Ring",
  Year: "2001",
  imdbID: "tt0120737",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
};
function deleteProp(obj, str) {
  delete obj[str];
}
deleteProp(object, "Year");
console.log("ES.11: ", object);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(array) {
  let newestMovie = array[0];

  array.forEach((element) => {
    if (parseInt(element.Year) < parseInt(newestMovie.Year)) {
      newestMovie = element;
    }
  });
  return newestMovie;
}
console.log("ES.12: ", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(array) {
  return array.length;
}

console.log("ES.13: ", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(array) {
  // con forEach, ma bisogna inizializzare un array vuoto prima perché il method forEach non ritorna un array di suo
  // const moviesArray = [];
  // array.forEach((element) => {
  //   moviesArray.push(element.Year);
  // });
  // return moviesArray;

  // con map invece, non bisogna inizializzare un array vuoto prima perché il method MAP  ritorna un array di suo con dentro solo gli elementi modificati tramite la sua arrow function

  return array.map((element) => element.Year);
}

console.log("ES.14: ", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(array) {
  // let oldMillennium = [];

  // array.forEach((element) => {
  //   if (parseInt(element.Year) < 2000) {
  //     oldMillennium.push(element);
  //   }
  // });
  // return oldMillennium;

  return array.filter((obj) => parseInt(obj.Year) < 2000);
}

console.log("ES.15: ", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(array) {
  let sum = 0;
  array.forEach((obj) => {
    sum += parseInt(obj.Year);
  });
  return sum;
}
console.log("ES.16: ", sumAllTheYears(movies));
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(array, movieTitle) {
  return array.filter((obj) => obj.Title === movieTitle);
}
console.log("ES.17: ", searchByTitle(movies, "Avengers: Age of Ultron"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(stringa, array) {
  // let newMovies = { match: [], unmatch: [] };
  // array.forEach((obj) => {
  //   if (obj.Title.includes(stringa)) {
  //     newMovies.match.push(obj);
  //   } else {
  //     newMovies.unmatch.push(obj);
  //   }
  // });

  let newMovies = {
    match: array.filter((obj) => obj.Title.includes(stringa)),
    unmatch: array.filter((obj) => !obj.Title.includes(stringa)),
  };

  return newMovies;
}
console.log("ES.18: ", searchAndDivide("Lord", movies));
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(array, index) {
  array.splice(index, 1);
  return array;
}
console.log("ES.19: ", removeIndex(movies, 1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectID = () => {
  const idElement = document.getElementById("container");
  return idElement;
};

console.log("ES20: ", selectID());
/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const allTdQuery = () => {
  const allTd = document.querySelectorAll("td");
  return allTd;
};

console.log("ES21: ", allTdQuery());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = () => {
  allTd = allTdQuery();
  allTd.forEach((element) => {
    return console.log("ES22: ", element.innerText);
  });
};
printTd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const allAhref = () => {
  const allA = document.querySelectorAll("a");
  allA.forEach((element) => {
    element.style.backgroundColor = "red";
  });
};
allAhref();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addLi = (num) => {
  const uList = document.getElementById("myList");

  for (let i = 0; i < num; i++) {
    const listElement = document.createElement("li");
    listElement.innerText = "Contenuto";
    uList.appendChild(listElement);
  }
};
addLi(5);
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const rmvLi = (num) => {
  const uList = document.getElementById("myList");
  uList.innerHTML = "";
};
rmvLi();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = () => {
  const tr = document.querySelectorAll("tr");
  tr.forEach((element) => {
    element.className = "test";
  });
};
addClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.


  
  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (num) => {
  mainDiv = document.getElementById("first-tree");
  let j = "*";
  mainDiv.innerHTML = `<div class="alberello"><span class="asterisco" style="color: gold;"> ${j} </span></div>`;
  for (let i = 1; i < num; i++) {
    j += "*";
    mainDiv.innerHTML += `<div class="alberello"><span class="asterisco" style="color: green;">${j}</span></div>`;
  }
};
halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (num) => {
  mainDiv = document.getElementById("second-tree");
  let j = "*";
  mainDiv.innerHTML = `<div class="alberello"><span class="asterisco" style="color: gold;"> ${j} </span></div>`;
  for (let i = 0; i < num; i++) {
    j += "**";
    mainDiv.innerHTML += `<div class="alberello"><span class="asterisco" style="color: green;"> ${j} </span></div>`;
  }
};
tree(10);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(number) {
  // Se il numero è minore o uguale a 1, non è primo
  if (number <= 1) {
    return false;
  }

  // Verifica se il numero è divisibile per qualche numero compreso tra 2 e il numero stesso
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Se il numero è divisibile per un altro numero, non è primo
    }
  }

  return true; // Se il numero non è divisibile da nessun altro numero, è primo
}

// Esempio di utilizzo
console.log("ES29 PRIMO: ", isItPrime(11)); // Output: true
console.log("ES29 non PRIMO: ", isItPrime(16)); // Output: false
