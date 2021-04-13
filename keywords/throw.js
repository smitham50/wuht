module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  throw  ");
    console.log("---------------\n");

    console.log("The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be");
    console.log("passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.\n");

    console.log("Demo:\n");

    console.log("  function getRectArea(width, height) {");
    console.log("    if (isNaN(width) || isNaN(height)) {");
    console.log("      throw 'Parameter is not a number!';");
    console.log("    }");
    console.log("  }\n");
    console.log("  try {");
    console.log("    getRectArea(3, 'A');");
    console.log("  } catch (e) {");
    console.log("    console.error(e);");
    console.log("    // expected output: 'Parameter is not a number!'");
    console.log("  }\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  throw expression;\n");

    console.log("expression:");
    console.log("    The expression to throw.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("Use the throw statement to throw an exception. When you throw an exception, expression specifies the value of the exception. Each of the following throws an exception:\n");
    console.log("  throw 'Error2'; // generates an exception with a string value");
    console.log("  throw 42;       // generates an exception with the value 42");
    console.log("  throw true;     // generates an exception with the value true");
    console.log("  throw new Error('Required');  // generates an error object with the message of Required\n");
    console.log("Also note that the throw statement is affected by automatic semicolon insertion (ASI) as no line terminator between the throw keyword and the expression is allowed.\n");
    
    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Throw an object -\n");

    console.log("You can specify an object when you throw an exception. You can then reference the object's properties in the catch block. The following example creates an object of")
    console.log("type UserException and uses it in a throw statement.\n");
    console.log("  function UserException(message) {");
    console.log("    this.message = message;");
    console.log("    this.name = 'UserException';");
    console.log("  }");
    console.log("  function getMonthName(mo) {");
    console.log("    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)");
    console.log("    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',");
    console.log("      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];");
    console.log("    if (months[mo] !== undefined) {");
    console.log("      return months[mo];");
    console.log("    } else {");
    console.log("      throw new UserException('InvalidMonthNo');");
    console.log("    }");
    console.log("  }\n");
    console.log("  try {");
    console.log("    // statements to try");
    console.log("    var myMonth = 15; // 15 is out of bound to raise the exception");
    console.log("    var monthName = getMonthName(myMonth);");
    console.log("  } catch (e) {");
    console.log("    monthName = 'unknown';");
    console.log("    console.error(e.message, e.name); // pass exception object to err handler");
    console.log("  }\n");

    console.log("- Another example of throwing an object -\n");
    
    console.log("The following example tests an input string for a U.S. zip code. If the zip code uses an invalid format, the throw statement throws an exception by creating an object");
    console.log("of type ZipCodeFormatException.\n");
    console.log("  /*");
    console.log("  * Creates a ZipCode object.");
    console.log("  *");
    console.log("  * Accepted formats for a zip code are:");
    console.log("  *    12345");
    console.log("  *    12345-6789");
    console.log("  *    123456789");
    console.log("  *    12345 6789");
    console.log("  *");
    console.log("  * If the argument passed to the ZipCode constructor does not");
    console.log("  * conform to one of these patterns, an exception is thrown.");
    console.log("  */\n");
    console.log("  function ZipCode(zip) {");
    console.log("    zip = new String(zip);");
    console.log("    pattern = /[0-9]{5}([- ]?[0-9]{4})?/;");
    console.log("    if (pattern.test(zip)) {");
    console.log("      // zip code value will be the first match in the string");
    console.log("      this.value = zip.match(pattern)[0];");
    console.log("      this.valueOf = function () {");
    console.log("        return this.value");
    console.log("      };");
    console.log("      this.toString = function () {");
    console.log("        return String(this.value)");
    console.log("      };");
    console.log("    } else {");
    console.log("      throw new ZipCodeFormatException(zip);");
    console.log("    }");
    console.log("  }\n");
    console.log("  function ZipCodeFormatException(value) {");
    console.log("    this.value = value;");
    console.log("    this.message = 'does not conform to the expected format for a zip code';");
    console.log("    this.toString = function () {");
    console.log("      return this.value + this.message;");
    console.log("    };");
    console.log("  }\n");
    console.log("  /*");
    console.log("  * This could be in a script that validates address data");
    console.log("  * for US addresses.");
    console.log("  */\n");
    console.log("  const ZIPCODE_INVALID = -1;");
    console.log("  const ZIPCODE_UNKNOWN_ERROR = -2;\n");
    console.log("  function verifyZipCode(z) {");
    console.log("    try {");
    console.log("      z = new ZipCode(z);");
    console.log("    } catch (e) {");
    console.log("      if (e instanceof ZipCodeFormatException) {");
    console.log("        return ZIPCODE_INVALID;");
    console.log("      } else {");
    console.log("        return ZIPCODE_UNKNOWN_ERROR;");
    console.log("      }");
    console.log("    }");
    console.log("    return z;");
    console.log("  }\n");
    console.log("  a = verifyZipCode(95060);         // returns 95060");
    console.log("  b = verifyZipCode(9560);          // returns -1");
    console.log("  c = verifyZipCode('a');           // returns -1");
    console.log("  d = verifyZipCode('95060');       // returns 95060");
    console.log("  e = verifyZipCode('95060 1234');  // returns 95060 1234\n");

    console.log("- Rethrow exception -\n");
    
    console.log("You can use throw to rethrow an exception after you catch it. The following example catches an exception with a numeric value and rethrows it if the value is over 50.");
    console.log("The rethrown exception propagates up to the enclosing function or to the top level so that the user sees it.\n");
    console.log("  try {");
    console.log("    throw n; // throws an exception with a numeric value");
    console.log("  } catch (e) {");
    console.log("    if (e <= 50) {");
    console.log("      // statements to handle exceptions 1-50");
    console.log("    } else {");
    console.log("      // cannot handle this exception, so rethrow");
    console.log("      throw e;");
    console.log("    }");
    console.log("  }\n");
}