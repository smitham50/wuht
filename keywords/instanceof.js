module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  instanceof  ");
    console.log("---------------\n");

    console.log("The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. \n");

    console.log("Demo:\n");

    console.log("  function Car(make, model, year) {");
    console.log("    this.make = make;");
    console.log("    this.model = model;");
    console.log("    this.year = year;");
    console.log("  }");
    console.log("  const auto = new Car('Honda', 'Accord', 1998);\n");
    console.log("  console.log(auto instanceof Car);");
    console.log("  // expected output: true\n");
    console.log("  console.log(auto instanceof Object);");
    console.log("  // expected output: true\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  object instanceof constructor\n");
    console.log("object:");
    console.log("    The object to test.\n");
    console.log("constructor:");
    console.log("    Function to test against\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The instanceof operator tests the presence of constructor.prototype in object's prototype chain.\n");
    console.log("  // defining constructors");
    console.log("  function C() { }");
    console.log("  function D() { }\n");
    console.log("  let o = new C()\n");
    console.log("  // true, because: Object.getPrototypeOf(o) === C.prototype");
    console.log("  o instanceof C\n");
    console.log("  // false, because D.prototype is nowhere in o's prototype chain");
    console.log("  o instanceof D\n");
    console.log("  o instanceof Object           // true, because:");
    console.log("  C.prototype instanceof Object // true\n");
    console.log("  C.prototype = {}");
    console.log("  let o2 = new C()\n");
    console.log("  o2 instanceof C  // true\n");
    console.log("  // false, because C.prototype is nowhere in");
    console.log("  // o's prototype chain anymore");
    console.log("  o instanceof C\n");
    console.log("  D.prototype = new C()  // add C to [[Prototype]] linkage of D");
    console.log("  let o3 = new D()");
    console.log("  o3 instanceof D        // true");
    console.log("  o3 instanceof C        // true since C.prototype is now in o3's prototype chain\n");
    console.log("Note that the value of an instanceof test can change based on changes to the prototype property of constructors. It can also be changed by changing an object's prototype");
    console.log("using Object.setPrototypeOf. It is also possible using the non-standard __proto__ property.\n");

    console.log("- instanceof and multiple context (e.g. frames or windows) -\n");
    
    console.log("Different scopes have different execution environments. This means that they have different built-ins (different global object, different constructors, etc.). This may");
    console.log("result in unexpected results. For instance, [] instanceof window.frames[0].Array will return false, because Array.prototype !== window.frames[0].Array.prototype and arrays");
    console.log("inherit from the former.\n");
    console.log("This may not make sense at first, but for scripts dealing with multiple frames or windows, and passing objects from one context to another via functions, this will be a");
    console.log("valid and strong issue. For instance, you can securely check if a given object is, in fact, an Array using Array.isArray(myObj)\n");
    console.log("For example, checking if a Node is a SVGElement in a different context, you can use myNode instanceof myNode.ownerDocument.defaultView.SVGElement.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Use instanceof with String -\n");

    console.log("The following example shows the behavior of instanceof with String objects.\n");
    console.log("  let literalString = 'This is a literal string';");
    console.log("  let stringObject = new String('String created with constructor');\n");
    console.log("  literalString instanceof String;  // false, string literal is not a String");
    console.log("  stringObject instanceof String;  // true\n");
    console.log("  literalString instanceof Object;  // false, string literal is not an Object");
    console.log("  stringObject instanceof Object;  // true\n");
    console.log("  stringObject instanceof Date;    // false\n");

    console.log("-Using instanceof with Date -\n");
    
    console.log("The following example shows the behavior of instanceof with Date objects.\n");
    console.log("  let myDate = new Date();\n");
    console.log("  myDate instanceof Date;      // true");
    console.log("  myDate instanceof Object;    // true");
    console.log("  myDate instanceof String;    // false\n");

    console.log("- Objects created using Object.create() -\n");
    
    console.log("The following example shows the behavior of instanceof with objects created using Object.create()\n");
    console.log("  function Shape() {");
    console.log("  }");
    console.log("  function Rectangle() {");
    console.log("    Shape.call(this); // call super constructor.");
    console.log("  }\n");
    console.log("  Rectangle.prototype = Object.create(Shape.prototype);\n");
    console.log("  Rectangle.prototype.constructor = Rectangle;\n");
    console.log("  let rect = new Rectangle();\n");
    console.log("  rect instanceof Object;    // true");
    console.log("  rect instanceof Shape;     // true");
    console.log("  rect instanceof Rectangle; // true");
    console.log("  rect instanceof String;    // false\n");
    console.log("  let literalObject = {};");
    console.log("  let nullObject = Object.create(null);");
    console.log("  nullObject.name = 'My object';\n");
    console.log("  literalObject instanceof Object;   // true, every object literal has Object.prototype as prototype");
    console.log("  ({}) instanceof Object;   // true, same case as above");
    console.log("  nullObject instanceof Object;   // false, prototype is end of prototype chain (null)\n");

    console.log("- Demonstrating that mycar is of type Car and type Object -\n");

    console.log("The following code creates an object type Car and an instance of that object type, mycar. The instanceof operator demonstrates that the mycar object is of type Car");
    console.log("and of type Object.\n");
    console.log("  function Car(make, model, year) {");
    console.log("    this.make = make;");
    console.log("    this.model = model;");
    console.log("    this.year = year;");
    console.log("  }");
    console.log("  let mycar = new Car('Honda', 'Accord', 1998)");
    console.log("  let a = mycar instanceof Car     // returns true");
    console.log("  let b = mycar instanceof Object  // returns true\n");

    console.log("- Not an instanceof -\n");
    
    console.log("To test if an object is not an instanceof a specific constructor, you can do\n");
    console.log("  if (!(mycar instanceof Car)) {");
    console.log("    // Do something, like:");
    console.log("    // mycar = new Car(mycar)");
    console.log("  }\n");
    console.log("This is really different from:\n");
    console.log("  if (!mycar instanceof Car)\n");
    console.log("This will always be false. (!mycar will be evaluated before instanceof, so you always try to know if a boolean is an instance of Car).\n");
}