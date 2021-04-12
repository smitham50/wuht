module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  super  ");
    console.log("---------------\n");

    console.log("The super keyword is used to access and call functions on an object's parent.\n");
    console.log("The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals.\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  super([arguments]); // calls the parent constructor.");
    console.log("  super.functionOnParent([arguments]);\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on");
    console.log("a parent object.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Using super in classes -\n");

    console.log("This code snippet is taken from the classes sample (live demo). Here super() is called to avoid duplicating the constructor parts' that are common between Rectangle");
    console.log("and Square.\n");
    console.log("  class Rectangle {");
    console.log("    constructor(height, width) {");
    console.log("      this.name = 'Rectangle';");
    console.log("      this.height = height;");
    console.log("      this.width = width;");
    console.log("    }");
    console.log("    sayName() {");
    console.log("      console.log('Hi, I am a ', this.name + '.');");
    console.log("    }");
    console.log("    get area() {");
    console.log("      return this.height * this.width;");
    console.log("    }");
    console.log("    set area(value) {");
    console.log("      this._area = value;");
    console.log("    }");
    console.log("  }\n");
    console.log("  class Square extends Rectangle {");
    console.log("    constructor(length) {");
    console.log("      this.height; // ReferenceError, super needs to be called first!\n");
    console.log("      // Here, it calls the parent class's constructor with lengths");
    console.log("      // provided for the Rectangle's width and height");
    console.log("      super(length, length);\n");
    console.log("      // Note: In derived classes, super() must be called before you");
    console.log("      // can use 'this'. Leaving this out will cause a reference error.");
    console.log("      this.name = 'Square';");
    console.log("    }");
    console.log("  }\n");

    console.log("- Super-calling static methods -\n");
    
    console.log("You are also able to call super on static methods.\n");
    console.log("  class Rectangle {");
    console.log("    static logNbSides() {");
    console.log("      return 'I have 4 sides';");
    console.log("    }");
    console.log("  }\n");
    console.log("  class Square extends Rectangle {");
    console.log("    static logDescription() {");
    console.log("      return super.logNbSides() + ' which are all equal';");
    console.log("    }");
    console.log("  }");
    console.log("  Square.logDescription(); // 'I have 4 sides which are all equal'\n");

    console.log("- Deleting super properties will throw an error -\n");
    
    console.log("You cannot use the delete operator and super.prop or super[expr] to delete a parent class' property, it will throw a ReferenceError.\n");
    console.log("  class Base {");
    console.log("    foo() { }");
    console.log("  }");
    console.log("  class Derived extends Base {");
    console.log("    delete() {");
    console.log("      delete super.foo; // this is bad");
    console.log("    }");
    console.log("  }\n");
    console.log("  new Derived().delete(); // ReferenceError: invalid delete involving 'super'. \n");

    console.log("- super.prop cannot overwrite non-writeable properties -\n");
    
    console.log("When defining non-writable properties with e.g. Object.defineProperty, super cannot overwrite the value of the property.\n");
    console.log("  class X {");
    console.log("    constructor() {");
    console.log("      Object.defineProperty(this, 'prop', {");
    console.log("        configurable: true,");
    console.log("        writable: false,");
    console.log("        value: 1");
    console.log("      });");
    console.log("    }");
    console.log("  }\n");
    console.log("  class Y extends X {");
    console.log("    constructor() {");
    console.log("      super();");
    console.log("    }");
    console.log("    foo() {");
    console.log("      super.prop = 2;   // Cannot overwrite the value.");
    console.log("    }");
    console.log("  }\n");
    console.log("  var y = new Y();");
    console.log("  y.foo(); // TypeError: 'prop' is read-only");
    console.log("  console.log(y.prop); // 1\n");

    console.log("- Using super.prop in object literals -\n");
    
    console.log("Super can also be used in the object initializer / literal notation. In this example, two objects define a method. In the second object, super calls the first object's");
    console.log("method. This works with the help of Object.setPrototypeOf() with which we are able to set the prototype of obj2 to obj1, so that super is able to find method1 on obj1.\n");
    console.log("  var obj1 = {");
    console.log("    method1() {");
    console.log("      console.log('method 1');");
    console.log("    }");
    console.log("  }\n");
    console.log("  var obj2 = {");
    console.log("    method2() {");
    console.log("      super.method1();");
    console.log("    }");
    console.log("  }\n");
    console.log("  Object.setPrototypeOf(obj2, obj1);");
    console.log("  obj2.method2(); // logs 'method 1'\n");
}