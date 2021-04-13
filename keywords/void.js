module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  void  ");
    console.log("---------------\n");

    console.log("The void operator evaluates the given expression and then returns undefined.\n");

    console.log("Demo:\n");

    console.log("  void function test() {");
    console.log("    console.log('boo!');");
    console.log("    // expected output: 'boo!'");
    console.log("  }();\n");
    console.log("  try {");
    console.log("    test();");
    console.log("  } catch (e) {");
    console.log("    console.log(e);");
    console.log("    // expected output: ReferenceError: test is not defined");
    console.log("  }\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  void expression\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("This operator allows evaluating expressions that produce a value into places where an expression that evaluates to undefined is desired.\n");
    console.log("The void operator is often used merely to obtain the undefined primitive value, usually using 'void (0)' (which is equivalent to 'void 0'). In these cases, the global");
    console.log("variable undefined can be used.\n");
    console.log("It should be noted that the precedence of the void operator should be taken into account and that parentheses can help clarify the resolution of the expression following");
    console.log("the void operator:\n");
    console.log("  void 2 == '2';   // (void 2) == '2', returns false");
    console.log("  void (2 == '2'); // void (2 == '2'), returns undefined\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Immediately Invoked Function Expressions -\n");

    console.log("When using an immediately-invoked function expression, void can be used to force the function keyword to be treated as an expression instead of a declaration.\n");
    console.log("  void function iife() {\n");
    console.log("    console.log('Executed!');\n");
    console.log("  }();\n");
    console.log("  // Output: 'Executed!'\n");
    console.log("Executing the above function without the void keyword will result in an Uncaught SyntaxError.\n");
    
    console.log("- JavaScript URIs -\n");
    
    console.log("When a browser follows a javascript: URI, it evaluates the code in the URI and then replaces the contents of the page with the returned value, unless the returned value");
    console.log("is undefined. The void operator can be used to return undefined. For example:\n");
    console.log("  <a href='javascript: void (0);'>");
    console.log("    Click here to do nothing");
    console.log("  </a>\n");
    console.log("  <a href='javascript: void (document.body.style.backgroundColor = 'green');'>");
    console.log("    Click here for green background");
    console.log("  </a>\n");
    console.log("Note: javascript: pseudo protocol is discouraged over other alternatives, such as unobtrusive event handlers.\n");
    
    console.log("- Non-leaking Arrow Functions -\n");
    
    console.log("Arrow functions introduce a short-hand braceless syntax that returns an expression. This can cause unintended side effects by returning the result of a function call");
    console.log("that previously returned nothing. To be safe, when the return value of a function is not intended to be used, it can be passed to the void operator to ensure that");
    console.log("(for example) changing APIs do not cause arrow functions' behaviors to change.\n");
    console.log("  button.onclick = () => void doSomething();\n");
    console.log("This ensures the return value of doSomething changing from undefined to true will not change the behavior of this code.\n");
}