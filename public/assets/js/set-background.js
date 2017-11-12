function evaluateMe() {
    var number = document.getElementById('num'), input = number.value;
    if(input >= 0 && input <= 100) {
        if(input == evaluateMe.staticNumGenerated){
            evaluateMe.found = 1;
        } else if(input < evaluateMe.staticNumGenerated) {
            evaluateMe.lower = input
        } else {
            evaluateMe.higher = input
        }
    }

    if(evaluateMe.found == 0)
        document.getElementById("response").innerHTML = "You should guess something between: " + evaluateMe.lower + " and " + evaluateMe.higher;
    else
        document.getElementById("response").innerHTML = evaluateMe.victoryString;
}
evaluateMe.staticNumGenerated = Math.floor(Math.random()*100);
evaluateMe.lower = 0;
evaluateMe.higher = 100;
evaluateMe.found = 0;
evaluateMe.victoryString =  "You got it right!"
evaluateMe.message =  "You should guess something between: " + evaluateMe.lower + " and " + evaluateMe.higher;

