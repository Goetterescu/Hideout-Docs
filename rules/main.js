let work;       // This boolean allows info about rules to be displayed as HTML content

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
    showi("clear"); // Clear the info box 

    // We are using this great function here for something really cool
    if (com == "VCG" || com == "economy") { // Add rules with information here
        window.open(com + '.html', 'rule_display');
        showi(com); // This way we can say that we want to show additional info

    } else if (com == "general_rp" || com == "BTL" || com == "CHR" || com == "discord" || com == "game") { // Add rules which have no info
        window.open(com + '.html', 'rule_display');
    } else {
        // Output error message when there is no match (info type). This can happend when I'm lazy
        console.error("Switch failed. Info-type: " + com + ". This is no Issue!");
    } // Tada!!! This way we can easily add new rules and display them, with info and without!
    console.log("Info-type: " + com); // Log the info type
}

function showi(x) { // Show information
    if (x == "clear") {
        window.open('info/clear.html', 'info_box');
    } else if (x == "VCG" || x == "economy") { // Just continue on this with an or (||) if you want to add more information for more rules. Yes, I am clever and my coding is flexible
        window.open('info/' + x + '.html', 'info_box');
    } else {
        console.error("Error in if-statement of function 'showi'. It seems like there was no match for information...");
    }
} 