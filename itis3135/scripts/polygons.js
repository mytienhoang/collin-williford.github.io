
function onButtonClick() {
    let checker = true;
    while (checker) {
        let userNum = prompt("The Catholic Walrus asks for a number? ");
        let input = Math.abs(Math.round(parseFloat(userNum)));
       if (validateEntry(input) == true) {
            alert("Your shape is " + getShape(input));
            break;
       } else {
            alert("your number doesn't work, enter a number between 1-20"); 
       }
    }   
}
function validateEntry(input) {
    if (input < 1 || input > 20){
        return false;
    } else {
        return true;        
    }
}

function getShape(userNum) {
    let result = "";
    switch(userNum) {
        case 1:
            result = "henagon";
            break;
        case 2:
            result = "digon";
            break;
        case 3:
            result = "trigon";
            break;
        case 4:
            result = "tetragon";
            break;
        case 5:
            result = "pentagon";
            break;
        case 6:
            result = "hexagon";
            break; 
        case 7:
            result = "heptagon";
            break;           
        case 8:
            result = "octagon";
            break;
        case 9:
            result = "enneagon";
            break;
        case 10:
            result = "decagon";
            break;
        case 11:
            result = "hendecagon";
            break;
        case 12:
            result = "dodecagon";
            break;
        case 13:
            result = "tridecagon";
            break;
        case 14:
            result = "tetradecagon";
            break;
        case 15:
            result = "pentadecagon";
            break;
        case 16:
            result = "hexadecagon";
            break;
        case 17:
            result = "heptadecagon";
            break;
        case 18:
            result = "octadecagon";
            break;
        case 19:
            result = "enneadecagon";
            break;
        case 20:
            result = "icosagon";
            break;
        default:
            result = "";
    }
    return result;
}