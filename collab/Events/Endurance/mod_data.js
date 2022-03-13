const race_settings = {
    sshit: "kek"
};

const race_modifiers = {
    lap: 3,
    crash: -2,
    hard_cc: -2,
    medium_cc: -1,
    reckless: -1,
    display_settings: function(x) {
        replace = document.getElementById(x);
        li_start = "<li>";
        li_end = "</li>";
        // Display the modifiers, so we don't have to change the HTML manually
        replace.innerHTML += li_start + "Lapping: " + this.lap + li_end;
        replace.innerHTML += li_start + "Crashing: " + this.crash + li_end;
        replace.innerHTML += li_start + "Hard Corner Cutting: " + this.hard_cc + li_end;
        replace.innerHTML += li_start + "Medium Corner Cutting: " + this.medium_cc + li_end;
        replace.innerHTML += li_start + "Reckless Driving: " + this.reckless + li_end;
    }
};