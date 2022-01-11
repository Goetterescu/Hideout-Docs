function copy(how) {
    var copyme = document.getElementById("result");

    switch (how) {
        case "raw":
            navigator.clipboard.writeText(copyme.innerHTML);
            break;
            // We do not actually use this
        case "text":
            navigator.clipboard.writeText(copyme.textContent);
            break;
            //
        default:
            alert("Weird Error! \nCould not copy to clipboard");
            break;
    }
    
    
}