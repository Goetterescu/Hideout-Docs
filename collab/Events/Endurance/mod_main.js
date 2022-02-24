


function display_drivers() {

    let amount = document.forms["cp"]["amount"].value;

    for (let index = 1; index <= amount; index++) {
        let content_1 = "Driver " + index + ":<br><input name='driver_" + index + "_name' type='text'><input name='driver_" + index + "_color' type='color'><br>";

        if (index == 1) {
            document.getElementById("i1").innerHTML = content_1;
        } else {
            document.getElementById("i1").innerHTML += content_1;
        }
    }
    document.getElementById("i1").innerHTML += "<br><input type='submit'>";
    return false;
}



function render_drivers(var1) {
    let driver_name = [];
    let driver_color = [];
    for (let index = 1; index <=var1; index++) {
        driver_name.push(document.forms["second_cp"]["driver_" + index + "_name"].value);
        driver_color.push(document.forms["second_cp"]["driver_" + index + "_color"].value);
    }
    //alert(driver_name);
    //alert(driver_color);


    
    for (index = 0; index < driver_name.length; index++) {
        
        let content_11 = "<div onclick='return calc(" + index + ")' style='display:block;width:10%;height:10%;background-color:" + driver_color[index] + "'>" + driver_name[index];
        let content_12 = ">>>Score: <i id='score_" + index + "'>XX</i></div><br><br>";
        
        if (index == 0) {
            document.getElementById("i2").innerHTML = content_11;
            document.getElementById("i2").innerHTML += content_12;
        } else {
            document.getElementById("i2").innerHTML += content_11;
            document.getElementById("i2").innerHTML += content_12;
        }
        
    }
    
    return false;
}


let score = [];
for (let i = 0; i <= 10; i++) {
    score[i] = 0;
}
function calc(varx1) {
    score[varx1] += 1;
    document.getElementById("score_" + varx1).innerHTML = score[varx1];
    return false;
}