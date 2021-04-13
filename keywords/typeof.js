module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  typeof  ");
    console.log("---------------\n");

    console.log("The typeof operator returns a string indicating the type of the unevaluated operand.\n");
    
    console.log("Demo:\n");

    console.log("  console.log(typeof 42);");
    console.log("  // expected output: 'number'\n");
    console.log("  console.log(typeof 'blubber');");
    console.log("  // expected output: 'string'\n");
    console.log("  console.log(typeof true);");
    console.log("  // expected output: 'boolean'\n");
    console.log("  console.log(typeof undeclaredVariable);");
    console.log("  // expected output: 'undefined'\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("The typeof operator is followed by its operand:\n");
    console.log("  typeof operand\n");
    console.log("  typeof(operand)\n");
    console.log("operand:");
    console.log("    An expression representing the object or primitive whose type is to be returned.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The following table summarizes the possible return values of typeof. For more information about types and primitives, see also the JavaScript data structure page.\n");
    console.log("  Type	                                                         |        Result");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Undefined	                                                 |        'undefined'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Null	                                                         |        'object'(see below)");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Boolean	                                                 |        'boolean'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Number	                                                 |        'number'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  BigInt(new in ECMAScript 2020)	                         |        'bigint'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  String	                                                 |        'string'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Symbol(new in ECMAScript 2015)	                         |        'symbol'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Function object(implements[[Call]] in ECMA - 262 terms)	 |        'function'");
    console.log("  ----------------------------------------------------------------------------------------------");
    console.log("  Any other object	                                         |        'object'");
    console.log("  ----------------------------------------------------------------------------------------------\n");
    console.log("Note: ECMAScript 2019 and older permitted implementations to have typeof return any implementation-defined string value for non-callable non-standard exotic objects.\n");
    console.log("The only known browser to have actually taken advantage of this is old Internet Explorer (see below).\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Basic usage -\n");

    console.log("// Numbers");
    console.log("  typeof 37 === 'number';");
    console.log("  typeof 3.14 === 'number';");
    console.log("  typeof (42) === 'number';");
    console.log("  typeof Math.LN2 === 'number';");
    console.log("  typeof Infinity === 'number';");
    console.log("  typeof NaN === 'number'; // Despite being 'Not - A - Number'");
    console.log("  typeof Number('1') === 'number';      // Number tries to parse things into numbers");
    console.log("  typeof Number('1') === 'number';      // Number tries to parse things into numbers");
    console.log("  typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number\n");
    console.log("  typeof 42n === 'bigint';\n");
    console.log("  // Strings");
    console.log("  typeof '' === 'string';");
    console.log("  typeof 'bla' === 'string';");
    console.log("  typeof `template literal` === 'string';");
    console.log("  typeof '1' === 'string'; // note that a number within a string is still typeof string");
    console.log("  typeof (typeof 1) === 'string'; // typeof always returns a string");
    console.log("  typeof String(1) === 'string'; // String converts anything into a string, safer than toString\n");
    console.log("  // Booleans");
    console.log("  typeof true === 'boolean';");
    console.log("  typeof false === 'boolean';");
    console.log("  typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy");
    console.log("  typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()\n");
    console.log("  // Symbols");
    console.log("  typeof Symbol() === 'symbol'");
    console.log("  typeof Symbol('foo') === 'symbol'");
    console.log("  typeof Symbol.iterator === 'symbol'\n");
    console.log("  // Undefined");
    console.log("  typeof undefined === 'undefined';");
    console.log("  typeof declaredButUndefinedVariable === 'undefined';");
    console.log("  typeof undeclaredVariable === 'undefined';\n");
    console.log("  // Objects");
    console.log("  typeof { a: 1 } === 'object';\n");
    console.log("  // use Array.isArray or Object.prototype.toString.call");
    console.log("  // to differentiate regular objects from arrays");
    console.log("  typeof [1, 2, 4] === 'object';\n");
    console.log("  typeof new Date() === 'object';");
    console.log("  typeof /regex/ === 'object'; // See Regular expressions section for historical results\n");
    console.log("  // The following are confusing, dangerous, and wasteful. Avoid them.");
    console.log("  typeof new Boolean(true) === 'object';");
    console.log("  typeof new Number(1) === 'object';");
    console.log("  typeof new String('abc') === 'object';\n");
    console.log("  // Functions");
    console.log("  typeof function () { } === 'function';");
    console.log("  typeof class C { } === 'function';");
    console.log("  typeof Math.sin === 'function';\n");

    console.log("- typeof null -\n");

    console.log("  // This stands since the beginning of JavaScript");
    console.log("  typeof null === 'object';\n");
    console.log("In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the");
    console.log("NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the typeof return value 'object'. (reference)\n");
    console.log("A fix was proposed for ECMAScript (via an opt-in), but was rejected. It would have resulted in typeof null === 'null'.\n");
    
    console.log("- Using new operator -\n");
    
    console.log("  // All constructor functions, with the exception of the Function constructor, will always be typeof 'object'");
    console.log("  let str = new String('String');");
    console.log("  let num = new Number(100);\n");
    console.log("  typeof str; // It will return 'object'");
    console.log("  typeof num; // It will return 'object'\n");
    console.log("  let func = new Function();\n");
    console.log("  typeof func; // It will return 'function'\n");

    console.log("- Need for parentheses in Syntax -\n");
    
    console.log("  // Parentheses can be used for determining the data type of expressions.");
    console.log("  let iData = 99;\n");
    console.log("  typeof iData + ' Wisen'; // 'number Wisen'");
    console.log("  typeof (iData + ' Wisen'); // 'string'\n");

    console.log("- Regular expressions -\n");
    
    console.log("Callable regular expressions were a non-standard addition in some browsers.\n");
    console.log("  typeof /s/ === 'function'; // Chrome 1-12 Non-conform to ECMAScript 5.1");
    console.log("  typeof /s/ === 'object';   // Firefox 5+  Conform to ECMAScript 5.1\n");

    console.log("- Errors -\n");
    
    console.log("Before ECMAScript 2015, typeof was always guaranteed to return a string for any operand it was supplied with. Even with undeclared identifiers, typeof will return");
    console.log("'undefined'. Using typeof could never generate an error.\n");
    console.log("But with the addition of block-scoped let and Statements/const using typeof on let and const variables (or using typeof on a class) in a block before they are declared");
    console.log("will throw a ReferenceError. Block scoped variables are in a 'temporal dead zone' from the start of the block until the initialization is processed, during which, it will");
    console.log("throw an error if accessed.\n");
    console.log("  typeof undeclaredVariable === 'undefined';\n");
    console.log("  typeof newLetVariable; // ReferenceError");
    console.log("  typeof newConstVariable; // ReferenceError");
    console.log("  typeof newClass; // ReferenceError\n");
    console.log("  let newLetVariable;");
    console.log("  const newConstVariable = 'hello';");
    console.log("  class newClass { };\n");

    console.log("- Exceptions -\n");
    
    console.log("All current browsers expose a non-standard host object document.all with type undefined.\n");
    console.log("  typeof document.all === 'undefined';\n");
    console.log("Although the specification allows custom type tags for non-standard exotic objects, it requires those type tags to be different from the predefined ones. The case of");
    console.log("document.all having type 'undefined' is classified in the web standards as a 'willful violation' of the original ECMA JavaScript standard.\n");
    
    console.log("- Real-world usage -\n");
    
    console.log("typeof is very useful, but it's not as versatile as might be required. For example, typeof([]) , is 'object', as well as typeof(new Date()), typeof(/abc/), etc.\n");
    console.log("For greater specificity in checking types, a typeof wrapper for usage in production-level code would be as follows (provided obj exists):\n");
    console.log("  function type(obj, fullClass) {\n");
    console.log("    // get toPrototypeString() of obj (handles all types)");
    console.log("    // Early JS environments return '[object Object]' for null, so it's best to directly check for it.");
    console.log("    if (fullClass) {");
    console.log("      return (obj === null) ? '[object Null]' : Object.prototype.toString.call(obj);");
    console.log("    }");
    console.log("    if (obj == null) { return (obj + '').toLowerCase(); } // implicit toString() conversion\n");
    console.log("    var deepType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();");
    console.log("    if (deepType === 'generatorfunction') { return 'function' }\n");
    console.log("    // Prevent overspecificity (for example, [object HTMLDivElement], etc).");
    console.log("    // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.");
    console.log("    // String.prototype.match is universally supportedn");
    console.log("    return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :");
    console.log("      (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;\n");
    console.log("  }\n");
    console.log("For checking non-existent variables that would otherwise throw a ReferenceError, use typeof nonExistentVar === 'undefined'.\n");
}