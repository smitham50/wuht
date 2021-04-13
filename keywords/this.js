module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  this  ");
    console.log("---------------\n");

    console.log("A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.\n");
    console.log("In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each");
    console.log("time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which");
    console.log("don't provide their own this binding (it retains the this value of the enclosing lexical context).\n");
    
    console.log("Demo:\n");

    console.log("  const test = {");
    console.log("    prop: 42,");
    console.log("    func: function () {");
    console.log("      return this.prop;");
    console.log("    },");
    console.log("  };\n");
    console.log("  console.log(test.func());");
    console.log("  // expected output: 42\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  this;\n");

    console.log("- Value -\n");

    console.log("A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.\n");
    
    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");
    
    console.log("- Global context -\n");

    console.log("In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.\n");
    console.log("  // In web browsers, the window object is also the global object:");
    console.log("  console.log(this === window); // true\n");
    console.log("  a = 37;");
    console.log("  console.log(window.a); // 37\n");
    console.log("  this.b = 'MDN';");
    console.log("  console.log(window.b)  // 'MDN'");
    console.log("  console.log(b)         // 'MDN'\n");
    console.log("Note: You can always easily get the global object using the global globalThis property, regardless of the current context in which your code is running.\n");
    
    console.log("- Function context -\n");
    
    console.log("Inside a function, the value of this depends on how the function is called.\n");
    console.log("Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.\n");
    console.log("  function f1() {");
    console.log("    return this;");
    console.log("  }\n");
    console.log("  // In a browser:");
    console.log("  f1() === window; // true\n");
    console.log("  // In Node:");
    console.log("  f1() === globalThis; // true\n");
    console.log("In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:\n");
    console.log("  function f2() {");
    console.log("    'use strict'; // see strict mode");
    console.log("    return this;");
    console.log("  }\n");
    console.log("  f2() === undefined; // true\n");
    console.log("In the second example, this should be undefined, because f2 was called directly and not as a method or property of an object (e.g. window.f2()). This feature wasn't\n");
    console.log("implemented in some browsers when they first started to support strict mode. As a result, they incorrectly returned the window object.");
    console.log("To set the value of this to a particular value when calling a function, use call(), or apply() as in the examples below.\n");
    
    console.log("- Class context -\n");
    
    console.log("The behavior of this in classes and functions is similar, since classes are functions under the hood. But there are some differences and caveats.\n");
    console.log("Within a class constructor, this is a regular object. All non-static methods within the class are added to the prototype of this:\n");
    console.log("  class Example {");
    console.log("    constructor() {");
    console.log("      const proto = Object.getPrototypeOf(this);");
    console.log("      console.log(Object.getOwnPropertyNames(proto));");
    console.log("    }");
    console.log("    first() { }");
    console.log("    second() { }");
    console.log("    static third() { }");
    console.log("  }\n");
    console.log("  new Example(); // ['constructor', 'first', 'second']\n");
    console.log("Note: Static methods are not properties of this. They are properties of the class itself.\n");
    
    console.log("- Derived classes -\n");
    
    console.log("Unlike base class constructors, derived constructors have no initial this binding. Calling  super() creates a this binding within the constructor and essentially has");
    console.log("the effect of evaluating the following line of code, where Base is the inherited class:\n");
    console.log("  this = new Base();\n");
    console.log("Warning: Referring to this before calling super() will throw an error.\n");
    console.log("Derived classes must not return before calling super(), unless they return an Object or have no constructor at all.\n");
    console.log("  class Base { }");
    console.log("  class Good extends Base { }");
    console.log("  class AlsoGood extends Base {");
    console.log("    constructor() {");
    console.log("      return { a: 5 };");
    console.log("    }");
    console.log("  }\n");
    console.log("  class Bad extends Base {");
    console.log("    constructor() { }");
    console.log("  }\n");
    console.log("  new Good();");
    console.log("  new AlsoGood();");
    console.log("  new Bad(); // ReferenceError\n");
    
    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- this in function contexts -\n");

    console.log("  // An object can be passed as the first argument to call or apply and this will be bound to it.");
    console.log("  var obj = { a: 'Custom' };\n");
    console.log("  // We declare a variable and the variable is assigned to the global window as its property.");
    console.log("  var a = 'Global';\n");
    console.log("  function whatsThis() {");
    console.log("    return this.a;  // The value of this is dependent on how the function is called");
    console.log("  }\n");
    console.log("  whatsThis();          // 'Global' as this in the function isn't set, so it defaults to the global/window object");
    console.log("  whatsThis.call(obj);  // 'Custom' as this in the function is set to obj");
    console.log("  whatsThis.apply(obj); // 'Custom' as this in the function is set to obj\n");
    
    console.log("- this and object conversion -\n");
    
    console.log("  function add(c, d) {");
    console.log("    return this.a + this.b + c + d;");
    console.log("  }\n");
    console.log("  var o = { a: 1, b: 3 };\n");
    console.log("  // The first parameter is the object to use as");
    console.log("  // 'this', subsequent parameters are passed as");
    console.log("  // arguments in the function call");
    console.log("  add.call(o, 5, 7); // 16\n");
    console.log("  // The first parameter is the object to use as");
    console.log("  // 'this', the second is an array whose");
    console.log("  // members are used as the arguments in the function call");
    console.log("  add.apply(o, [10, 20]); // 34\n");
    console.log("Note that in non–strict mode, with call and apply, if the value passed as this is not an object, an attempt will be made to convert it to an object. Values null and");
    console.log("undefined become the global object. Primitives like 7 or 'foo' will be converted to an Object using the related constructor, so the primitive number 7 is converted to");
    console.log("an object as if by new Number(7) and the string 'foo' to an object as if by new String('foo'), e.g.\n");
    console.log("  function bar() {");
    console.log("    console.log(Object.prototype.toString.call(this));");
    console.log("  }\n");
    console.log("  bar.call(7);     // [object Number]");
    console.log("  bar.call('foo'); // [object String]");
    console.log("  bar.call(undefined); // [object global]\n");

    console.log("- The bind method -\n");

    console.log("ECMAScript 5 introduced Function.prototype.bind(). Calling f.bind(someObject) creates a new function with the same body and scope as f, but where this occurs in the");
    console.log("original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used.\n");
    console.log("  function f() {");
    console.log("    return this.a;");
    console.log("  }\n");
    console.log("  var g = f.bind({ a: 'azerty' });");
    console.log("  console.log(g()); // azerty\n");
    console.log("  var h = g.bind({ a: 'yoo' }); // bind only works once!");
    console.log("  console.log(h()); // azerty\n");
    console.log("  var o = { a: 37, f: f, g: g, h: h };");
    console.log("  console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty\n");

    console.log("- Arrow functions -\n");
    
    console.log("In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:\n");
    console.log("  var globalObject = this;");
    console.log("  var foo = (() => this);");
    console.log("  console.log(foo() === globalObject); // true\n");
    console.log("Note: if this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored. You can still prepend arguments to the call, but the first");
    console.log("argument (thisArg) should be set to null.\n");
    console.log("  // Call as a method of an object");
    console.log("  var obj = { func: foo };");
    console.log("  console.log(obj.func() === globalObject); // true\n");
    console.log("  // Attempt to set this using call");
    console.log("  console.log(foo.call(obj) === globalObject); // true\n");
    console.log("  // Attempt to set this using bind");
    console.log("  foo = foo.bind(obj);");
    console.log("  console.log(foo() === globalObject); // true\n");
    console.log("No matter what, foo's this is set to what it was when it was created (in the example above, the global object). The same applies to arrow functions created inside other");
    console.log("functions: their this remains that of the enclosing lexical context.\n");
    console.log("  // Create obj with a method bar that returns a function that");
    console.log("  // returns its this. The returned function is created as");
    console.log("  // an arrow function, so its this is permanently bound to the");
    console.log("  // this of its enclosing function. The value of bar can be set");
    console.log("  // in the call, which in turn sets the value of the");
    console.log("  // returned function.");
    console.log("  var obj = {");
    console.log("    bar: function () {");
    console.log("      var x = (() => this);");
    console.log("      return x;");
    console.log("    }");
    console.log("  };\n");
    console.log("  // Call bar as a method of obj, setting its this to obj");
    console.log("  // Assign a reference to the returned function to fn");
    console.log("  var fn = obj.bar();\n");
    console.log("  // Call fn without setting this, would normally default");
    console.log("  // to the global object or undefined in strict mode");
    console.log("  console.log(fn() === obj); // true\n");
    console.log("  // But caution if you reference the method of obj without calling it");
    console.log("  var fn2 = obj.bar;");
    console.log("  // Calling the arrow function's this from inside the bar method()");
    console.log("  // will now return window, because it follows the this from fn2.");
    console.log("  console.log(fn2()() == window); // true\n");
    console.log("In the above, the function (call it anonymous function A) assigned to obj.bar returns another function (call it anonymous function B) that is created as an arrow");
    console.log("function. As a result, function B's this is permanently set to the this of obj.bar (function A) when called. When the returned function (function B) is called, its");
    console.log("this will always be what it was set to initially. In the above code example, function B's this is set to function A's this which is obj, so it remains set to obj even");
    console.log("when called in a manner that would normally set its this to undefined or the global object (or any other method as in the previous example in the global execution context).\n");
    
    console.log("- As an object method -\n");
    
    console.log("When a function is called as a method of an object, its this is set to the object the method is called on.\n");
    console.log("In the following example, when o.f() is invoked, inside the function this is bound to the o object.\n");
    console.log("  var o = {");
    console.log("    prop: 37,");
    console.log("    f: function () {");
    console.log("      return this.prop;");
    console.log("    }");
    console.log("  };\n");
    console.log("  console.log(o.f()); // 37\n");
    console.log("Note that this behavior is not at all affected by how or where the function was defined. In the previous example, we defined the function inline as the f member during");
    console.log("the definition of o. However, we could have just as easily defined the function first and later attached it to o.f. Doing so results in the same behavior:\n");
    console.log("  var o = { prop: 37 };\n");
    console.log("  function independent() {");
    console.log("    return this.prop;");
    console.log("  }\n");
    console.log("  o.f = independent;\n");
    console.log("  console.log(o.f()); // 37\n");
    console.log("This demonstrates that it matters only that the function was invoked from the f member of o.\n");
    console.log("Similarly, the this binding is only affected by the most immediate member reference. In the following example, when we invoke the function, we call it as a method g of");
    console.log("the object o.b. This time during execution, this inside the function will refer to o.b. The fact that the object is itself a member of o has no consequence; the most");
    console.log("immediate reference is all that matters.\n");
    console.log("  o.b = { g: independent, prop: 42 };");
    console.log("  console.log(o.b.g()); // 42\n");

    console.log("- this on the object's prototype chain -\n");
    
    console.log("The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, this refers to the object the");
    console.log("method was called on, as if the method were on the object.\n");
    console.log("  var o = { f: function () { return this.a + this.b; } };");
    console.log("  var p = Object.create(o);");
    console.log("  p.a = 1;");
    console.log("  p.b = 4;\n");
    console.log("  console.log(p.f()); // 5\n");
    console.log("In this example, the object assigned to the variable p doesn't have its own f property, it inherits it from its prototype. But it doesn't matter that the lookup for f");
    console.log("eventually finds a member with that name on o; the lookup began as a reference to p.f, so this inside the function takes the value of the object referred to as p. That");
    console.log("is, since f is called as a method of p, its this refers to p. This is an interesting feature of JavaScript's prototype inheritance.\n");
    
    console.log("- this with a getter or setter -\n");
    
    console.log("Again, the same notion holds true when a function is invoked from a getter or a setter. A function used as getter or setter has its this bound to the object from which");
    console.log("the property is being set or gotten.\n");
    console.log("  function sum() {");
    console.log("    return this.a + this.b + this.c;");
    console.log("  }\n");
    console.log("  var o = {");
    console.log("    a: 1,");
    console.log("    b: 2,");
    console.log("    c: 3,");
    console.log("    get average() {");
    console.log("      return (this.a + this.b + this.c) / 3;");
    console.log("    }");
    console.log("  };\n");
    console.log("  Object.defineProperty(o, 'sum', {");
    console.log("    get: sum, enumerable: true, configurable: true");
    console.log("  });\n");
    console.log("  console.log(o.average, o.sum); // 2, 6\n");

    console.log("- As a constructor -\n");
    
    console.log("When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed.\n");
    console.log("While the default for a constructor is to return the object referenced by this, it can instead return some other object (if the return value isn't an object, then the");
    console.log("this object is returned).\n");
    console.log("  /*");
    console.log("  * Constructors work like this:");
    console.log("  *");
    console.log("  * function MyConstructor(){");
    console.log("  *   // Actual function body code goes here.");
    console.log("  *   // Create properties on |this| as");
    console.log("  *   // desired by assigning to them.  E.g.,");
    console.log("  *   this.fum = 'nom';");
    console.log("  *   // et cetera...");
    console.log("  *");
    console.log("  *   // If the function has a return statement that");
    console.log("  *   // returns an object, that object will be the");
    console.log("  *   // result of the |new| expression.  Otherwise,");
    console.log("  *   // the result of the expression is the object");
    console.log("  *   // currently bound to |this|");
    console.log("  *   // (i.e., the common case most usually seen).");
    console.log("  * }");
    console.log("  */\n");
    console.log("  function C() {");
    console.log("    this.a = 37;");
    console.log("  }\n");
    console.log("  var o = new C();");
    console.log("  console.log(o.a); // 37\n");
    console.log("  function C2() {");
    console.log("    this.a = 37;");
    console.log("    return { a: 38 };");
    console.log("  }\n");
    console.log("  o = new C2();");
    console.log("  console.log(o.a); // 38\n");
    console.log("In the last example (C2), because an object was returned during construction, the new object that this was bound to gets discarded. (This essentially makes the statement");
    console.log("'this.a = 37;' dead code. It's not exactly dead because it gets executed, but it can be eliminated with no outside effects.)\n");

    console.log("- As a DOM event handler -\n");
    
    console.log("When a function is used as an event handler, its this is set to the element on which the listener is placed (some browsers do not follow this convention for listeners");
    console.log("added dynamically with methods other than addEventListener()).\n");
    console.log("  // When called as a listener, turns the related element blue");
    console.log("  function bluify(e) {");
    console.log("    // Always true");
    console.log("    console.log(this === e.currentTarget);");
    console.log("    // true when currentTarget and target are the same object");
    console.log("    console.log(this === e.target);");
    console.log("    this.style.backgroundColor = '#A5D9F3';");
    console.log("  }\n");
    console.log("  // Get a list of every element in the document");
    console.log("  var elements = document.getElementsByTagName('*');\n");
    console.log("  // Add bluify as a click listener so when the");
    console.log("  // element is clicked on, it turns blue");
    console.log("  for (var i = 0; i < elements.length; i++) {");
    console.log("    elements[i].addEventListener('click', bluify, false);");
    console.log("  }\n");

    console.log("- In an inline event handler -\n");
    
    console.log("When the code is called from an inline on-event handler, its this is set to the DOM element on which the listener is placed:\n");
    console.log("  <button onclick='alert(this.tagName.toLowerCase());'>");
    console.log("    Show this");
    console.log("  </button>\n");
    console.log("The above alert shows button. Note however that only the outer code has its this set this way:\n");
    console.log("  <button onclick='alert((function () { return this; })());'>");
    console.log("    Show inner this");
    console.log("  </button>\n");
    console.log("In this case, the inner function's this isn't set so it returns the global/window object (i.e. the default object in non–strict mode where this isn't set by the call).\n");
    
    console.log("- this in classes -\n");
    
    console.log("Just like with regular functions, the value of this within methods depends on how they are called. Sometimes it is useful to override this behavior so that this within");
    console.log("classes always refers to the class instance. To achieve this, bind the class methods in the constructor:\n");
    console.log("  class Car {");
    console.log("    constructor() {");
    console.log("      // Bind sayBye but not sayHi to show the difference");
    console.log("      this.sayBye = this.sayBye.bind(this);");
    console.log("    }");
    console.log("    sayHi() {");
    console.log("      console.log(`Hello from ${this.name}`);");
    console.log("    }");
    console.log("    sayBye() {");
    console.log("      console.log(`Bye from ${this.name}`);");
    console.log("    }");
    console.log("    get name() {");
    console.log("      return 'Ferrari';");
    console.log("    }");
    console.log("  }\n");
    console.log("  class Bird {");
    console.log("    get name() {");
    console.log("      return 'Tweety';");
    console.log("    }");
    console.log("  }\n");
    console.log("  const car = new Car();\n");
    console.log("  const bird = new Bird();\n");
    console.log("  // The value of 'this' in methods depends on their caller");
    console.log("  car.sayHi(); // Hello from Ferrari");
    console.log("  bird.sayHi = car.sayHi;");
    console.log("  bird.sayHi(); // Hello from Tweety\n");
    console.log("  // For bound methods, 'this' doesn't depend on the caller");
    console.log("  bird.sayBye = car.sayBye;");
    console.log("  bird.sayBye();  // Bye from Ferrari\n");
    console.log("Note: Classes are always strict mode code. Calling methods with an undefined this will throw an error.\n");
}