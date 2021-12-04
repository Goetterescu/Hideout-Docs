let work;       // This boolean allows info about rules to be displayed as HTML content
let empty_msg = "There is no information for this article"; // Message for empty info display

function check_workers() {
    // See if Web Workers is working
    if (typeof(Worker) !== "undefined") {
        work = true;
    } else {
        alert("Web Workers not working! This page might not perform as expected.");
        work = false;
    }
}
/*
I know, I know...
We are not using Web Workers here, but maybe some day!
*/


function run(com) {
    // Check if Web Workers is working
    if (work = true) {
        document.getElementById("more_info").innerHTML = empty_msg; // Clear the info box
        switch (com) { // Now just check what info should be displayed and do so
            case "general_rp":
                window.open('general_rp.html', 'rule_display');
            break;
            case "VCG":
                window.open('VCG.html', 'rule_display');
                document.getElementById("more_info").innerHTML = "We will show some example images here soon!";
                clear_it = false; 
            break;
            case "BTL":
                window.open(com + '.html', 'rule_display');
            break;
            case "CHR":
                window.open(com + 'CHR.html', 'rule_display');
            break;
            case "discord":
                window.open(com + '.html', 'rule_display');
            break;
            case "game":
                window.open(com + '.html', 'rule_display');
            break;
            case "economy":
                window.open(com + '.html', 'rule_display');
            break;
            default: // Output error message when there is no match (info type). This can happend when I'm lazy
                console.error("Switch failed. Info-type: " + com + ". This is no Issue!");
                clear_it = false;
            break;
        }
        console.log("Info-type: " + com); // Log the info type

    } else { // If Web Workers are not working (lol) tell the user that his shitbox can't do it
        document.getElementById("more_info").innerHTML = "Web Workers not working on your browser/device!";
    }
}
