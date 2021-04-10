module.exports = () => {
    console.log("");
    console.log("- case (see switch) -\n");

    console.log("The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.\n");

    console.log("Demo:\n");
    console.log("const expr = 'Papayas';");
    console.log("switch (expr) {");
    console.log("  case 'Oranges':");
    console.log("    console.log('Oranges are $0.59 a pound.');");
    console.log("    break;");
    console.log("  case 'Mangoes':");
    console.log("  case 'Papayas':");
    console.log("    console.log('Mangoes and papayas are $2.79 a pound.');");
    console.log("    // expected output: 'Mangoes and papayas are $2.79 a pound.'");
    console.log("    break;");
    console.log("  default:");
    console.log("    console.log(`Sorry, we are out of ${expr}.`);");
    console.log("}\n");
}
