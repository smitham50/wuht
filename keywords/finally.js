module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  try...catch  ");
    console.log("---------------\n");

    console.log("The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.\n");

    console.log("Demo:\n");

    console.log("  try {");
    console.log("    nonExistentFunction();");
    console.log("  } catch (error) {");
    console.log("    console.error(error);");
    console.log("    // expected output: ReferenceError: nonExistentFunction is not defined");
    console.log("    // Note - error messages will vary depending on browser");
    console.log("  }\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  try {");
    console.log("    try_statements");
    console.log("  }");
    console.log("  catch (exception_var) {");
    console.log("    catch_statements");
    console.log("  }");
    console.log("  finally {");
    console.log("    finally_statements");
    console.log("  }\n");

    console.log("try_statements:");
    console.log("    The statements to be executed.\n");
    console.log("catch_statements:");
    console.log("    Statement that is executed if an exception is thrown in the try-block.\n");
    console.log("exception_var:");
    console.log("    An optional identifier to hold an exception object for the associated catch-block.\n");
    console.log("finally_statements:");
    console.log("    Statements that are executed after the try statement completes.These statements execute regardless of whether an exception was thrown or caught.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The try statement consists of a try-block, which contains one or more statements. {} must always be used, even for single statements. At least one catch-block,");
    console.log("or a finally-block, must be present. This gives us three forms for the try statement:\n");
    console.log("    - try...catch");
    console.log("    - try...finally");
    console.log("    - try...catch...finally\n");
    console.log("A catch-block contains statements that specify what to do if an exception is thrown in the try-block. If any statement within the try-block (or in a function");
    console.log("called from within the try-block) throws an exception, control is immediately shifted to the catch-block. If no exception is thrown in the try-block, the catch-block");
    console.log("is skipped.\n");
    console.log("The finally-block will always execute after the try-block and catch-block(s) have finished executing. It always executes, regardless of whether an exception was");
    console.log("thrown or caught.\n");
    console.log("You can nest one or more try statements. If an inner try statement does not have a catch-block, the enclosing try statement's catch-block is used instead.\n");
    console.log("You can also use the try statement to handle JavaScript exceptions. See the JavaScript Guide for more information on JavaScript exceptions.\n");

    console.log("- Unconditional catch-block -\n");

    console.log("When a catch-block is used, the catch-block is executed when any exception is thrown from within the try-block. For example, when the exception occurs in the");
    console.log("following code, control transfers to the catch-block.\n");
    console.log("  try {");
    console.log("    throw 'myException'; // generates an exception");
    console.log("  } catch (e) {");
    console.log("    // statements to handle any exceptions");
    console.log("    logMyErrors(e); // pass exception object to error handler");
    console.log("  }\n");
    console.log("The catch-block specifies an identifier (e in the example above) that holds the value of the exception; this value is only available in the scope of the catch-block.\n");

    console.log("- Conditional catch blocks -\n");

    console.log("You can create 'Conditional catch-blocks' by combining try...catch blocks with if...else if...else structures, like this:\n");
    console.log("  try {");
    console.log("    myroutine(); // may throw three types of exceptions");
    console.log("  } catch (e) {");
    console.log("    if (e instanceof TypeError) {");
    console.log("      // statements to handle TypeError exceptions");
    console.log("    } else if (e instanceof RangeError) {");
    console.log("      // statements to handle RangeError exceptions");
    console.log("    } else if (e instanceof EvalError) {");
    console.log("      // statements to handle EvalError exceptions");
    console.log("    } else {");
    console.log("      // statements to handle any unspecified exceptions");
    console.log("      logMyErrors(e); // pass exception object to error handler");
    console.log("    }");
    console.log("  }\n");
    console.log("A common use case for this is to only catch (and silence) a small subset of expected errors, and then re-throw the error in other cases:\n");
    console.log("  try {");
    console.log("    myRoutine();");
    console.log("  } catch (e) {");
    console.log("    if (e instanceof RangeError) {");
    console.log("      // statements to handle this very common expected error");
    console.log("    } else {");
    console.log("      throw e;  // re-throw the error unchanged");
    console.log("    }");
    console.log("  }\n");

    console.log("- The exception identifier -\n");

    console.log("When an exception is thrown in the try-block, exception_var (i.e., the e in catch (e)) holds the exception value. You can use this identifier to get information");
    console.log("about the exception that was thrown. This identifier is only available in the catch-block's scope. If you don't need the exception value, it could be omitted.\n");
    console.log("  function isValidJSON(text) {");
    console.log("    try {");
    console.log("      JSON.parse(text);");
    console.log("      return true;");
    console.log("    } catch {");
    console.log("      return false;");
    console.log("    }");
    console.log("  }\n");

    console.log("- The finally-block -\n");

    console.log("The finally-block contains statements to execute after the try-block and catch-block(s) execute, but before the statements following the try...catch...finally-block.");
    console.log(" Note that the finally-block executes regardless of whether an exception is thrown. Also, if an exception is thrown, the statements in the finally-block execute even");
    console.log("if no catch-block handles the exception.\n");
    console.log("The following example shows one use case for the finally-block. The code opens a file and then executes statements that use the file; the finally-block makes sure the");
    console.log("file always closes after it is used even if an exception was thrown.\n");
    console.log("  openMyFile();");
    console.log("    try {");
    console.log("      // tie up a resource");
    console.log("      writeMyFile(theData);");
    console.log("    } finally {");
    console.log("      closeMyFile(); // always close the resource");
    console.log("  }\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Nested try-blocks -\n");

    console.log("First, let's see what happens with this:\n");
    console.log("  try {");
    console.log("    try {");
    console.log("      throw new Error('oops');");
    console.log("    } finally {");
    console.log("      console.log('finally');");
    console.log("    }");
    console.log("  } catch (ex) {");
    console.log("    console.error('outer', ex.message);");
    console.log("  }\n");
    console.log("  // Output:");
    console.log("  // 'finally'");
    console.log("  // 'outer' 'oops'\n");
    console.log("Now, if we already caught the exception in the inner try-block by adding a catch-block\n");
    console.log("  try {");
    console.log("    try {");
    console.log("      throw new Error('oops');");
    console.log("    } catch (ex) {");
    console.log("      console.error('inner', ex.message);");
    console.log("    } finally {");
    console.log("      console.log('finally');");
    console.log("    }");
    console.log("  } catch (ex) {");
    console.log("    console.error('outer', ex.message);");
    console.log("  }\n");
    console.log("  // Output:");
    console.log("  // 'inner' 'oops'");
    console.log("  // 'finally'\n");
    console.log("And now, let's rethrow the error.\n");
    console.log("  try {");
    console.log("    try {");
    console.log("      throw new Error('oops');");
    console.log("    } catch (ex) {");
    console.log("      console.error('inner', ex.message);");
    console.log("      throw ex;");
    console.log("    } finally {");
    console.log("      console.log('finally');");
    console.log("    }");
    console.log("  } catch (ex) {");
    console.log("    console.error('outer', ex.message);");
    console.log("  }\n");
    console.log("  // Output:");
    console.log("  // 'inner' 'oops'");
    console.log("  // 'finally'");
    console.log("  // 'outer' 'oops'\n");
    console.log("Any given exception will be caught only once by the nearest enclosing catch-block unless it is rethrown. Of course, any new exceptions raised in the 'inner'");
    console.log("block (because the code in catch-block may do something that throws), will be caught by the 'outer' block.\n");

    console.log("- Returning from a finally-block -\n");

    console.log("If the finally-block returns a value, this value becomes the return value of the entire try-catch-finally statement, regardless of any return statements in the");
    console.log("try and catch-blocks. This includes exceptions thrown inside of the catch-block:\n");
    console.log("  (function () {");
    console.log("    try {");
    console.log("      try {");
    console.log("        throw new Error('oops');");
    console.log("      } catch (ex) {");
    console.log("        console.error('inner', ex.message);");
    console.log("        throw ex;");
    console.log("      } finally {");
    console.log("        console.log('finally');");
    console.log("        return;");
    console.log("      }");
    console.log("    } catch (ex) {");
    console.log("      console.error('outer', ex.message);");
    console.log("    }");
    console.log("  })();\n");
    console.log("  // Output:");
    console.log("  // 'inner' 'oops'");
    console.log("  // 'finally'\n");
    console.log("The outer 'oops' is not thrown because of the return in the finally-block. The same would apply to any value returned from the catch-block.\n");
}