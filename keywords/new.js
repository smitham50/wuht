module.exports = () => {
    console.log("");
    console.log("----------------");
    console.log("  new operator  ");
    console.log("----------------\n");

    console.log("The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.\n");

    console.log("Demo:\n");

    console.log("  function Car(make, model, year) {");
    console.log("    this.make = make;");
    console.log("    this.model = model;");
    console.log("    this.year = year;");
    console.log("  }\n");
    console.log("  const car1 = new Car('Eagle', 'Talon TSi', 1993);\n");
    console.log("  console.log(car1.make);");
    console.log("  // expected output: 'Eagle'\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  new constructor[([arguments])]\n");
    console.log("constructor:");
    console.log("    A class or function that specifies the type of the object instance.\n");
    console.log("arguments:");
    console.log("    A list of values that the constructor will be called with.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The new keyword does the following things:\n");
    console.log("    1. Creates a blank, plain JavaScript object.\n");
    console.log("    2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object\n");
    console.log("       Properties/objects added to the construction function prototype are therefore accessible to all instances created from the constructor function (using new).\n");
    console.log("    3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).\n");
    console.log("    4. Returns this if the function doesn't return an object.\n");
    console.log("Creating a user-defined object requires two steps:\n");
    console.log("    1. Define the object type by writing a function that specifies its name and properties. For example, a constructor function to create an object Foo might look like this:\n");
    console.log("         function Foo(bar1, bar2) {");
    console.log("           this.bar1 = bar1;");
    console.log("           this.bar2 = bar2;");
    console.log("         }\n");
    console.log("    2. Create an instance of the object with new.\n");
    console.log("         var myFoo = new Foo('Bar 1', 2021);\n");
    console.log("An object can have a property that is itself another object. See the examples below.\n");
    console.log("When the code new Foo(...) is executed, the following things happen:\n");
    console.log("    1. A new object is created, inheriting from Foo.prototype.\n");
    console.log("    2. The constructor function Foo is called with the specified arguments, and with this bound to the newly created object. new Foo is equivalent to new Foo(), i.e. if");
    console.log("       no argument list is specified, Foo is called without arguments.\n");
    console.log("    3. The object (not null, false, 3.1415 or other primitive types) returned by the constructor function becomes the result of the whole new expression. If the constructor");
    console.log("       function doesn't explicitly return an object, the object created in step 1 is used instead (normally constructors don't return a value, but they can choose to do so if");
    console.log("       they want to override the normal object creation process).\n");
    console.log("You can always add a property to a previously defined object instance. For example, the statement car1.color = 'black' adds a property color to car1, and assigns it a value");
    console.log("of 'black'.\n");
    console.log("However, this does not affect any other objects. To add the new property to all objects of the same type, you must add the property to the definition of the Car object type.\n");
    console.log("You can add a shared property to a previously defined object type by using the Function.prototype property. This defines a property that is shared by all objects created");
    console.log("with that function, rather than by just one instance of the object type. The following code adds a color property with value 'original color' to all objects of type Car, and");
    console.log("then overwrites that value with the string 'black' only in the instance object car1. For more information, see prototype.\n");
    console.log("  function Car() { }");
    console.log("  car1 = new Car();");
    console.log("  car2 = new Car();\n");
    console.log("  console.log(car1.color);    // undefined\n");
    console.log("  Car.prototype.color = 'original color';");
    console.log("  console.log(car1.color);    // 'original color'\n");
    console.log("  car1.color = 'black';");
    console.log("  console.log(car1.color);    // 'black'\n");
    console.log("  console.log(Object.getPrototypeOf(car1).color); // 'original color'");
    console.log("  console.log(Object.getPrototypeOf(car2).color); // 'original color'");
    console.log("  console.log(car1.color);   // 'black'");
    console.log("  console.log(car2.color);   // 'original color'\n  ");
    console.log("While the constructor function can be invoked like any regular function (i.e. without the new operator), in this case a new Object is not created and the value of this");
    console.log("is also different.\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Object type and object instance -\n");

    console.log("Suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to have properties for make, model, and year. To do");
    console.log("this, you would write the following function:\n");
    console.log("  function Car(make, model, year) {");
    console.log("    this.make = make;");
    console.log("    this.model = model;");
    console.log("    this.year = year;");
    console.log("  }\n");
    console.log("Now you can create an object called myCar as follows:\n");
    console.log("  var myCar = new Car('Eagle', 'Talon TSi', 1993);\n");
    console.log("This statement creates myCar and assigns it the specified values for its properties. Then the value of myCar.make is the string 'Eagle', myCar.year is the integer 1993,");
    console.log("and so on.\n");
    console.log("You can create any number of car objects by calls to new. For example:\n");
    console.log("  var kensCar = new Car('Nissan', '300ZX', 1992);\n");

    console.log("- Object property that is itself another object -\n");
    
    console.log("Suppose you define an object called Person as follows:\n");
    console.log("  function Person(name, age, sex) {");
    console.log("    this.name = name;");
    console.log("    this.age = age;");
    console.log("    this.sex = sex;");
    console.log("  }\n");
    console.log("And then instantiate two new Person objects as follows:\n");
    console.log("  var rand = new Person('Rand McNally', 33, 'M');");
    console.log("  var ken = new Person('Ken Jones', 39, 'M');\n");
    console.log("Then you can rewrite the definition of Car to include an owner property that takes a Person object, as follows:\n");
    console.log("  function Car(make, model, year, owner) {");
    console.log("    this.make = make;");
    console.log("    this.model = model;");
    console.log("    this.year = year;");
    console.log("    this.owner = owner;");
    console.log("  }\n");
    console.log("To instantiate the new objects, you then use the following:\n");
    console.log("  var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);");
    console.log("  var car2 = new Car('Nissan', '300ZX', 1992, ken);\n");
    console.log("Instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects rand and ken as the parameters for the owners.");
    console.log("To find out the name of the owner of car2, you can access the following property:\n");
    console.log("  car2.owner.name\n");
}