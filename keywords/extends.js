module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  class  ");
    console.log("---------------\n");

    console.log("The class declaration creates a new class with a given name using prototype-based inheritance.\n");

    console.log("Demo:\n");

    console.log("  class Polygon {");
    console.log("    constructor(height, width) {");
    console.log("      this.area = height * width;");
    console.log("    }");
    console.log("  }\n");
    console.log("  console.log(new Polygon(4, 3).area);");
    console.log("  // expected output: 12\n");
    console.log("You can also define a class using a class expression. But unlike a class expression, a class declaration doesn't allow an existing class to be declared again and");
    console.log("will throw a SyntaxError if attempted.\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  class name [extends otherName] {");
    console.log("    // class body");
    console.log("  }\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The class body of a class declaration is executed in strict mode. The constructor method is optional.\n");
    console.log("Class declarations are not hoisted (unlike function declarations).\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- A simple class declaration -\n");

    console.log("In the following example, we first define a class named Polygon, then extend it to create a class named Square.\n");
    console.log("Note that super(), used in the constructor, can only be used in constructors, and must be called before the this keyword can be used.\n");
    console.log("  class Polygon {");
    console.log("    constructor(height, width) {");
    console.log("      this.name = 'Polygon';");
    console.log("      this.height = height;");
    console.log("      this.width = width;");
    console.log("    }");
    console.log("  }\n");
    console.log("  class Square extends Polygon {");
    console.log("    constructor(length) {");
    console.log("      super(length, length);");
    console.log("      this.name = 'Square';");
    console.log("    }");
    console.log("  }\n");

    console.log("- Attempting to declare a class twice -\n");

    console.log("Re-declaring a class using the class declaration throws a SyntaxError.\n");
    console.log("  class Foo { };");
    console.log("  class Foo { }; // Uncaught SyntaxError: Identifier 'Foo' has already been declared\n");
    console.log("The same error is thrown when a class has been defined before using the class expression.\n");
    console.log("  let Foo = class { };");
    console.log("  class Foo { }; // Uncaught SyntaxError: Identifier 'Foo' has already been declared\n");
}