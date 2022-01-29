

function show(a) {
    console.log(a);
    document.getElementById("menu2").innerHTML = "<iframe src='" + a + "/index.html' style='border:none'></iframe>";
    return false;
}