module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  debugger  ");
    console.log("---------------\n");

    console.log("The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  debugger;\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using the debugger statement -\n");

    console.log("The following example shows code where a debugger statement has been inserted, to invoke a debugger (if one exists) when the function is called.\n");
    console.log("  function potentiallyBuggyCode() {");
    console.log("    debugger;");
    console.log("    // do potentially buggy stuff to examine, step through, etc.");
    console.log("  }\n");
    console.log("When the debugger is invoked, execution is paused at the debugger statement. It is like a breakpoint in the script source.\n");
}