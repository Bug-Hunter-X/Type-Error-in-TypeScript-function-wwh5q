function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

console.log(greeter(user)); //This will cause an error because the function is expecting a string, not an array of strings.