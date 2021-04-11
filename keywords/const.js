module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  const  ");
    console.log("---------------\n");

    console.log("Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.\n");

    console.log("Demo:\n");
    
    console.log("  const number = 42;\n");
    console.log("  try {");
    console.log("    number = 99;");
    console.log("  } catch (err) {");
    console.log("    console.log(err);");
    console.log("    // expected output: TypeError: invalid assignment to const `number'");
    console.log("    // Note - error messages will vary depending on browser");
    console.log("  }\n");
    console.log("  console.log(number);");
    console.log("  // expected output: 42");
    
    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];\n");
    console.log("nameN:");
    console.log("    The constant's name, which can be any legal identifier.\n");
    console.log("valueN:");
    console.log("    The constant's value. This can be any legal expression, including a function expression.\n");
    console.log("The Destructuring Assignment syntax can also be used to declare variables.\n");
    console.log("  const { bar } = foo; // where foo = { bar:10, baz:12 };");
    console.log("  /* This creates a constant with the name 'bar', which has a value of 10 */\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("This declaration creates a constant whose scope can be either global or local to the block in which it is declared. Global constants do not become properties of the\n");
    console.log("window object, unlike var variables.\n");
    console.log("An initializer for a constant is required. You must specify its value in the same statement in which it's declared. (This makes sense, given that it can't be changed later.)\n");
    console.log("The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. For");
    console.log("instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.\n");
    console.log("All the considerations about the 'temporal dead zone' apply to both let and const.\n");
    console.log("A constant cannot share its name with a function or a variable in the same scope.\n");
    
    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    
    console.log("- Basic const usage -\n");

    console.log("Constants can be declared with uppercase or lowercase, but a common convention is to use all-uppercase letters.\n");
    console.log("  // define MY_FAV as a constant and give it the value 7");
    console.log("  const MY_FAV = 7;\n");
    console.log("  // this will throw an error - Uncaught TypeError: Assignment to constant variable.");
    console.log("  MY_FAV = 20;\n");
    console.log("  // MY_FAV is 7");
    console.log("  console.log('my favorite number is: ' + MY_FAV);\n");
    console.log("  // trying to redeclare a constant throws an error");
    console.log("  // Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared");
    console.log("  const MY_FAV = 20;\n");
    console.log("  // the name MY_FAV is reserved for constant above, so this will fail too");
    console.log("  var MY_FAV = 20;\n");
    console.log("  // this throws an error too");
    console.log("  let MY_FAV = 20;\n");
    
    console.log("- Block scoping -\n");

    console.log("It's important to note the nature of block scoping.\n");
    console.log("  if (MY_FAV === 7) {");
    console.log("    // this is fine and creates a block scoped MY_FAV variable");
    console.log("    // (works equally well with let to declare a block scoped non const variable)");
    console.log("    let MY_FAV = 20;\n");
    console.log("    // MY_FAV is now 20");
    console.log("    console.log('my favorite number is ' + MY_FAV);\n");
    console.log("    // this gets hoisted into the global context and throws an error");
    console.log("    var MY_FAV = 20;");
    console.log("  }\n");
    console.log("  // MY_FAV is still 7");
    console.log("  console.log('my favorite number is ' + MY_FAV);\n");

    console.log("- const needs to be initialized -\n");
    
    console.log("  // throws an error");
    console.log("  // Uncaught SyntaxError: Missing initializer in const declaration\n");
    console.log("  const FOO;\n");

    console.log("- const in objects and arrays -\n");

    console.log("const also works on objects and arrays.\n");
    console.log("  const MY_OBJECT = { 'key': 'value' };\n");
    console.log("  // Attempting to overwrite the object throws an error");
    console.log("  // Uncaught TypeError: Assignment to constant variable.");
    console.log("  MY_OBJECT = { 'OTHER_KEY': 'value' };\n");
    console.log("  // However, object keys are not protected,");
    console.log("  // so the following statement is executed without problem");
    console.log("  MY_OBJECT.key = 'otherValue'; // Use Object.freeze() to make object immutable\n");
    console.log("  // The same applies to arrays");
    console.log("  const MY_ARRAY = [];");
    console.log("  // It's possible to push items into the array");
    console.log("  MY_ARRAY.push('A'); // ['A']");
    console.log("  // However, assigning a new array to the variable throws an error");
    console.log("  // Uncaught TypeError: Assignment to constant variable.");
    console.log("  MY_ARRAY = ['B'];\n");
}