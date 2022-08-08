const person = {
    fullName: function(city, country) {
      return console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  person.fullName.call(person2, "oslo", "teste");
  
  person.fullName.apply(person1, ["Oslo", "Norway"]);

