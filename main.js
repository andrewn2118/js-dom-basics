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