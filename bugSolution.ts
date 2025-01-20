function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

user.forEach(name => {
  console.log(greeter(name));
}); //This will correctly call the function for each string in the array.