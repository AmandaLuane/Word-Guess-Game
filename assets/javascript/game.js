//**Key */
//words = bands
//randomWord = randomband 
//lettersOfWord = lettersR 
//blanks = blankL
//blanksAndCorrect = correctL
//wrongGuess = incorrectLs
//wins = win
//losses = loss
//guessesRemaining = allowedG
//guesses = lettersGuessed


//Madonna - Ray of Light
//Nirvana - Smells Like Teen Spirit
//TLC - Waterfalls
//R.E.M - 
//Metelica
//Soundgarden
//Aerosmith
//Oasis
//Eminem
//Weezer



//Word List Variables (Setup 10 80's Band Names)
var bands = ["madonna", "nirvana", "tlc", "rem", "metallica", "soundgarden", "aerosmith", "oasis", "eminem", "weezer"]

var incorrectLs = [];
var randomband = ""; //***** */see if [] would work*****
var lettersR = []; //random Split Letters
var blankL = 0;  //blank letters length
var correctL = [];  //_ _ _ marks
var allowedG = 10;
var lettersGuessed = "";
//incorrect Letters
//letters
//random band name

//Win & Loss Variable (Start at 0)
var win = -1;
var loss = 0

function start() {
randombandText = document.getElementById("band-text");
randomincorrectText = document.getElementById("incorrect-text");
totalwinsText = document.getElementById("wins-Text");
totallossText = document.getElementById("loss-Text");
GuessLeftText = document.getElementById("GuessesLeft-Text")

//funtion to generate random band name 
randomband = bands[Math.floor(Math.random() * bands.length)];
console.log(randomband);                                        //console Log var randomband
lettersR = randomband.split("");
console.log(lettersR);                                          //console Log var lettersR                                        
blankL = lettersR.length;


//create _ for each letter
for (var i = 0; i < blankL; i++){
    correctL.push("_");
    console.log(correctL);                                      //console Log var correctL
    console.log(win);
    console.log(loss);
}
randombandText.textContent = "  " + correctL.join(" ");
totallossText.textContent = "Wins:  " + win;
totallossText.textContent = "Losses: " + loss;
}


//check user guessed letters to random band name letters
//list letters selected on screen in two spots
//1. In Incrrect Letter Box
//2. In Correct Letter Box

function matchLetter(letter) {
    var lettersR = false;
    for (var i = 0; i < blankL; i++) {
        if (randomband[i] == letter) {
            lettersR = true;
        }
    }
if (lettersR){
    for(var i = 0; i < blankL; i++) {
        if (randomband[i] == letter) {
            correctL[i] = letter;

        }
    }
}

else {
    incorrectLs.push(letter);
    allowedG--;


}
}



///******Ask how this works */
// function.
// function alterAt ( n, c, originalString ) {
//     return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
// }

// function guessLetter( letter, shown, answer ) {
//     var checkLetter = -1;  // This variable will hold the indexOf()

//     checkLetter = answer.indexOf(letter); // Single Argument Version starting at 0
//     while ( checkLetter >= 0 ) {

//         // Replace the letter in shown with alterAt() and then store in shown.
//         shown = alterAt(checkLetter, letter, shown);
//         // Use indexOf() again and store in checkLetter
//         checkLetter = answer.indexOf(letter, checkLetter+1);
//     }

//     // Return our string, modified or not
//     return shown;
// }

// guessLetter('a', '______', 'pancake');




//on key press up function
// //log user key press
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    matchLetter(letterGuessed);
    if (lettersR.toString() === correctL.toString()) {
        win++;
        completed()
        totalwinsText.textContent = "Wins: " + win;
    } else if (allowedG === 0) {
        loss++;
        completed()
        changeImage()
        document.getElementById("hangemanimg").src = "assets\images\GameOver.png";
        totallossText.textContent = "Losses: " + loss;
    }
    randombandText.textContent = "  " + correctL.join(" ");
    console.log(letterGuessed);
    randomincorrectText.textContent = "  " + incorrectLs.join("  ");  
    GuessLeftText.textContent = " " + allowedG;
    console.log(win);
    console.log(loss);
}

function completed() {
    allowedG = 10;
    incorrectLs = [];
    correctL = [];
    start ();
}

function changeImage() {
    if (allowedG === 10) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan1.png";
    } else if (allowedG === 9) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan2.png";
    } else if (allowedG === 8) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan3.png";
    } else if (allowedG === 7) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan4.png";
    } else if (allowedG === 6) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan5.png";
    } else if (allowedG === 5) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan6.png";
    } else if (allowedG === 4) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan7.png";
    } else if (allowedG === 3) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan8.png";
    } else if (allowedG === 2) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan9.png";
    } else if (allowedG === 1) {
        document.getElementById("hangemanimg").src = "assets\images\HangMan10.png";
    } 
};




// document.onkeyup = function (event) {
//     String.fromCharCode(event.keyCode).toLowerCase();
//     function letterGuesses(letter) {
//         for (var i = 0; i < blank; i++) {
//             if (letterGuesses[i] === letter) {
//                 correctL = true;

//             }
//         }
//     }
// }


//record the function within a var

//if statement - 2 Events 
//1. If word is guessed then added point to win score and new word is selected
//2. if 10 leeters are picked then add point to score and new word is selected

