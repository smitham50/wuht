module.exports = () => {
    console.log("");
    console.log("---------------");
    console.log("  import  ");
    console.log("---------------\n");

    console.log("The static import statement is used to import read only live bindings which are exported by another module. Imported modules are in strict mode whether you declare them");
    console.log("as such or not. The import statement cannot be used in embedded scripts unless such script has a type='module'. Bindings imported are called live bindings because they ");
    console.log("are updated by the module that exported the binding.\n");
    console.log("There is also a function-like dynamic import(), which does not require scripts of type='module'.\n");
    console.log("Backward compatibility can be ensured using attribute nomodule on the <script> tag.\n");

    console.log("---------------");
    console.log("  Syntax  ");
    console.log("---------------\n");

    console.log("  import defaultExport from 'module-name';");
    console.log("  import * as name from 'module-name';");
    console.log("  import { export1 } from 'module-name';");
    console.log("  import { export1 as alias1 } from 'module-name';");
    console.log("  import { export1, export2 } from 'module-name';");
    console.log("  import { foo, bar } from 'module-name/path/to/specific/un-exported/file';");
    console.log("  import { export1, export2 as alias2, [...] } from 'module-name';");
    console.log("  import defaultExport, { export1 [, [...]] } from 'module-name';");
    console.log("  import defaultExport, * as name from 'module-name';");
    console.log("  import 'module-name';");
    console.log("  var promise = import('module-name');\n");
    console.log("defaultExport:");
    console.log("    Name that will refer to the default export from the module.\n");
    console.log("module-name:");
    console.log("    The module to import from. This is often a relative or absolute path name to the .js file containing the module. Certain bundlers may permit or require the use of");
    console.log("    the extension; check your environment. Only single quoted and double quoted Strings are allowed.\n");
    console.log("name:");
    console.log("    Name of the module object that will be used as a kind of namespace when referring to the imports.\n");
    console.log("exportN");
    console.log("    Name of the exports to be imported.\n");
    console.log("aliasN:");
    console.log("    Names that will refer to the named imports.\n");

    console.log("---------------");
    console.log("  Description  ");
    console.log("---------------\n");

    console.log("The name parameter is the name of the 'module object' which will be used as a kind of namespace to refer to the exports. The export parameters specify individual named");
    console.log("exports, while the import * as name syntax imports all of them. Below are examples to clarify the syntax.\n");
    
    console.log("- Import an entire module's contents -\n");
    
    console.log("This inserts myModule into the current scope, containing all the exports from the module in the file located in /modules/my-module.js.\n");
    console.log("  import * as myModule from '/modules/my-module.js';\n");
    console.log("Here, accessing the exports means using the module name ('myModule' in this case) as a namespace. For example, if the module imported above includes an export");
    console.log("doAllTheAmazingThings(), you would call it like this:\n");
    console.log("  myModule.doAllTheAmazingThings();\n");
    
    console.log("- Import a single export from a module -\n");
    
    console.log("Given an object or value named myExport which has been exported from the module my-module either implicitly (because the entire module is exported, for example using");
    console.log("export * from 'another.js') or explicitly (using the export statement), this inserts myExport into the current scope.\n");
    console.log("  import {myExport} from '/modules/my-module.js';\n");
    
    console.log("- Import multiple exports from a module -\n");
    
    console.log("This inserts both foo and bar into the current scope.\n");
    console.log("  import {foo, bar} from '/modules/my-module.js';\n");

    console.log("- Import an export with a more convenient alias -\n");
    
    console.log("You can rename an export when importing it. For example, this inserts shortName into the current scope.\n");
    console.log("  import {reallyReallyLongModuleExportName as shortName} from '/modules/my-module.js';\n");

    console.log("- Rename multiple exports during import -\n");
    
    console.log("Import multiple exports from a module with convenient aliases.\n");
    console.log("  import {");
    console.log("    reallyReallyLongModuleExportName as shortName,");
    console.log("    anotherLongModuleName as short");
    console.log("  } from '/modules/my-module.js';\n");

    console.log("- Import a module for its side effects only -\n");
    
    console.log("Import an entire module for side effects only, without importing anything. This runs the module's global code, but doesn't actually import any values.\n");
    console.log("  import '/modules/my-module.js';\n");
    console.log("This works with dynamic imports as well:\n");
    console.log("  (async () => {");
    console.log("    if (somethingIsTrue) {");
    console.log("      // import module for side effects");
    console.log("      await import('/modules/my-module.js');");
    console.log("    }");
    console.log("  })();\n");
    console.log("If your project uses packages that export ESM, you can also import them for side effects only. This will run the code in the package entry point file (and any files");
    console.log("it imports) only.\n");

    console.log("- Importing defaults -\n");
    
    console.log("It is possible to have a default export (whether it is an object, a function, a class, etc.). The import statement may then be used to import such defaults.\n");
    console.log("The simplest version directly imports the default:\n");
    console.log("  import myDefault from '/modules/my-module.js';\n");
    console.log("It is also possible to use the default syntax with the ones seen above (namespace imports or named imports). In such cases, the default import will have to be declared");
    console.log("first. For instance:\n");
    console.log("  import myDefault, * as myModule from '/modules/my-module.js';");
    console.log("  // myModule used as a namespace\n");
    console.log("or\n");
    console.log("  import myDefault, { foo, bar } from '/modules/my-module.js';");
    console.log("  // specific, named imports\n");
    console.log("When importing a default export with dynamic imports, it works a bit differently. You need to destructure and rename the 'default' key from the returned object.\n");
    console.log("  (async () => {");
    console.log("    if (somethingIsTrue) {");
    console.log("      const { default: myDefault, foo, bar } = await import('/modules/my-module.js');");
    console.log("    }");
    console.log("  })();\n");

    console.log("- Dynamic imports -\n");
    
    console.log("The standard import syntax is static and will always result in all code in the imported module being evaluated at load time. In situations where you wish to load a");
    console.log("module conditionally or on demand, you can use a dynamic import instead. The following are some reasons why you might need to use dynamic import:\n");
    console.log("    - When importing statically significantly slows the loading of your code and there is a low likelihood that you will need the code you are importing, or you will");
    console.log("      not need it until a later time.");
    console.log("    - When importing statically significantly increases your program's memory usage and there is a low likelihood that you will need the code you are importing.");
    console.log("    - When the module you are importing does not exist at load time");
    console.log("    - When the import specifier string needs to be constructed dynamically. (Static import only supports static specifiers.)");
    console.log("    - When the module being imported has side effects, and you do not want those side effects unless some condition is true. (It is recommended not to have any side");
    console.log("      effects in a module, but you sometimes cannot control this in your module dependencies.)\n")
    console.log("Use dynamic import only when necessary. The static form is preferable for loading initial dependencies, and can benefit more readily from static analysis tools and");
    console.log("tree shaking.\n");
    console.log("To dynamically import a module, the import keyword may be called as a function. When used this way, it returns a promise.\n");
    console.log("  import('/modules/my-module.js')");
    console.log("    .then((module) => {");
    console.log("      // Do something with the module.");
    console.log("    });\n");
    console.log("This form also supports the await keyword.\n");
    console.log("  let module = await import('/modules/my-module.js');\n");

    console.log("---------------");
    console.log("  Examples  ");
    console.log("---------------\n");

    console.log("- Standard import -\n");

    console.log("The code below shows how to import from a secondary module to assist in processing an AJAX JSON request.\n");
    console.log("The module: file.js:\n");
    console.log("  function getJSON(url, callback) {");
    console.log("    let xhr = new XMLHttpRequest();");
    console.log("    xhr.onload = function () {");
    console.log("      callback(this.responseText)");
    console.log("    };");
    console.log("    xhr.open('GET', url, true);");
    console.log("    xhr.send();");
    console.log("  }\n");
    console.log("  export function getUsefulContents(url, callback) {");
    console.log("    getJSON(url, data => callback(JSON.parse(data)));");
    console.log("  }\n");
    console.log("The main program: main.js:\n");
    console.log("  import { getUsefulContents } from '/modules/file.js';\n");
    console.log("  getUsefulContents('http://www.example.com',");
    console.log("    data => { doSomethingUseful(data); });\n");

    console.log("- Dynamic import -\n");
    
    console.log("This example shows how to load functionality on to a page based on a user action, in this case a button click, and then call a function within that module. This is not");
    console.log("the only way to implement this functionality. The import() function also supports await.\n");
    console.log("  const main = document.querySelector('main');");
    console.log("  for (const link of document.querySelectorAll('nav > a')) {");
    console.log("    link.addEventListener('click', e => {");
    console.log("      e.preventDefault();\n");
    console.log("    import('/modules/my-module.js')");
    console.log("      .then(module => {");
    console.log("        module.loadPageInto(main);");
    console.log("      })");
    console.log("      .catch(err => {");
    console.log("        main.textContent = err.message;");
    console.log("      });");
    console.log("    });");
    console.log("  }\n");
}