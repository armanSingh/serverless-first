function evaluateMe() {
    var number = document.getElementById('num'), input = number.value;
    console.log(evaluateMe.staticNumGenerated)
    var bar = evaluateMe.staticNumGenerated
    var outputString = "Random number to be guessed is: " + bar
    if(input >= 0 && input <= 100) {
        if(input == bar){
             outputString += " Voilla!! You guessed it right! :D";
        } else if(input < bar) {
            outputString += document.getElementById("response").innerHTML = " You gotta guess higher! Keep trying.";
        } else {
            outputString += document.getElementById("response").innerHTML = " You gotta guess something lower! Keep trying.";
        }
    }

    document.getElementById("response").innerHTML = outputString;
}
evaluateMe.staticNumGenerated = Math.floor(Math.random()*100);

