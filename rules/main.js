let work;       // This boolean allows info about rules to be displayed as HTML content
let clear_it;   // This boolean determines if it's needed to clear the info display
let empty_msg = "There is no information for this article"; // Message for empty info display

function check_workers() {
    // See if Web Workers is working
    if (typeof(Worker) !== "undefined") {
        work = true;
    } else {
        alert("Web Workers not working! This page might not work as expected.");
        work = false;
    }
}



function run(com) {
    clear_it = true; // Let's activate the clearing thingy, because otherwise I have to do it in every case where I don't want to clear the info display
    // Check if Web Workers is working
    if (work = true) {
        switch (com) { // Now just check what info should be displayed and do so
            case "general_rp":
                window.open('general_rp.html', 'rule_display');
            break;
            case "vcg":
                window.open('VCG.html', 'rule_display');
                document.getElementById("more_info").innerHTML = "We will show some example images here soon!";
                clear_it = false; 
            break;
            case "btl":
                window.open('BTL.html', 'rule_display');
            break;
            case "chr":
                window.open('CHR.html', 'rule_display');
            break;
            case "discord":
                window.open('discord.html', 'rule_display');
            break;
            case "game":
                window.open('game.html', 'rule_display');
            break;
            default: // Output error message when there is no match (info type). This can happend when I'm lazy
                console.error("Switch failed. Info-type: " + com + ". This is no Issue!");
                clear_it = false;
            break;
        }
        console.log("Info-type: " + com); // Log the info type

        if (clear_it == true) {
            // Clear info when none present
            document.getElementById("more_info").innerHTML = empty_msg;
        }

    } else {
        document.getElementById("more_info").innerHTML = "Web Workers not working on your browser/device!";
    }
}
