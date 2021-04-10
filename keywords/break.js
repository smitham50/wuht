module.exports = () => {
    console.log("");
    console.log("- break -\n");

    console.log("The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.\n");

    console.log("Demo:\n");
    console.log("let i = 0\n");
    console.log("while (i < 6) {");
    console.log("  if (i === 3) {");
    console.log("    break;");
    console.log("  }");
    console.log("  i = i + 1;");
    console.log("}\n");
    console.log("console.log(i);");
    console.log("// expected output: 3\n");
}


