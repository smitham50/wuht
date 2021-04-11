module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  break  ");
    console.log("---------------\n");

    console.log("The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.\n");

    console.log("Demo:\n");

    console.log("  let i = 0\n");
    console.log("  while (i < 6) {");
    console.log("    if (i === 3) {");
    console.log("      break;");
    console.log("    }");
    console.log("    i = i + 1;");
    console.log("  }\n");
    console.log("  console.log(i);");
    console.log("  // expected output: 3\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  break [label];\n");
    console.log("label (Optional):\n");
    console.log("  Identifier associated with the label of the statement. If the statement is not a loop or switch, this is required.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The break statement includes an optional label that allows the program to break out of a labeled statement. The break statement needs to be nested within the");
    console.log("referenced label. The labeled statement can be any block statement; it does not have to be preceded by a loop statement.\n");
    console.log("A break statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop, switch, or label");
    console.log("statement that the break statement is intended to break out of.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- break in while loop -\n");

    console.log("The following function has a break statement that terminates the while loop when i is 3, and then returns the value 3 * x.");
    console.log("  function testBreak(x) {");
    console.log("    var i = 0;");
    console.log("    while (i < 6) {");
    console.log("      if (i == 3) {");
    console.log("        break;");
    console.log("      }");
    console.log("      i += 1;");
    console.log("    }\n");
    console.log("    return i * x;");
    console.log("  }\n");

    console.log("- break in switch statements -\n");

    console.log("The following code has a break statement that terminates the switch statement when a case is matched and the corresponding code has ran\n");
    console.log("  const food = 'sushi';");
    console.log("  switch (food) {");
    console.log("    case 'sushi':");
    console.log("      console.log('Sushi is originally from Japan.');");
    console.log("      break;");
    console.log("    case 'pizza':");
    console.log("      console.log('Pizza is originally from Italy.');");
    console.log("      break;");
    console.log("    default:");
    console.log("      console.log('I have never heard of that dish.');");
    console.log("      break;");
    console.log("  }\n");

    console.log("- break in labeled blocks -\n");

    console.log("The following code uses break statements with labeled blocks. A break statement must be nested within any label it references. Notice that inner_block is");
    console.log("nested within outer_block.\n");
    console.log("  outer_block: {");
    console.log("    inner_block: {");
    console.log("      console.log('1');");
    console.log("      break outer_block; // breaks out of both inner_block and outer_block");
    console.log("      console.log(':-('); // skipped");
    console.log("    }");
    console.log("    console.log('2'); // skipped");
    console.log("  }\n");
    
    console.log("- break in labeled blocks that throw -\n");

    console.log("The following code also uses break statements with labeled blocks, but generates a SyntaxError because its break statement is within block_1 but references block_2.");
    console.log("A break statement must always be nested within any label it references.\n");
    console.log("  block_1: {");
    console.log("    console.log('1');");
    console.log("    break block_2; // SyntaxError: label not found");
    console.log("  }\n");
    console.log("  block_2: {");
    console.log("    console.log('2');");
    console.log("  }\n");
    
    console.log("- break with functions -\n");
    
    console.log("SyntaxErrors are also generated in the following code examples which use break statements within functions that are nested within a loop, or labeled block that the");
    console.log("break statements are intended to break out of.\n");
    console.log("  function testBreak(x) {");
    console.log("    var i = 0;");
    console.log("    while (i < 6) {");
    console.log("      if (i == 3) {");
    console.log("        (function () {");
    console.log("          break;");
    console.log("        })();");
    console.log("      }");
    console.log("      i += 1;");
    console.log("    }\n");
    console.log("    return i * x;");
    console.log("  }\n");
    console.log("  testBreak(1); // SyntaxError: Illegal break statement\n");
    console.log("  block_1: {");
    console.log("    console.log('1');");
    console.log("    (function () {");
    console.log("      break block_1; // SyntaxError: Undefined label 'block_1'");
    console.log("      })();");
    console.log("  }\n");
}


