module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  for  ");
    console.log("---------------\n");

    console.log("The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually ");
    console.log("a block statement) to be executed in the loop.\n");

    console.log("Demo:");

    console.log("  let str = '';\n");
    console.log("  for (let i = 0; i < 9; i++) {");
    console.log("    str = str + i;");
    console.log("  }\n");
    console.log("  console.log(str);");
    console.log("  // expected output: '012345678'\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  for ([initialization]; [condition]; [final-expression])");
    console.log("    statement\n");

    console.log("initialization:")
    console.log("    An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable.");
    console.log("    This expression may optionally declare new variables with var or let keywords. Variables declared with var are not local to the loop, i.e. they are in the same scope");
    console.log("    the for loop is in. Variables declared with let are local to the statement.\n");
    console.log("    The result of this expression is discarded.\n");
    console.log("condition:");
    console.log("    An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted,");
    console.log("    the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.\n");
    console.log("final-expression:");
    console.log("    An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the");
    console.log("    counter variable.\n");
    console.log("statement:");
    console.log("    A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those");
    console.log("    statements. To execute no statement within the loop, use an empty statement (;).\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using for -\n");

    console.log("The following for statement starts by declaring the variable i and initializing it to 0. It checks that i is less than nine, performs the two succeeding statements, and");
    console.log("increments i by 1 after each pass through the loop.\n");
    console.log("  for (let i = 0; i < 9; i++) {");
    console.log("    console.log(i);");
    console.log("    // more statements");
    console.log("  }\n");

    console.log("- Optional for expressions -\n");

    console.log("All three expressions in the head of the for loop are optional.\n");
    console.log("For example, in the initialization block it is not required to initialize variables:\n");
    console.log("  var i = 0;");
    console.log("  for (; i < 9; i++) {");
    console.log("    console.log(i);");
    console.log("    // more statements");
    console.log("  }\n");
    console.log("Like the initialization block, the condition block is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to");
    console.log("not create an infinite loop.\n");
    console.log("  for (let i = 0; ; i++) {");
    console.log("    console.log(i);");
    console.log("    if (i > 3) break;");
    console.log("    // more statements");
    console.log("  }\n");
    console.log("You can also omit all three blocks. Again, make sure to use a break statement to end the loop and also modify (increase) a variable, so that the condition for the break");
    console.log("statement is true at some point.\n");
    console.log("  var i = 0;\n");
    console.log("  for (; ;) {");
    console.log("    if (i > 3) break;");
    console.log("    console.log(i);");
    console.log("    i++;");
    console.log("  }\n");

    console.log("- Using for without a statement -\n");

    console.log("The following for cycle calculates the offset position of a node in the final-expression section, and therefore it does not require the use of a statement section, a");
    console.log("semicolon is used instead.\n");
    console.log("  function showOffsetPos(sId) {\n");
    console.log("   var nLeft = 0, nTop = 0;\n");
    console.log("    for (\n");
    console.log("      var oItNode = document.getElementById(sId); /* initialization */\n");
    console.log("      oItNode; /* condition */\n");
    console.log("      nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent /* final-expression */\n");
    console.log("    ); /* semicolon */\n");
    console.log("    console.log('Offset position of \\'' + sId + '\\' element:\\n left: ' + nLeft + 'px;\\n top: ' + nTop + 'px;');\n");
    console.log("  }\n");
    console.log("  /* Example call: */\n");
    console.log("  showOffsetPos('content');\n");
    console.log("  // Output:");
    console.log("  // 'Offset position of 'content' element:");
    console.log("  // left: 0px;");
    console.log("  // top: 153px;\n");
    console.log("Note: This is one of the few cases in JavaScript where the semicolon is mandatory. Indeed, without the semicolon the line that follows the cycle declaration will be");
    console.log("considered a statement.\n");
}