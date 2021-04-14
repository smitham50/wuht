module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  yield  ");
    console.log("---------------\n");

    console.log("The yield keyword is used to pause and resume a generator function (function* or legacy generator function).\n");
    console.log("  function* foo(index) {");
    console.log("    while (index < 2) {");
    console.log("      yield index;");
    console.log("      index++;");
    console.log("    }");
    console.log("  }\n");
    console.log("  const iterator = foo(0);\n");
    console.log("  console.log(iterator.next().value);");
    console.log("  // expected output: 0\n");
    console.log("  console.log(iterator.next().value);");
    console.log("  // expected output: 1\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  [rv] = yield [expression]\n");

    console.log("expression (Optional):");
    console.log("    Defines the value to return from the generator function via the iterator protocol. If omitted, undefined is returned instead.\n");
    console.log("rv (Optional):");
    console.log("    Retrieves the optional value passed to the generator's next() method to resume its execution.\n");
    
    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");
    
    console.log("The yield keyword pauses generator function execution and the value of the expression following the yield keyword is returned to the generator's caller. It can be");
    console.log("thought of as a generator-based version of the return keyword.\n");
    console.log("yield can only be called directly from the generator function that contains it. It cannot be called from nested functions or from callbacks.\n");
    console.log("The yield keyword causes the call to the generator's next() method to return an IteratorResult object with two properties: value and done. The value property is the");
    console.log("result of evaluating the yield expression, and done is false, indicating that the generator function has not fully completed.\n");
    console.log("Once paused on a yield expression, the generator's code execution remains paused until the generator's next() method is called. Each time the generator's next() method");
    console.log("is called, the generator resumes execution, and runs until it reaches one of the following:\n");
    console.log("    - A yield, which causes the generator to once again pause and return the generator's new value. The next time next() is called, execution resumes with the statement");
    console.log("      immediately after the yield.\n");
    console.log("    - throw is used to throw an exception from the generator. This halts execution of the generator entirely, and execution resumes in the caller (as is normally the case");
    console.log("      when an exception is thrown).\n");
    console.log("    - The end of the generator function is reached. In this case, execution of the generator ends and an IteratorResult is returned to the caller in which the value is");
    console.log("      undefined and done is true.\n");
    console.log("    - A return statement is reached. In this case, execution of the generator ends and an IteratorResult is returned to the caller in which the value is the value specified");
    console.log("      by the return statement and done is true.\n");
    console.log("If an optional value is passed to the generator's next() method, that value becomes the value returned by the generator's current yield operation.\n");
    console.log("Between the generator's code path, its yield operators, and the ability to specify a new starting value by passing it to Generator.prototype.next(), generators offer");
    console.log("enormous power and control.\n");
    console.log("Unfortunately, next() is asymmetric, but that can’t be helped: It always sends a value to the currently suspended yield, but returns the operand of the following yield.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using yield -\n");

    console.log("The following code is the declaration of an example generator function.\n");
    console.log("  function* countAppleSales() {");
    console.log("    let saleList = [3, 7, 5]");
    console.log("    for (let i = 0; i < saleList.length; i++) {");
    console.log("      yield saleList[i]");
    console.log("    }");
    console.log("  }\n");
    console.log("Once a generator function is defined, it can be used by constructing an iterator as shown.\n");
    console.log("  let appleStore = countAppleSales()  // Generator { }");
    console.log("  console.log(appleStore.next())      // { value: 3, done: false }");
    console.log("  console.log(appleStore.next())      // { value: 7, done: false }");
    console.log("  console.log(appleStore.next())      // { value: 5, done: false }");
    console.log("  console.log(appleStore.next())      // { value: undefined, done: true }\n");
    console.log("You can also send a value with next(value) into the generator. 'step' evaluates as a return value in this syntax [rv] = yield [expression]\n");
    console.log("  function* counter(value) {");
    console.log("    let step;\n");
    console.log("    while (true) {");
    console.log("      step = yield ++value;\n");
    console.log("      if (step) {");
    console.log("        value += step;");
    console.log("      }");
    console.log("    }");
    console.log("  }\n");
    console.log("  const generatorFunc = counter(0);");
    console.log("  console.log(generatorFunc.next().value);   // 1");
    console.log("  console.log(generatorFunc.next().value);   // 2");
    console.log("  console.log(generatorFunc.next().value);   // 3");
    console.log("  console.log(generatorFunc.next(10).value); // 14");
    console.log("  console.log(generatorFunc.next().value);   // 15");
    console.log("  console.log(generatorFunc.next(10).value); // 26\n");
}