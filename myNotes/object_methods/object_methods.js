const person = {
  firstName: "Michelangelo",
  lastName: "Pezzini",
  age: 24,
  job: "Developer",
  friends: ["gabi", "Dudu", "Denner"],
  calcAge: function(birthYear){
    return 2022 - birthYear
  }
};

console.log(person.calcAge(1997))
