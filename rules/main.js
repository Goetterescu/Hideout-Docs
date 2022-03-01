let work;       // Useless

function check_workers() {
    // See if Web Workers is working
    if (typeof(Worker) !== "undefined") {
        work = true;
    } else {
        alert("Web Workers not working! This page might not perform as expected.");
        work = false;
    }
}


function run(com) {
    // We are using this great function here for something really cool
    if (com == "VCG" || com == "economy" || com == "BTL") { // Add rules with information here
        window.open(com + '.html', 'rule_display');
        window.open('info/' + com + '.html', 'info_box'); // Show additional info
    } else if (com == "general_rp" || com == "CHR" || com == "discord" || com == "game" || com == "tos") { // Add rules which have no info
        window.open(com + '.html', 'rule_display');
        window.open('info/clear.html', 'info_box'); // Clear the info box
    } else {
        // Output error message when there is no match (info type). This can happend when I'm lazy
        console.error("Switch failed. Info-type: " + com + ". This is no Issue!");
    } // Tada!!! This way we can easily add new rules and display them, with info and without!

    console.log("Info-type: " + com); // Log the info type
}
