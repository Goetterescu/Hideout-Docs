function redir(mode) {

    switch (mode) {
        case 'credits':
            alert("Special thanks to Xploder and Pixel for their ideas!");
        break;
        
        case 'tool':
            window.location.assign("mod.html");
        break;

        default:
            unset(mode);
            document.getElementById(mode).style = "display: initial";
        break;
    }
}


function unset(x) {
    const free = ["about","tracks","cars","skins"];

    if (x != free[0]) { document.getElementById(free[0]).style = "display: none"; }
    if (x != free[1]) { document.getElementById(free[1]).style = "display: none"; }
    if (x != free[2]) { document.getElementById(free[2]).style = "display: none"; }
    if (x != free[3]) { document.getElementById(free[3]).style = "display: none"; } 
}