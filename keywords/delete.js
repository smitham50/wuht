module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  delete  ");
    console.log("---------------\n");

    console.log("The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.\n");

    console.log("Demo:\n");
    console.log("  const Employee = {");
    console.log("    firstname: 'John',");
    console.log("    lastname: 'Doe'");
    console.log("  };\n");
    console.log("  console.log(Employee.firstname);");
    console.log("  // expected output: 'John'\n");
    console.log("  delete Employee.firstname;\n");
    console.log("  console.log(Employee.firstname);");
    console.log("  // expected output: undefined\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  delete expression");
    console.log("Where expression should evaluate to a property reference, e.g.:\n");
    console.log("  delete object.property");
    console.log("  delete object['property']");

    console.log("- Parameters -\n");

    console.log("object:");
    console.log("    The name of an object, or an expression evaluating to an object.");
    console.log("property:");
    console.log("    The property to delete.");

    console.log("- Return value -\n");

    console.log("true for all cases except when the property is an own non-configurable property, in which case, false is returned in non-strict mode.\n");

    console.log("- Exceptions -\n");

    console.log("Throws TypeError in strict mode if the property is an own non-configurable property.\n")

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("Unlike what common belief suggests (perhaps due to other programming languages like delete in C++), the delete operator has nothing to do with directly freeing");
    console.log("memory. Memory management is done indirectly via breaking references. See the memory management page for more details.\n");
    console.log("The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned.\n");
    console.log("However, it is important to consider the following scenarios:\n");
    console.log("    - If the property which you are trying to delete does not exist, delete will not have any effect and will return true.");
    console.log("    - If a property with the same name exists on the object's prototype chain, then, after deletion, the object will use the property from the prototype chain (in");
    console.log("      other words, delete only has an effect on own properties).");
    console.log("    - Any property declared with var cannot be deleted from the global scope or from a function's scope.");
    console.log("          - As such, delete cannot delete any functions in the global scope (whether this is part from a function definition or a function expression).");
    console.log("          - Functions which are part of an object (apart from the global scope) can be deleted with delete.");
    console.log("    - Any property declared with let or const cannot be deleted from the scope within which they were defined.");
    console.log("    - Non-configurable properties cannot be removed. This includes properties of built-in objects like Math, Array, Object and properties that are created as");
    console.log("      non-configurable with methods like Object.defineProperty().\n");
    console.log("The following snippet gives a simple example:\n");
    console.log("  var Employee = {");
    console.log("    age: 28,");
    console.log("    name: 'abc',");
    console.log("    designation: 'developer'");
    console.log("  }\n");
    console.log("  console.log(delete Employee.name);   // returns true");
    console.log("  console.log(delete Employee.age);    // returns true\n");
    console.log("  // When trying to delete a property that does");
    console.log("  // not exist, true is returned");
    console.log("  console.log(delete Employee.salary); // returns true\n");

    console.log("- Non-configurable properties -\n");

    console.log("When a property is marked as non-configurable, delete won't have any effect, and will return false. In strict mode this will raise a TypeError.\n");
    console.log("  var Employee = {};");
    console.log("  Object.defineProperty(Employee, 'name', { configurable: false });\n");
    console.log("  console.log(delete Employee.name);  // returns false\n");
    console.log("var, let, and const create non-configurable properties that cannot be deleted with the delete operator:\n");
    console.log("  var nameOther = 'XYZ';\n");
    console.log("  // We can access this global property using:");
    console.log("  Object.getOwnPropertyDescriptor(window, 'nameOther');\n");
    console.log("  // output: Object {value: 'XYZ',");
    console.log("  //                  writable: true,");
    console.log("  //                  enumerable: true,");
    console.log("  //                  configurable: false}\n");
    console.log("  // Since 'nameOther' is added using with the");
    console.log("  // var keyword, it is marked as 'non - configurable'\n");
    console.log("  delete nameOther;   // return false\n");
    console.log("In strict mode, this would have raised an exception.\n");

    console.log("- Strict vs. non-strict mode -\n");

    console.log("When in strict mode, if delete is used on a direct reference to a variable, a function argument or a function name, it will throw a SyntaxError. Therefore, to avoid");
    console.log("syntax errors in strict mode, you must use the delete operator in the form of delete object.property or delete object['property'].\n");
    console.log("  Object.defineProperty(globalThis, 'variable1', { value: 10, configurable: true, });");
    console.log("  Object.defineProperty(globalThis, 'variable2', { value: 10, configurable: false, });\n");
    console.log("  // SyntaxError in strict mode.");
    console.log("  console.log(delete variable1); // true\n");
    console.log("  // SyntaxError in strict mode.");
    console.log("  console.log(delete variable2); // false\n");
    console.log("  --------\n");
    console.log("  function func(param) {");
    console.log("    // SyntaxError in strict mode.");
    console.log("    console.log(delete param); // false");
    console.log("  }\n");
    console.log("  // SyntaxError in strict mode.");
    console.log("  console.log(delete func); // false\n");
    
    console.log("- Cross-browser notes -\n");

    console.log("Although ECMAScript makes iteration order of objects implementation-dependent, it may appear that all major browsers support an iteration order based on the earliest");
    console.log("added property coming first (at least for properties not on the prototype). However, in the case of Internet Explorer, when one uses delete on a property, some confusing");
    console.log("behavior results, preventing other browsers from using simple objects like object literals as ordered associative arrays. In Explorer, while the property value is indeed");
    console.log("set to undefined, if one later adds back a property with the same name, the property will be iterated in its old position--not at the end of the iteration sequence as one");
    console.log("might expect after having deleted the property and then added it back.\n");
    console.log("If you want to use an ordered associative array in a cross-browser environment, use a Map object if available, or simulate this structure with two separate arrays (one for");
    console.log("the keys and the other for the values), or build an array of single-property objects, etc.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("  // Creates the property adminName on the global scope.");
    console.log("  adminName = 'xyz';\n");
    console.log("  // Creates the property empCount on the global scope.");
    console.log("  // Since we are using var, this is marked as non-configurable. The same is true of let and const.");
    console.log("  var empCount = 43;\n");
    console.log("  EmployeeDetails = {");
    console.log("    name: 'xyz',");
    console.log("    age: 5,");
    console.log("    designation: 'Developer'");
    console.log("  };\n");
    console.log("  // adminName is a property of the global scope.");
    console.log("  // It can be deleted since it is created without var,");
    console.log("  // and is therefore configurable.");
    console.log("  delete adminName;       // returns true");
    console.log("  // On the contrary, empCount is not configurable");
    console.log("  // since var was used.");
    console.log("  delete empCount;       // returns false\n");
    console.log("  // delete can be used to remove properties from objects.");
    console.log("  delete EmployeeDetails.name; // returns true\n");
    console.log("  // Even when the property does not exist, delete returns 'true'.");
    console.log("  delete EmployeeDetails.salary; // returns true\n");
    console.log("  // delete does not affect built-in static properties.");
    console.log("  delete Math.PI; // returns false\n");
    console.log("  // EmployeeDetails is a property of the global scope.");
    console.log("  // Since it was defined without 'var', it is marked configurable.");
    console.log("  delete EmployeeDetails;   // returns true\n");
    console.log("  function f() {");
    console.log("    var z = 44;\n");
    console.log("    // delete doesn't affect local variable names");
    console.log("    delete z;     // returns false");
    console.log("  }\n");

    console.log("- delete and the prototype chain -\n");

    console.log("In the following example, we delete an own property of an object while a property with the same name is available on the prototype chain:\n");
    console.log("  function Foo() {");
    console.log("    this.bar = 10;");
    console.log("  }\n");
    console.log("  Foo.prototype.bar = 42;\n");
    console.log("  var foo = new Foo();\n");
    console.log("  // foo.bar is associated with the");
    console.log("  // own property.");
    console.log("  console.log(foo.bar); // 10\n");
    console.log("  // Delete the own property within the");
    console.log("  // foo object.");
    console.log("  delete foo.bar; // returns true\n");
    console.log("  // foo.bar is still available in the");
    console.log("  // prototype chain.");
    console.log("  console.log(foo.bar); // 42\n");
    console.log("  // Delete the property on the prototype.");
    console.log("  delete Foo.prototype.bar; // returns true\n");
    console.log("  // The 'bar' property can no longer be");
    console.log("  // inherited from Foo since it has been");
    console.log("  // deleted.");
    console.log("  console.log(foo.bar); // undefined\n");

    console.log("- Deleting array elements -\n");

    console.log("  When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.\n");
    console.log("  When the delete operator removes an array element, that element is no longer in the array. In the following example, trees[3] is removed with delete.\n");
    console.log("  var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];");
    console.log("  delete trees[3];");
    console.log("  if (3 in trees) {");
    console.log("    // this is not executed");
    console.log("  }\n");
    console.log("If you want an array element to exist but have an undefined value, use the undefined value instead of the delete operator. In the following example, trees[3] is");
    console.log("assigned the value undefined, but the array element still exists:\n");
    console.log("  var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];");
    console.log("  trees[3] = undefined;");
    console.log("  if (3 in trees) {");
    console.log("    // this is executed");
    console.log("  }\n");
    console.log("If instead, you want to remove an array element by changing the contents of the array, use the splice() method. In the following example, trees[3] is removed from");
    console.log("the array completely using splice():\n");
    console.log("  var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];");
    console.log("  trees.splice(3, 1);");
    console.log("  console.log(trees); // ['redwood', 'bay', 'cedar', 'maple']\n");
}