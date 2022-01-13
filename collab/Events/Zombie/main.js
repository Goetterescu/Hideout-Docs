function attribute_info(x) {
    switch (x) {
        case "hp":
            alert("HP \nThis is your health. You will be dead if it reaches zero, but you can get HP back by using certain items.");
        break;
        case "dex":
            alert("DEX \nYour dexterity tells you how good you are at acrobatic tasks. It also comes in handy during other situations. Your GM will tell you more.");
        break;
        case "str":
            alert("STR \nStrength will come in handy during combat and other situations where you need your muskels.");
        break;
        case "wis":
            alert("WIS \nNerd stuff. Useful when you try to figure out how to open a lock or restart an generator.");
        break;
    }
}