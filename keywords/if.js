module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  if...else  ");
    console.log("---------------\n");

    console.log("The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.\n");

    console.log("Demo:");

    console.log("  function testNum(a) {");
    console.log("    let result;");
    console.log("    if (a > 0) {");
    console.log("      result = 'positive';");
    console.log("    } else {");
    console.log("      result = 'NOT positive';");
    console.log("    }");
    console.log("    return result;");
    console.log("  }\n");
    console.log("  console.log(testNum(-5));");
    console.log("  // expected output: 'NOT positive'\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  if (condition) {");
    console.log("    statement1");
    console.log("  } else {");
    console.log("    statement2");
    console.log("  }\n");
    console.log("condition:");
    console.log("    An expression that is considered to be either truthy or falsy.\n");
    console.log("statement1:");
    console.log("    Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block");
    console.log("    statement ({ ... }) to group those statements. To execute no statements, use an empty statement.\n");
    console.log("statement2:");
    console.log("    Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");
        
    console.log("Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript.\n");
    console.log("  if (condition1)");
    console.log("    statement1");
    console.log("  else if (condition2)");
    console.log("    statement2");
    console.log("  else if (condition3)");
    console.log("    statement3");
    console.log("  ...");
    console.log("  else");
    console.log("    statementN\n");
    console.log("To see how this works, this is how it would look if the nesting were properly indented:\n");
    console.log("  if (condition1)");
    console.log("    statement1");
    console.log("  else");
    console.log("    if (condition2)");
    console.log("      statement2");
    console.log("    else");
    console.log("      if (condition3)");
    console.log("  ...\n");
    console.log("To execute multiple statements within a clause, use a block statement ({ ... }) to group those statements. In general, it is a good practice to always use block");
    console.log("statements, especially in code involving nested if statements:\n");
    console.log("  if (condition) {");
    console.log("    statements1");
    console.log("  } else {");
    console.log("    statements2");
    console.log("  }\n");
    console.log("Do not confuse the primitive Boolean values true and false with truthiness or falsiness of the Boolean object. Any value that is not false, undefined, null, 0, -0, NaN,");
    console.log("or the empty string (''), and any object, including a Boolean object whose value is false, is considered truthy when used as the condition. For example:\n");
    console.log("  var b = new Boolean(false);");
    console.log("  if (b) // this condition is truthy\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using if...else -\n");

    console.log("  if (cipher_char === from_char) {");
    console.log("    result = result + to_char;");
    console.log("    x++;");
    console.log("  } else {");
    console.log("    result = result + clear_char;");
    console.log("  }\n");

    console.log("- Using else if -\n");

    console.log("Note that there is no elseif syntax in JavaScript. However, you can write it with a space between else and if:\n");
    console.log("  if (x > 50) {");
    console.log("    /* do something */");
    console.log("  } else if (x > 5) {");
    console.log("    /* do something */");
    console.log("  } else {");
    console.log("    /* do something */");
    console.log("  }\n");

    console.log("- Assignment within the conditional expression -\n");

    console.log("It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:\n");
    console.log("  if (x = y) {");
    console.log("    /* do something */");
    console.log("  }\n");
    console.log("If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:\n");
    console.log("  if ((x = y)) {");
    console.log("    /* do something */");
    console.log("  }\n");
}