module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  let  ");
    console.log("---------------\n");

    console.log("The let statement declares a block-scoped local variable, optionally initializing it to a value.\n");

    console.log("  let x = 1;\n");
    console.log("  if (x === 1) {");
    console.log("    let x = 2;\n");
    console.log("    console.log(x);");
    console.log("    // expected output: 2");
    console.log("  }\n");
    console.log("  console.log(x);");
    console.log("  // expected output: 1\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  let name1 [= value1] [, name2 [= value2]] [, ..., nameN [= valueN];\n");

    console.log("nameN:");
    console.log("    The names of the variable or variables to declare. Each must be a legal JavaScript identifier.\n");
    console.log("valueN (Optional):");
    console.log("    For each variable declared, you may optionally specify its initial value to any legal JavaScript expression.\n");
    console.log("Alternatively, the Destructuring Assignment syntax can also be used to declare variables.\n");
    console.log("  let { bar } = foo; // where foo = { bar:10, baz:12 };");
    console.log("  /* This creates a variable with the name 'bar', which has a value of 10 */\n");
    
    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");
    
    console.log("let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a");
    console.log("variable globally, or locally to an entire function regardless of block scope. The other difference between var and let is that the latter is initialized to a value");
    console.log("only when a parser evaluates it (see below).\n");
    console.log("Just like const the let does not create properties of the window object when declared globally (in the top-most scope).\n");
    console.log("An explanation of why the name 'let' was chosen can be found here.\n");
    console.log("Many issues with let variables can be avoided by declaring them at the top of the scope in which they are used (doing so may impact readibility).\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Scoping rules -\n");

    console.log("Variables declared by let have their scope in the block for which they are declared, as well as in any contained sub-blocks. In this way, let works very much like var.");
    console.log("The main difference is that the scope of a var variable is the entire enclosing function:\n");
    console.log("  function varTest() {");
    console.log("    var x = 1;");
    console.log("    {");
    console.log("      var x = 2;  // same variable!");
    console.log("      console.log(x);  // 2");
    console.log("    }");
    console.log("    console.log(x);  // 2");
    console.log("  }\n");
    console.log("  function letTest() {");
    console.log("    let x = 1;");
    console.log("    {");
    console.log("      let x = 2;  // different variable");
    console.log("      console.log(x);  // 2");
    console.log("    }");
    console.log("    console.log(x);  // 1");
    console.log("  }\n");
    console.log("At the top level of programs and functions, let, unlike var, does not create a property on the global object. For example:\n");
    console.log("  var x = 'global';");
    console.log("  let y = 'global';");
    console.log("  console.log(this.x); // 'global'");
    console.log("  console.log(this.y); // undefined\n");

    console.log("- Emulating private members -\n");
    
    console.log("In dealing with constructors it is possible to use the let bindings to share one or more private members without using closures:\n");
    console.log("  var Thing;\n");
    console.log("  {");
    console.log("    let privateScope = new WeakMap();");
    console.log("    let counter = 0;\n");
    console.log("    Thing = function () {");
    console.log("      this.someProperty = 'foo';\n");
    console.log("      privateScope.set(this, {");
    console.log("        hidden: ++counter,");
    console.log("      });");
    console.log("    };\n");
    console.log("    Thing.prototype.showPublic = function () {");
    console.log("      return this.someProperty;");
    console.log("    };\n");
    console.log("    Thing.prototype.showPrivate = function () {");
    console.log("      return privateScope.get(this).hidden;");
    console.log("    };");
    console.log("  }\n");
    console.log("  console.log(typeof privateScope);");
    console.log("  // 'undefined'\n");
    console.log("  var thing = new Thing();\n");
    console.log("  console.log(thing);");
    console.log("  // Thing {someProperty: 'foo'}\n");
    console.log("  thing.showPublic();");
    console.log("  // 'foo'\n");
    console.log("  thing.showPrivate();");
    console.log("  // 1\n");
    console.log("The same privacy pattern with closures over local variables can be created with var, but those need a function scope (typically an IIFE in the module pattern) instead of");
    console.log("just a block scope like in the example above.\n");

    console.log("- Redeclarations -\n");
    
    console.log("Redeclaring the same variable within the same function or block scope raises a SyntaxError.\n");
    console.log("  if (x) {");
    console.log("    let foo;");
    console.log("    let foo; // SyntaxError thrown.");
    console.log("  }\n");
    console.log("You may encounter errors in switch statements because there is only one block.\n");
    console.log("  let x = 1;");
    console.log("  switch (x) {");
    console.log("    case 0:");
    console.log("      let foo;");
    console.log("      break;\n");
    console.log("    case 1:");
    console.log("      let foo; // SyntaxError for redeclaration.");
    console.log("      break;");
    console.log("  }\n");
    console.log("However, it's important to point out that a block nested inside a case clause will create a new block scoped lexical environment, which will not produce the redeclaration");
    console.log("errors shown above.\n");
    console.log("  let x = 1;\n");
    console.log("  switch (x) {");
    console.log("    case 0: {");
    console.log("      let foo;");
    console.log("      break;");
    console.log("    }");
    console.log("    case 1: {");
    console.log("      let foo;");
    console.log("      break;");
    console.log("    }");
    console.log("  }\n");

    console.log("- Temporal dead zone (TDZ) -\n");
    
    console.log("let variables cannot be read/written until they have been fully initialized, which happens when they are declared (if no initial value is specified on declaration, the");
    console.log("variable is initialized with a value of undefined). Accessing the variable before the initialization results in a ReferenceError.\n");
    console.log("This differs from var variables, which will return a value of undefined if they are accessed before they are declared.\n");
    console.log("The variable is said to be in a 'temporal dead zone' (TDZ) from the start of the block until the initialization has completed.\n");
    console.log("  { // TDZ starts at beginning of scope");
    console.log("    console.log(bar); // undefined");
    console.log("    console.log(foo); // ReferenceError");
    console.log("    var bar = 1;");
    console.log("    let foo = 2; // End of TDZ (for foo)");
    console.log("  }\n");
    console.log("The term 'temporal' is used because the zone depends on the order of execution (time) rather than the order in which the code is written (position). For example, the");
    console.log("code below works because, even though the function that uses the let variable appears before the variable is declared, the function is called outside the TDZ.\n");
    console.log("  {");
    console.log("    // TDZ starts at beginning of scope");
    console.log("    const func = () => console.log(letVar); // OK\n");
    console.log("    // Within the TDZ letVar access throws `ReferenceError`\n");
    console.log("    let letVar = 3; // End of TDZ (for letVar)");
    console.log("    func(); // Called outside TDZ!");
    console.log("  }\n");

    console.log("- The TDZ and typeof -\n");
    
    console.log("Using the typeof operator for a let variable in its TDZ will throw a ReferenceError:\n");
    console.log("  // results in a 'ReferenceError'");
    console.log("  console.log(typeof i);");
    console.log("  let i = 10;\n");
    console.log("This differs from using typeof for undeclared variables, and variables that hold a value of undefined:\n");
    console.log("  // prints out 'undefined'");
    console.log("  console.log(typeof undeclaredVariable);\n");

    console.log("- TDZ combined with lexical scoping -\n");
    
    console.log("The following code results in a ReferenceError at the line shown:\n");
    console.log("  function test() {");
    console.log("    var foo = 33;");
    console.log("    if (foo) {");
    console.log("      let foo = (foo + 55); // ReferenceError");
    console.log("    }");
    console.log("  }");
    console.log("  test();\n");
    console.log("The if block is evaluated because the outer var foo has a value. However due to lexical scoping this value is not available inside the block: the identifier foo inside");
    console.log("the if block is the let foo. The expression (foo + 55) throws a ReferenceError because initialization of let foo has not completed — it is still in the temporal dead zone.\n");
    console.log("This phenomenon can be confusing in a situation like the following. The instruction let n of n.a is already inside the private scope of the for loop's block. So, the");
    console.log("identifier n.a is resolved to the property 'a' of the 'n' object located in the first part of the instruction itself (let n).\n");
    console.log("This is still in the temporal dead zone as its declaration statement has not been reached and terminated.\n");
    console.log("  function go(n) {");
    console.log("    // n here is defined!");
    console.log("    console.log(n); // Object {a: [1,2,3]}\n");
    console.log("    for (let n of n.a) { // ReferenceError");
    console.log("      console.log(n);");
    console.log("    }");
    console.log("  }\n");
    console.log("  go({ a: [1, 2, 3] });\n");

    console.log("- Other situations -\n");
    
    console.log("When used inside a block, let limits the variable's scope to that block. Note the difference between var, whose scope is inside the function where it is declared.\n");
    console.log("  var a = 1;");
    console.log("  var b = 2;\n");
    console.log("  if (a === 1) {");
    console.log("    var a = 11; // the scope is global");
    console.log("    let b = 22; // the scope is inside the if-block\n");
    console.log("    console.log(a);  // 11");
    console.log("    console.log(b);  // 22");
    console.log("  }\n");
    console.log("  console.log(a); // 11");
    console.log("  console.log(b); // 2\n");
    console.log("However, this combination of var and let declaration below is a SyntaxError due to var being hoisted to the top of the block. This results in an implicit re-declaration");
    console.log("of the variable.\n");
    console.log("  let x = 1;\n");
    console.log("  {");
    console.log("    var x = 2; // SyntaxError for re-declaration");
    console.log("  }\n");
}