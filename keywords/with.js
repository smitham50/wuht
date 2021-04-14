module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  with  ");
    console.log("---------------\n");

    console.log("Use of the with statement is not recommended, as it may be the source of confusing bugs and compatibility issues. See the 'Ambiguity Contra' paragraph in the 'Description'");
    console.log("section below for details.\n");
    console.log("The with statement extends the scope chain for a statement.\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  with (expression)");
    console.log("    statement\n");
    
    console.log("expression:");
    console.log("    Adds the given expression to the scope chain used when evaluating the statement. The parentheses around the expression are required.\n");
    console.log("statement:");
    console.log("    Any statement. To execute multiple statements, use a block statement ({ ... }) to group those statements.\n");
    
    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");
    
    console.log("JavaScript looks up an unqualified name by searching a scope chain associated with the execution context of the script or function containing that unqualified name.");
    console.log("The 'with' statement adds the given object to the head of this scope chain during the evaluation of its statement body. If an unqualified name used in the body matches");
    console.log("a property in the scope chain, then the name is bound to the property and the object containing the property. Otherwise a ReferenceError is thrown.\n");
    console.log("Using with is not recommended, and is forbidden in ECMAScript 5 strict mode. The recommended alternative is to assign the object whose properties you want to access to");
    console.log("a temporary variable.\n");

    console.log("- Performance pro & contra -\n");
    
    console.log("Pro: The with statement can help reduce file size by reducing the need to repeat a lengthy object reference without performance penalty. The scope chain change required");
    console.log("by 'with' is not computationally expensive. Use of 'with' will relieve the interpreter of parsing repeated object references. Note, however, that in many cases this");
    console.log("benefit can be achieved by using a temporary variable to store a reference to the desired object.\n");
    console.log("Contra: The with statement forces the specified object to be searched first for all name lookups. Therefore all identifiers that aren't members of the specified object");
    console.log("will be found more slowly in a 'with' block. Where performance is important, 'with' should only be used to encompass code blocks that access members of the specified object.\n");
    
    console.log("- Ambiguity contra -\n");
    
    console.log("Contra: The with statement makes it hard for a human reader or JavaScript compiler to decide whether an unqualified name will be found along the scope chain, and if so,");
    console.log("in which object. So given this example:\n");
    console.log("  function f(x, o) {");
    console.log("    with (o) {");
    console.log("      console.log(x);");
    console.log("    }");
    console.log("  }\n");
    console.log("Only when f is called is x either found or not, and if found, either in o or (if no such property exists) in f's activation object, where x names the first formal argument.");
    console.log("If you forget to define x in the object you pass as the second argument, or if there's some similar bug or confusion, you won't get an error -- just unexpected results.\n");
    console.log("Contra: Code using with may not be forward compatible, especially when used with something other than a plain object. Consider this example:\n");
    console.log("  function f(foo, values) {");
    console.log("    with (foo) {");
    console.log("      console.log(values);");
    console.log("    }");
    console.log("  }\n");
    console.log("If you call f([1,2,3], obj) in an ECMAScript 5 environment, then the values reference inside the with statement will resolve to obj. However, ECMAScript 2015 introduces");
    console.log("a values property on Array.prototype (so that it will be available on every array). So, in a JavaScript environment that supports ECMAScript 2015, the values reference");
    console.log("inside the with statement could resolve to [1,2,3].values. However, in this particular example, Array.prototype has been defined with values in its Symbol.unscopables");
    console.log("object. If it were not, one can see how this would be a difficult issue to debug.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using with -\n");

    console.log("The following with statement specifies that the Math object is the default object. The statements following the with statement refer to the PI property and the cos and");
    console.log("sin methods, without specifying an object. JavaScript assumes the Math object for these references.\n");
    console.log("  var a, x, y;");
    console.log("  var r = 10;\n");
    console.log("  with (Math) {");
    console.log("    a = PI * r * r;");
    console.log("    x = r * cos(PI);");
    console.log("    y = r * sin(PI / 2);");
    console.log("  }\n");
}