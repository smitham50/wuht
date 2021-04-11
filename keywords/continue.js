module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  continue  ");
    console.log("---------------\n");

    console.log("The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with");
    console.log("the next iteration.\n");

    console.log("Demo:\n");

    console.log("  let text = '';\n");
    console.log("  for (let i = 0; i < 10; i++) {");
    console.log("    if (i === 3) {");
    console.log("      continue;");
    console.log("    }");
    console.log("    text = text + i;");
    console.log("  }\n");
    console.log("  console.log(text);");
    console.log("  // expected output: '012456789'");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  continue [label];\n");
    console.log("label:");
    console.log("    Identifier associated with the label of the statement.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("In contrast to the break statement, continue does not terminate the execution of the loop entirely: instead,\n");
    console.log("    - In a while loop, it jumps back to the condition.");
    console.log("    - In a for loop, it jumps to the update expression.\n");
    console.log("The continue statement can include an optional label that allows the program to jump to the next iteration of a labeled loop statement instead of the current loop.");
    console.log("In this case, the continue statement needs to be nested within this labeled statement.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using continue with while -\n");

    console.log("The following example shows a while loop that has a continue statement that executes when the value of i is 3. Thus, n takes on the values 1, 3, 7, and 12.\n");
    console.log("  var i = 0;");
    console.log("  var n = 0;\n");
    console.log("  while (i < 5) {");
    console.log("    i++;\n");
    console.log("    if (i === 3) {");
    console.log("      continue;");
    console.log("    }\n");
    console.log("    n += i;");
    console.log("  }\n");

    console.log("- Using continue with a label -\n");

    console.log("In the following example, a statement labeled checkiandj contains a statement labeled checkj. If continue is encountered, the program continues at the top of the");
    console.log("checkj statement. Each time continue is encountered, checkj reiterates until its condition returns false. When false is returned, the remainder of the checkiandj");
    console.log("statement is completed.\n");
    console.log("If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.\n");
    console.log("See also label.\n");
    console.log("  var i = 0;");
    console.log("  var j = 8;\n");
    console.log("  checkiandj: while (i < 4) {");
    console.log("    console.log('i: ' + i);");
    console.log("    i += 1;\n");
    console.log("    checkj: while (j > 4) {");
    console.log("      console.log('j: ' + j);");
    console.log("      j -= 1;\n");
    console.log("      if ((j % 2) == 0)");
    console.log("        continue checkj;");
    console.log("      console.log(j + ' is odd.');");
    console.log("    }\n");
    console.log("    console.log('i = ' + i);");
    console.log("    console.log('j = ' + j);");
    console.log("  }\n");
    console.log("Output:\n");
    console.log("  i: 0\n");
    console.log("  // start checkj");
    console.log("  j: 8");
    console.log("  7 is odd.");
    console.log("  j: 7");
    console.log("  j: 6");
    console.log("  5 is odd.");
    console.log("  j: 5");
    console.log("  // end checkj\n");
    console.log("  i = 1");
    console.log("  j = 4\n");
    console.log("  i: 1");
    console.log("  i = 2");
    console.log("  j = 4\n");
    console.log("  i: 2");
    console.log("  i = 3");
    console.log("  j = 4\n");
    console.log("  i: 3");
    console.log("  i = 4");
    console.log("  j = 4\n");
}