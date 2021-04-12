module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  return  ");
    console.log("---------------\n");

    console.log("The return statement ends function execution and specifies a value to be returned to the function caller.\n");

    console.log("Demo:\n");

    console.log("  function getRectArea(width, height) {");
    console.log("    if (width > 0 && height > 0) {");
    console.log("      return width * height;");
    console.log("    }");
    console.log("    return 0;");
    console.log("  }\n");
    console.log("  console.log(getRectArea(3, 4));");
    console.log("  // expected output: 12\n");
    console.log("  console.log(getRectArea(-3, 4));");
    console.log("  // expected output: 0\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  return [expression]; \n");

    console.log("expression:");
    console.log("    The expression whose value is to be returned. If omitted, undefined is returned instead.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is returned to the function caller. For example,");
    console.log("the following function returns the square of its argument, x, where x is a number.\n");
    console.log("  function square(x) {");
    console.log("    return x * x;");
    console.log("  }");
    console.log("  var demo = square(3);");
    console.log("  // demo will equal 9\n");
    console.log("If the value is omitted, undefined is returned instead.\n");
    console.log("The following return statements all break the function execution:\n");
    console.log("  return;");
    console.log("  return true;");
    console.log("  return false;");
    console.log("  return x;");
    console.log("  return x + y / 3;\n");

    console.log("Automatic semicolon insertion");

    console.log("The return statement is affected by automatic semicolon insertion (ASI). No line terminator is allowed between the return keyword and the expression.\n");
    console.log("  return");
    console.log("  a + b;\n");
    console.log("is transformed by ASI into:\n");
    console.log("  return;");
    console.log("  a + b;\n");
    console.log("The console will warn 'unreachable code after return statement'.\n");
    console.log("Starting with Firefox 40, a warning is shown in the console if unreachable code is found after a return statement.\n");
    console.log("To avoid this problem (to prevent ASI), you could use parentheses:\n");
    console.log("  return (");
    console.log("    a + b");
    console.log("  );\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Interrupt a function -\n");

    console.log("A function immediately stops at the point where return is called.\n");
    console.log("  function counter() {");
    console.log("    for (var count = 1; ; count++) {  // infinite loop");
    console.log("      console.log(count + 'A'); // until 5");
    console.log("      if (count === 5) {");
    console.log("        return;");
    console.log("      }");
    console.log("      console.log(count + 'B');  // until 4");
    console.log("    }");
    console.log("    console.log(count + 'C');  // never appears");
    console.log("  }\n");
    console.log("  counter();\n");
    console.log("  // Output:");
    console.log("  // 1A");
    console.log("  // 1B");
    console.log("  // 2A");
    console.log("  // 2B");
    console.log("  // 3A");
    console.log("  // 3B");
    console.log("  // 4A");
    console.log("  // 4B");
    console.log("  // 5A\n");

    console.log("- Returning a function -\n");
    
    console.log("See also the article about Closures.\n");
    console.log("  function magic() {");
    console.log("    return function calc(x) { return x * 42; };");
    console.log("  }\n");
    console.log("  var answer = magic();");
    console.log("  answer(1337); // 56154\n");
}