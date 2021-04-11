module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  do...while  ");
    console.log("---------------\n");

    console.log("The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing");
    console.log("the statement, resulting in the specified statement executing at least once.\n");

    console.log("Demo:");
    console.log("  let result = '';");
    console.log("  let i = 0;\n");
    console.log("  do {");
    console.log("    i = i + 1;");
    console.log("    result = result + i;");
    console.log("  } while (i < 5);\n");
    console.log("  console.log(result);");
    console.log("  // expected result: '12345'\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  do");
    console.log("    statement");
    console.log("  while (condition);\n");
    console.log("statement:");
    console.log("    A statement that is executed at least once and is re-executed each time the condition evaluates to true. To execute multiple statements within the loop, use a");
    console.log("    block statement ({ ... }) to group those statements.\n");
    console.log("condition:");
    console.log("    An expression evaluated after each pass through the loop. If condition evaluates to true, the statement is re-executed. When condition evaluates to false, control");
    console.log("    passes to the statement following the do...while.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using do...while -\n");

    console.log("In the following example, the do...while loop iterates at least once and reiterates until i is no longer less than 5.\n");
    console.log("  var result = '';");
    console.log("  var i = 0;");
    console.log("  do {");
    console.log("    i += 1;");
    console.log("    result += i + ' ';");
    console.log("  }");
    console.log("  while (i > 0 && i < 5);");
    console.log("  // Despite i == 0 this will still loop as it starts off without the test\n");
    console.log("  console.log(result);\n");
}