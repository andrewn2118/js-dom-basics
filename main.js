var nameSound = [
  {
    name: "Animal",
    sound: "Sound"
  },
  {
    name: "Cow",
    sound: "Mooooo"
  },
  {
    name: "Cat",
    sound: "Meow"
  },
  {
    name: "Dog",
    sound: "Woof"
  },
  {
    name: "Cricket",
    sound: "Chirp"
  },
  {
    name: "Fox",
    sound: "Ring-ding-ding-ding-ding-dingeringeding!"
  }
];

// create and append table
var table = document.createElement("table");
document.body.appendChild(table);

// create and append table body
var tbody = document.createElement("tbody");
table.appendChild(tbody);

// create and append table rows
for(var i = 0; i < nameSound.length; i++){
  tbody.appendChild(document.createElement("tr"));
}

var animals = [];
for(var i = 0; i < nameSound.length; i++){
  // var tdAnimal = document.createElement("td");
  tdAnimal = nameSound[i].name;
  animals.push(tdAnimal);
}

var sounds = [];
for(var i = 0; i < nameSound.length; i++){
  // var tdSound = document.createElement("td");
  tdSound = nameSound[i].sound;
  sounds.push(tdSound);
}

var rows = document.querySelectorAll("tr");
for(var i = 0; i < rows.length; i++){
  rows[i].appendChild(document.createElement("td"));
  rows[i].appendChild(document.createElement("td"));
}

var data = document.querySelectorAll("td");
for(var i = 0; i < nameSound.length; i++){
  rows[i].firstChild.innerText = animals[i];
  rows[i].firstChild.nextSibling.innerText = sounds[i];
}



// ========================================================



// Matt Solution:
for (var i = 0; i < animals.length; i++) {

  // 1. create tr 
  var tr = document.createElement("tr");

  // 2. for each tr, create two tds
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");

  // 3. for each td, modify the innerText
  td1.innerText = animals[i].name;
  td2.innerText = animals[i].sound;
  
  // 4. append the tds to the tr
  tr.appendChild(td1);
  tr.appendChild(td2);

  // 5. append the tr to the tbody
  tbody.appendChild(tr);

}