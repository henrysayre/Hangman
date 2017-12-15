var words = ["DICE", "PAPER", "ONYX"];
var guessedLetters = [];
var word = " ";
var guesses = 6;

function startGame(){
    guessedLetters = [];
    word = document.getElementById("pickDifficulty").value;
    console.log(word);
    printWord();
    console.log(guessedLetters);
}
function guessLetter(){
    var guessed = "";
    var win = "";
    var letter = document.getElementById("guessBox").value;
    var goodGuess = checkGuesses(letter);
    if (goodGuess) {
        guessedLetters.push(letter);
        var underscoreWord = printWord();
        if (underscoreWord.indexOf("_") === -1) {
            win += "You Win!";
        }
        document.getElementById("winner").innerHTML = win;
        lessGuesses(letter);
        document.getElementById("guessedLetters").innerHTML = guessed + "Letters Guessed: " + guessedLetters;
        document.getElementById("alreadyGuessed").innerHTML = "";
    }else{
        return;
    }
}
function printWord(){
    var returnWord = "";
    for (var i = 0; i < word.length; i ++){
        if (guessedLetters.indexOf(word[i]) === -1) {
            returnWord += "_ ";
        } else {
            returnWord += word[i];
        }
    }
    document.getElementById("guessed").innerHTML = returnWord;
    return returnWord;
}


function lessGuesses(letter){
    var lose = "";
    var printGuesses = "";
    if (word.indexOf(letter) === -1){
        guesses--;
    }
    document.getElementById("guesses").innerHTML = printGuesses + "Guesses Remaining: " + guesses;
    if (guesses === 0){
        lose += "You Lose!";
    }
    document.getElementById("loser").innerHTML = lose;
}

function checkGuesses(letter){
    var wrongLetter = "";
    if (guessedLetters.indexOf(letter) !== -1){
        wrongLetter += "Already guessed that letter!";
        document.getElementById("alreadyGuessed").innerHTML = wrongLetter;
        return false;
    }else{
        return true;
    }
}