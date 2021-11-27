let work; // This boolean allows info about rules to be displayed as HTML content

function check_workers() {
    // See if Web Workers is working
    if (typeof(Worker) !== "undefined") {
        work = true;
    } else {
        alert("Web Workers not working! This page might not work as expected.");
        work = false;
    }
}



function show(com) {
    // Check if Web Workers is working
    if (work = true) {
        switch (com) { // Now just check what info should be displayed and do so
            case "general_rp":
                document.getElementById("more_info").innerHTML = "This content might be interesting for you: <a target='_blank' href='https://forum.rigsofrods.org/resources/small-car-trailer.382/'>Camera Trailer</a>, <a target='_blank' href='https://forum.rigsofrods.org/resources/1999-ford-crown-victoria.147/'>Ford</a>, <a target='_blank' href='https://forum.rigsofrods.org/resources/gavril-omega-det.591/'>Gavril</a>";
            break;
            default: // Clear info when none present
                document.getElementById("more_info").innerHTML = "There is no information for this article";
                console.error("Switch failed in function show. Unknown info-type: " + com + ". This is no Issue!");
            break;
        }
        console.log("Info-type: " + com);
    } else {
        document.getElementById("more_info").innerHTML = "Web Workers not working on your browser/device!";
    }
}
