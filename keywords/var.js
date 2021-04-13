module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  var  ");
    console.log("---------------\n");

    console.log("The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.\n");

    console.log("Demo:\n");

    console.log("  var x = 1;\n");
    console.log("  if (x === 1) {");
    console.log("    var x = 2;\n");
    console.log("    console.log(x);");
    console.log("    // expected output: 2");
    console.log("  }\n");
    console.log("  console.log(x);");
    console.log("  // expected output: 2\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];\n");

    console.log("varnameN:");
    console.log("    Variable name. It can be any legal identifier.\n");
    console.log("valueN (Optional):");
    console.log("    Initial value of the variable. It can be any legal expression. Default value is undefined. \n");
    console.log("Alternatively, the Destructuring Assignment syntax can also be used to declare variables.\n");
    console.log("  var { bar } = foo; // where foo = { bar:10, baz:12 };");
    console.log("  /* This creates a variable with the name 'bar', which has a value of 10 */\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("var declarations, wherever they occur, are processed before any code is executed. This is called hoisting, and is discussed further below.\n");
    console.log("The scope of a variable declared with var is its current execution context and closures thereof, which is either the enclosing function and functions declared within");
    console.log("it, or, for variables declared outside any function, global. Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable");
    console.log("will not lose its value, unless another assignment is performed.\n");
    console.log("  'use strict';");
    console.log("  function foo() {");
    console.log("    var x = 1;");
    console.log("    function bar() {");
    console.log("      var y = 2;");
    console.log("      console.log(x); // 1 (function `bar` closes over `x`)");
    console.log("      console.log(y); // 2 (`y` is in scope)");
    console.log("    }");
    console.log("    bar();");
    console.log("    console.log(x); // 1 (`x` is in scope)");
    console.log("    console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`");
    console.log("  }\n");
    console.log("  foo();\n");
    console.log("Variables declared using var are created before any code is executed in a process known as hoisting. Their initial value is undefined.\n");
    console.log("  'use strict';");
    console.log("  console.log(x);                // undefined (note: not ReferenceError)");
    console.log("  console.log('still going...'); // still going...");
    console.log("  var x = 1;");
    console.log("  console.log(x);                // 1");
    console.log("  console.log('still going...'); // still going...\n");
    console.log("In the global context, a variable declared using var is added as a non-configurable property of the global object. This means its property descriptor cannot be changed");
    console.log("and it cannot be deleted using delete. The corresponding name is also added to a list on the internal [[VarNames]] slot on the global environment record (which forms part");
    console.log("of the global lexical environment). The list of names in [[VarNames]] enables the runtime to distinguish between global variables and straightforward properties on the");
    console.log("global object.\n");
    console.log("The property created on the global object for global variables, is set to be non-configurable because the identifier is to be treated as a variable, rather than a");
    console.log("straightforward property of the global object. JavaScript has automatic memory management, and it would make no sense to be able to use the delete operator on a");
    console.log("global variable.\n");
    console.log("  'use strict';");
    console.log("  var x = 1;");
    console.log("  globalThis.hasOwnProperty('x'); // true");
    console.log("  delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.");
    console.log("  delete x;  // SyntaxError in strict mode. Fails silently otherwise.\n");
    console.log("Note that in both NodeJS CommonJS modules and native ECMAScript modules, top-level variable declarations are scoped to the module, and are not, therefore added as");
    console.log("properties to the global object.\n");

    console.log("- Unqualified identifier assignments -\n");
    
    console.log("The global object sits at the top of the scope chain. When attempting to resolve a name to a value, the scope chain is searched. This means that properties on the");
    console.log("global object are conveniently visible from every scope, without having to qualify the names with globalThis. or window. or global..\n");
    console.log("So you can just type:\n");
    console.log("  function foo() {");
    console.log("    String('s') // Note the function `String` is implicitly visible");
    console.log("  }\n");
    console.log("...because\n");
    console.log("  globalThis.hasOwnProperty('String') // true\n");
    console.log("So the global object will ultimately be searched for unqualified identifiers. You don't have to type globalThis.String, you can just type the unqualified String. The");
    console.log("corollary, in non-strict mode, is that assignment to unqualified identifiers will, if there is no variable of the same name declared in the scope chain, assume you want");
    console.log("to create a property with that name on the global object.\n");
    console.log("  foo = 'f' // In non-strict mode, assumes you want to create a property named `foo` on the global object");
    console.log("  globalThis.hasOwnProperty('foo') // true\n");
    console.log("In ECMAScript 5, this behavior was changed for strict mode. Assignment to an unqualified identifier in strict mode will result in a ReferenceError, to avoid the accidental");
    console.log("creation of properties on the global object.\n");
    console.log("Note that the implication of the above, is that, contrary to popular misinformation, JavaScript does not have implicit or undeclared variables, it merely has a syntax that");
    console.log("looks like it does.\n");

    console.log("- var hoisting -\n");
    
    console.log("Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring");
    console.log("it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called 'hoisting', as it appears that the variable declaration is");
    console.log("moved to the top of the function or global code.\n");
    console.log("  bla = 2;");
    console.log("  var bla;\n");
    console.log("  // ...is implicitly understood as:\n");
    console.log("  var bla;");
    console.log("  bla = 2;\n");
    console.log("For that reason, it is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables");
    console.log("are function scoped (local) and which are resolved on the scope chain.\n");
    console.log("It's important to point out that the hoisting will affect the variable declaration, but not its value's initialization. The value will be indeed assigned when the assignment statement is reached:\n");
    console.log("  function do_something() {");
    console.log("    console.log(bar); // undefined");
    console.log("    var bar = 111;");
    console.log("    console.log(bar); // 111");
    console.log("  }\n");
    console.log("  // ...is implicitly understood as:\n");
    console.log("  function do_something() {");
    console.log("    var bar;");
    console.log("    console.log(bar); // undefined");
    console.log("    bar = 111;");
    console.log("    console.log(bar); // 111");
    console.log("  }\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Declaring and initializing two variables -\n");

    console.log("  var a = 0, b = 0;\n");

    console.log("- Assigning two variables with single string value -\n");
    
    console.log("  var a = 'A';");
    console.log("  var b = a;\n");
    console.log("  // ...is equivalent to:\n");
    console.log("  var a, b = a = 'A';\n");
    console.log("Be mindful of the order:\n");
    console.log("  var x = y, y = 'A';");
    console.log("  console.log(x + y); // undefinedA\n");
    console.log("Here, x and y are declared before any code is executed, but the assignments occur later. At the time 'x = y' is evaluated, y exists so no ReferenceError is thrown and");
    console.log("its value is undefined. So, x is assigned the undefined value. Then, y is assigned the value 'A'. Consequently, after the first line, x === undefined && y === 'A',");
    console.log("hence the result.\n");

    console.log("- Initialization of several variables -\n");
    
    console.log("  var x = 0;");
    console.log("  function f() {");
    console.log("    var x = y = 1; // Declares x locally; declares y globally.");
    console.log("  }");
    console.log("  f();\n");
    console.log("  console.log(x, y); // 0 1\n");
    console.log("  // In non-strict mode:");
    console.log("  // x is the global one as expected;");
    console.log("  // y is leaked outside of the function, though!\n");
    console.log("The same example as above but with a strict mode:\n");
    console.log("  'use strict';\n");
    console.log("  var x = 0;");
    console.log("  function f() {");
    console.log("    var x = y = 1; // Throws a ReferenceError in strict mode.");
    console.log("  }");
    console.log("  f();\n");
    console.log("  console.log(x, y);\n");

    console.log("- Implicit globals and outer function scope -\n");
    
    console.log("Variables that appear to be implicit globals may be references to variables in an outer function scope:\n");
    console.log("  var x = 0; // Declares x within file scope, then assigns it a value of 0.\n");
    console.log("  console.log(typeof z); // 'undefined', since z doesn't exist yet\n");
    console.log("  function a() {");
    console.log("    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.\n");
    console.log("    console.log(x, y); // 0 2\n");
    console.log("    function b() {");
    console.log("      x = 3; // Assigns 3 to existing file scoped x.");
    console.log("      y = 4; // Assigns 4 to existing outer y.");
    console.log("      z = 5; // Creates a new global variable z, and assigns it a value of 5.");
    console.log("      // (Throws a ReferenceError in strict mode.)");
    console.log("    }\n");
    console.log("    b(); // Creates z as a global variable.");
    console.log("    console.log(x, y, z); // 3 4 5");
    console.log("  }\n");
    console.log("  a(); // Also calls b.");
    console.log("  console.log(x, z);     // 3 5");
    console.log("  console.log(typeof y); // 'undefined', as y is local to function a\n");
}