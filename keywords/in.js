module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  in operator  ");
    console.log("---------------\n");

    console.log("The in operator returns true if the specified property is in the specified object or its prototype chain.\n");

    console.log("Demo:\n");

    console.log("  const car = { make: 'Honda', model: 'Accord', year: 1998 };\n");
    console.log("  console.log('make' in car);");
    console.log("  // expected output: true\n");
    console.log("  delete car.make;");
    console.log("  if ('make' in car === false) {");
    console.log("    car.make = 'Suzuki';");
    console.log("  }\n");
    console.log("  console.log(car.make);");
    console.log("  // expected output: 'Suzuki'\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  prop in object\n");

    console.log("prop:");
    console.log("    A string or symbol representing a property name or array index (non-symbols will be coerced to strings).\n");
    console.log("object:");
    console.log("    Object to check if it (or its prototype chain) contains the property with specified name (prop).\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Basic usage -\n");

    console.log("The following examples show some uses of the in operator.\n");
    console.log("  // Arrays");
    console.log("  let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']");
    console.log("  0 in trees        // returns true");
    console.log("  3 in trees        // returns true");
    console.log("  6 in trees        // returns false");
    console.log("  'bay' in trees    // returns false (you must specify the index number, not the value at that index)");
    console.log("  'length' in trees // returns true (length is an Array property)");
    console.log("  Symbol.iterator in trees // returns true (arrays are iterable, works only in ES2015+)\n");
    console.log("  // Predefined objects");
    console.log("  'PI' in Math          // returns true\n");
    console.log("  // Custom objects");
    console.log("  let mycar = { make: 'Honda', model: 'Accord', year: 1998 }");
    console.log("  'make' in mycar  // returns true");
    console.log("  'model' in mycar // returns true\n");
    console.log("You must specify an object on the right side of the in operator. For example, you can specify a string created with the String constructor, but you cannot specify a");
    console.log("string literal.\n");
    console.log("  let color1 = new String('green')");
    console.log("  'length' in color1 // returns true\n");
    console.log("  let color2 = 'coral'");
    console.log("  // generates an error (color2 is not a String object)");
    console.log("  'length' in color2\n");

    console.log("- Using in with deleted or undefined properties -\n");
    
    console.log("If you delete a property with the delete operator, the in operator returns false for that property.\n");
    console.log("  let mycar = { make: 'Honda', model: 'Accord', year: 1998 }");
    console.log("  delete mycar.make");
    console.log("  'make' in mycar   // returns false\n");
    console.log("  let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')");
    console.log("  delete trees[3]");
    console.log("  3 in trees  // returns false\n");
    console.log("If you set a property to undefined but do not delete it, the in operator returns true for that property.\n");
    console.log("  let mycar = { make: 'Honda', model: 'Accord', year: 1998 }");
    console.log("  mycar.make = undefined");
    console.log("  'make' in mycar   // returns true\n");
    console.log("  ----------\n");
    console.log("  let trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple')");
    console.log("  trees[3] = undefined");
    console.log("  3 in trees  // returns true\n");
    console.log("The in operator will return false for empty array slots. Even if accessing it directly returns undefined.\n");
    console.log("  let empties = new Array(3)");
    console.log("  empties[2] // returns undefined");
    console.log("  2 in empties  // returns false\n");
    console.log("To avoid this, make sure a new array is always filled with non-empty values or not write to indexes past the end of array.\n");
    console.log("  let empties = new Array(3).fill(undefined)");
    console.log("  2 in empties  // returns true\n");
    
    console.log("- Inherited properties -\n");

    console.log("The in operator returns true for properties in the prototype chain. (If you want to check for only non-inherited properties, use Object.prototype.hasOwnProperty() instead.)\n");
    console.log("  'toString' in {}  // returns true\n");
}