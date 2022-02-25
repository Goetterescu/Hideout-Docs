


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
    document.getElementById("i2").innerHTML = "<h4>Results:</h4>";

    let driver_name = [];
    let driver_color = [];
    for (let index = 1; index <=var1; index++) {
        driver_name.push(document.forms["second_cp"]["driver_" + index + "_name"].value);
        driver_color.push(document.forms["second_cp"]["driver_" + index + "_color"].value);
    }
    //alert(driver_name);
    //alert(driver_color);

//</table><br><br>
    
    for (index = 0; index < driver_name.length; index++) {
        let content_11 = "<div style='background-color:" + driver_color[index] + ";width:10%'>";
        let content_12 = "<b style='margin:auto;display:block;width:fit-content'>" + driver_name[index] + "</b>";
        let content_13 = "<b style='margin:1%' id='score_" + index + "'>DNF</b><br>";
        let content_14 = "<button onclick='return calc(" + index + ", \"normal\")'>Lap</button><br>";
        let content_15 = "<button onclick='return calc(" + index + ", \"crash\")'>Crash</button>";
        let content_16 = "<button onclick='return calc(" + index + ", \"cch\")'>CC Hard</button><br>";
        let content_17 = "<button onclick='return calc(" + index + ", \"ccm\")'>CC Medium</button>";
        let content_18 = "<button onclick='return calc(" + index + ", \"reckless\")'>Reckless</button></div><br><br>";
        let content = content_11 + content_12 + content_13 + content_14 + content_15 + content_16 + content_17 + content_18;
        
        
        document.getElementById("i2").innerHTML += content;
    }
    
    return false;
}


let score = [];
for (let i = 0; i <= 10; i++) {
    score[i] = 0;
}
function calc(varx1, mode) {
    let s_normal = 1;
    let s_c = -2;
    let s_h_cc = -2;
    let s_m_cc = -1;
    let s_r = -1;

    switch (mode) {
        case "normal":
            score[varx1] += s_normal;
            break;
    
        case "crash":
            score[varx1] += s_c;
            break;

        case "cch":
            score[varx1] += s_h_cc;
            break;

        case "ccm":
            score[varx1] += s_m_cc;
            break;

        case "reckless":
            score[varx1] += s_r;
            break;

        default:
            alert("!Error!");
            break;
    }
    
    document.getElementById("score_" + varx1).innerHTML = score[varx1];
    return false;
}