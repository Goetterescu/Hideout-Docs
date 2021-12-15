let score1 = 0;
let score2 = 0;
let max_score = 14; // This is the total amount of checkboxes, please edit this if needed.
let fail_rate = 25; // Allowed fails in %


function r_out() {
    // Theoretical
    let t1 = document.forms["form"]["t_sign"].checked;
    let t2 = document.forms["form"]["t_way"].checked;
    let t3 = document.forms["form"]["t_limit"].checked;
    let t4 = document.forms["form"]["t_weight"].checked;
    let t5 = document.forms["form"]["t_general"].checked;
    
    if (t1 === true) {score1 += 1}
    if (t2 === true) {score1 += 1}
    if (t3 === true) {score1 += 1}
    if (t4 === true) {score1 += 1}
    if (t5 === true) {score1 += 1}


    // Practical
    let p1 = document.forms["form"]["p_comf"].checked;
    let p2 = document.forms["form"]["p_curb"].checked;
    let p3 = document.forms["form"]["p_envi"].checked;
    let p4 = document.forms["form"]["p_speed"].checked;
    let p5 = document.forms["form"]["p_rev"].checked;
    let p6 = document.forms["form"]["p_blinker"].checked;
    let p7 = document.forms["form"]["p_way"].checked;
    let p8 = document.forms["form"]["p_general"].checked;
    let p9 = document.forms["form"]["p_trailer"].checked;

    if (p1 === true) {score2 += 1}
    if (p2 === true) {score2 += 1}
    if (p3 === true) {score2 += 1}
    if (p4 === true) {score2 += 1}
    if (p5 === true) {score2 += 1}
    if (p6 === true) {score2 += 1}
    if (p7 === true) {score2 += 1}
    if (p8 === true) {score2 += 1}
    if (p9 === true) {score2 += 1}


    // Notes
    let note = document.forms["form"]["note"].value;


    // Send to next function and return false after that
    show(score1, score2, note);
    return false;
}


function show(s1, s2, n) {

    // Do a little math (not meth)
    s3 = s1+s2;         // Total failures
    smax = max_score / 100 * fail_rate;

    // See if the student passed
    if (s3 < smax) {
        sta = " pass ";
    } else {
        sta = " not pass ";
    }

    // Check if there is an note
    if (n == "") {n = "<i>No note</i>"};

    // Generate text for output
    let l1 = "The Student did" + sta + "the exam.";
    let l2 = 
    "It was possible to score " + max_score + " points. The maximal amount of allowed fails was: " + smax.toFixed(2) + " (" + fail_rate + "%)";
    let l3 = "Theoretical part fails: " + s1;
    let l4 = "Practical part fails: " + s2 + "<br>" + "Total fails: " + s3;
    // Output
    document.getElementById("result").innerHTML = l1 + "<br>" + l2 + "<br>" + l3 + "<br>" + l4 + "<br><br>Note from the examinator:<br>" + n;

    // Debug
    console.log(s1);
    console.log(s2);
    console.log("\t" + s3);
    console.log(n);
    console.log(smax);
}