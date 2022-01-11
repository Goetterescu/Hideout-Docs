let Buggy = false;       // Toggle debug messages on and off. This is off by default, use the console if you want to debug

let t = [];             // Array with the checkbox results of the theor. part
let p = [];             // Same for the prac. part

let t_q = 5;            // Amount of checkboxes on the theor. part
let p_q = 9;            // Same for the prac. part
let total = t_q + p_q;  // Amount of total checkboxes

let t_r;                // Amount of fails on the theor. part
let p_r;                // Same for the prac. part

let fails;              // Total fails
let alw_fails = 25;     // Allowed fails in percent
// Calculate the amount of allowed fails
let alw_fails_rel = total / 100 * alw_fails; 

let stat;               // To store a message, depending on if the student did pass or not


function r_out() {
    var i;
    t_r = 0;
    p_r = 0;

    for (i = 1; i <= t_q; i++) {
        t[i] = document.forms["form"]["t" + i].checked;
        if (t[i] == true) {t_r++;}
        // Debug
        if (Buggy == true) {console.log("Logged: " + i + "\n\tas: t_" + t[i]);}
    }

    if (Buggy == true) {console.log("\n \n");}

    for (i = 1; i <= p_q; i++) {
        p[i] = document.forms["form"]["p" + i].checked;
        if (p[i] == true) {p_r++;}
        // Debug
        if (Buggy == true) {console.log("Logged: " + i + "\n\tas: p_" + p[i]);}
    }
    

    fails = t_r + p_r;
    var notes = document.getElementById("note").value; // Get the content of the textarea
    // Generate message to tell them if the student passed or not
    if (fails < alw_fails_rel) {
        stat = "pass the exam.";
    } else {
        stat = "not pass the exam.";
    }
    // Generate the output text. Note the fact that the first command sets a value, while the others add more to it :D
    document.getElementById("result").innerHTML = "The student did " + stat;
    document.getElementById("result").innerHTML += "<br>It was possible to score " + total + " points.";
    document.getElementById("result").innerHTML += "<br>The maximal amount of allowed fails was: " + alw_fails_rel.toFixed(2) + " (" + alw_fails + "%)";  
    document.getElementById("result").innerHTML += "<br><br>Theoretical part fails: " + t_r;
    document.getElementById("result").innerHTML += "<br>Practical part fails: " + p_r;
    document.getElementById("result").innerHTML += "<br>Total fails: " + fails;
    document.getElementById("result").innerHTML += "<br><br>Notes from the Examinator:<br><i>" + notes + "</i>";


    // Debug
    if (Buggy == true) {
        console.log("\n \nResults of theo: \t" + t + "\nFails: " + t_r);
        console.log("\n \nResults of prac: \t" + p + "\nFails: " + p_r);
        console.log("\n \nNotes:\n" + notes);
    }
    return false;
}