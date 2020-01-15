// stuff happens to determine thrill seeking is our objective
// ..... input data here from web form
let thrill = "Moutain Biking";

// ask user question: Do you want to understand your thrill seeking?
let understanding = false;

if (understanding) {
    // if YES
    // Dig into reasons
    console.log("Digging into reasons why...");
} else {
    // if NO
    // ask user: Do you feel responsible today?
    // .... Input data from webform
    let feelingResponsible = false;
    if (feelingResponsible){// if YES
    // ask user: Is homework done and chores complete?
    console.log("Checking my homework and chores are compete...")
} else {
    // if NO
    console.log("Mountain biking for decompression purposes...")
}
}
// EXPLANATION
/* Why does the output end up being Mountain Biking for decompression purposes?
the user didn't want to understand their thrill seeking therefore the 'else' expression
on line 12 applies. This is where the nested if statement starts. The if statement on line 17
asks if the user feels responsible which they do not per the feelingResponsible
expression equating to false. The else expression on line 20 then executes the console.log method
which says 'Mountain Biking for decompression purposes' which the expression 'thrill' was
assigned to The if expression feelingRepsonsible is nested within if expression of Understanding*/
