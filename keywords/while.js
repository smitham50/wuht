module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  while  ");
    console.log("---------------\n");

    console.log("The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing");
    console.log("the statement.\n");
    
    console.log("Demo:\n");
    
    console.log("  let n = 0;\n");
    console.log("  while (n < 3) {");
    console.log("    n++;");
    console.log("  }\n");
    console.log("  console.log(n);");
    console.log("  // expected output: 3\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  while (condition)");
    console.log("    statement\n");
    
    console.log("condition:");
    console.log("    An expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. When condition evaluates to false, execution");
    console.log("    continues with the statement after the while loop.\n");
    console.log("statement:");
    console.log("    An optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to");
    console.log("    group those statements.\n");
    console.log("Note: Use the break statement to stop a loop before condition evaluates to true.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using while -\n");

    console.log("The following while loop iterates as long as n is less than three.\n");
    console.log("  var n = 0;");
    console.log("  var x = 0;\n");
    console.log("  while (n < 3) {");
    console.log("    n++;");
    console.log("    x += n;");
    console.log("  }\n");
    console.log("Each iteration, the loop increments n and adds it to x. Therefore, x and n take on the following values:\n");
    console.log("    - After the first pass: n = 1 and x = 1");
    console.log("    - After the second pass: n = 2 and x = 3");
    console.log("    - After the third pass: n = 3 and x = 6\n");
    console.log("After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.\n");
}