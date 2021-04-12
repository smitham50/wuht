module.exports = () => {
    console.log("");
    console.log("------------------------");
    console.log("  function declaration  ");
    console.log("------------------------\n");

    console.log("The function declaration (function statement) defines a function with the specified parameters. You can also define functions using the Function constructor and a");
    console.log("function expression.\n");

    console.log("Demo:\n");

    console.log("  function calcRectArea(width, height) {");
    console.log("    return width * height;");
    console.log("  }\n");
    console.log("  console.log(calcRectArea(5, 6));");
    console.log("  // expected output: 30\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  function name([param[, param, [..., param]]]) {");
    console.log("    [statements]");
    console.log("  }\n");
    console.log("name:");
    console.log("    The function name.\n");
    console.log("param (Optional):");
    console.log("    The name of an argument to be passed to the function. Maximum number of arguments varies in different engines.\n");
    console.log("statements (Optional):");
    console.log("    The statements which comprise the body of the function.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");
        
    console.log("A function created with a function declaration is a Function object and has all the properties, methods and behavior of Function objects. See Function for detailed");
    console.log("information on functions.\n");
    console.log("A function can also be created using an expression (see function expression).\n");
    console.log("By default, functions return undefined. To return any other value, the function must have a return statement that specifies the value to return.\n");

    console.log("- Conditionally created functions -\n");
    
    console.log("Functions can be conditionally declared, that is, a function statement can be nested within an if statement, however the results are inconsistent across implementations");
    console.log("and therefore this pattern should not be used in production code. For conditional function creation, use function expressions instead.\n");
    console.log("  var hoisted = 'foo' in this;");
    console.log("  console.log(`'foo' name ${hoisted ? 'is' : 'is not'} hoisted. typeof foo is ${typeof foo}`);");
    console.log("  if (false) {");
    console.log("    function foo() { return 1; }");
    console.log("  }\n");
    console.log("  // In Chrome:\n");
    console.log("  // 'foo' name is hoisted. typeof foo is undefined");
    console.log("  //");
    console.log("  // In Firefox:");
    console.log("  // 'foo' name is hoisted. typeof foo is undefined");
    console.log("  //");
    console.log("  // In Edge:");
    console.log("  // 'foo' name is not hoisted. typeof foo is undefined");
    console.log("  //");
    console.log("  // In Safari:");
    console.log("  // 'foo' name is hoisted. typeof foo is function\n");
    console.log("The results are exactly the same for a condition that evaluates to true\n");
    console.log("  var hoisted = 'foo' in this;");
    console.log("  console.log(`'foo' name ${hoisted ? 'is' : 'is not'} hoisted. typeof foo is ${typeof foo}`);");
    console.log("  if (true) {");
    console.log("  function foo() { return 1; }");
    console.log("  }\n");
    console.log("  // In Chrome:");
    console.log("  // 'foo' name is hoisted. typeof foo is undefined");
    console.log("  //");
    console.log("  // In Firefox:");
    console.log("  // 'foo' name is hoisted. typeof foo is undefined");
    console.log("  //");
    console.log("  // In Edge:");
    console.log("  // 'foo' name is not hoisted. typeof foo is undefined");
    console.log("  //");
    console.log("  // In Safari:");
    console.log("  // 'foo' name is hoisted. typeof foo is function\n");

    console.log("- Function declaration hoisting -\n");
    
    console.log("Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. You can use the function before you declared it:\n");
    console.log("  hoisted(); // logs 'foo'\n");
    console.log("  function hoisted() {");
    console.log("    console.log('foo');");
    console.log("  }\n");
    console.log("Note that function expressions are not hoisted:\n");
    console.log("  notHoisted(); // TypeError: notHoisted is not a function\n");
    console.log("  var notHoisted = function () {");
    console.log("    console.log('bar');");
    console.log("  };\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using function -\n");

    console.log("The following code declares a function that returns the total amount of sales, when given the number of units sold of products a, b, and c.\n");
    console.log("  function calc_sales(units_a, units_b, units_c) {");
    console.log("    return units_a * 79 + units_b * 129 + units_c * 699;");
    console.log("  }\n");
}