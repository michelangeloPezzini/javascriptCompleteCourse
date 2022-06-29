const person = {
  firstName: "Michelangelo",
  lastName: "Pezzini",
  age: 24,
  job: "Developer",
  friends: ["gabi", "Dudu", "Denner"],
};

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);

const question = prompt("Escolha uma opção? ");
if (person[question]) {
  console.log(person[question]);
} else {
  console.log("Try again");
}

var friend = person.friends[0];
console.log(friend);
