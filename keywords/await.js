module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  await  ");
    console.log("---------------\n");

    console.log("The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; however it can be used on its own with");
    console.log("JavaScript modules.\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  [rv] = await expression;\n");

    console.log("expression:");
    console.log("    A Promise or any value to wait for.\n");
    console.log("rv:");
    console.log("    Returns the fulfilled value of the promise, or the value itself if it's not a Promise.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function");
    console.log("after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.\n");
    console.log("If the Promise is rejected, the await expression throws the rejected value.\n");
    console.log("If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.\n");
    console.log("An await splits execution flow, allowing the caller of the async function to resume execution. After the await defers the continuation of the async function, execution");
    console.log("of subsequent statements ensues. If this await is the last expression executed by its function, execution continues by returning to the function's caller a pending Promise");
    console.log("for completion of the await's function and resuming execution of that caller.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Awaiting a promise to be fulfilled -\n");

    console.log("If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.\n");
    console.log("  function resolveAfter2Seconds(x) {");
    console.log("    return new Promise(resolve => {");
    console.log("      setTimeout(() => {");
    console.log("        resolve(x);");
    console.log("      }, 2000);");
    console.log("    });");
    console.log("  }\n");
    console.log("  async function f1() {");
    console.log("    var x = await resolveAfter2Seconds(10);");
    console.log("    console.log(x); // 10");
    console.log("  }\n");
    console.log("  f1();\n");

    console.log("- Thenable objects -\ns");
    
    console.log("Thenable objects will be fulfilled just the same.\n");
    console.log("  async function f2() {");
    console.log("    const thenable = {");
    console.log("      then: function (resolve, _reject) {");
    console.log("        resolve('resolved!')");
    console.log("      }");
    console.log("    };");
    console.log("    console.log(await thenable); // resolved!");
    console.log("  }\n");
    console.log("  f2();\n");

    console.log("- Conversion to promise -\n");
    
    console.log("If the value is not a Promise, it converts the value to a resolved Promise, and waits for it.\n");
    console.log("  async function f3() {");
    console.log("    var y = await 20;");
    console.log("    console.log(y); // 20");
    console.log("  }\n");
    console.log("  f3();\n");

    console.log("- Promise rejection -\n");
    
    console.log("If the Promise is rejected, the rejected value is thrown.\n");
    console.log("  async function f4() {");
    console.log("    try {");
    console.log("      var z = await Promise.reject(30);");
    console.log("    } catch (e) {");
    console.log("      console.error(e); // 30");
    console.log("    }");
    console.log("  }\n");
    console.log("  f4();\n");

    console.log("- Handling rejected promises -\n");
    
    console.log("Handle rejected Promise without try block.\n");
    console.log("  var response = await promisedFunction().catch((err) => { console.error(err); });");
    console.log("  // response will be undefined if the promise is rejected\n");

    console.log("- Top level await -\n");
    
    console.log("You can use the await keyword on its own (outside of an async function) within a JavaScript module. This means modules, with child modules that use await, wait for the");
    console.log("child module to execute before they themselves run. All while not blocking other child modules from loading.\n");
    console.log("Here is an example of a simple module using the Fetch API and specifying await within the export statement. Any modules that include this will wait for the fetch to");
    console.log("resolve before running any code.\n");
    console.log("  // fetch request");
    console.log("  const colors = fetch('../data/colors.json')");
    console.log("    .then(response => response.json());\n");
    console.log("  export default await colors;\n");
}