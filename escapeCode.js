// Initial array of characters (#s 0-9 and English alphabet)
charList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Function to generate a random # between min and max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// function that generates the escape code (parameter "len" must be an integer)
function generateEscapeCode(len) {

    // Initialize the array that will hold the "len" (e.g. 4) characters of the escape code
    codeArr = []

    // Populates codeArr with randomly selected characters from charList
    for (var i = 0; i < len; i++) {
        // Randomly select an index to select character
        let indx = getRndInteger(0, charList.length - 1);
        // Append (push) the random character
        codeArr.push(charList[indx]);
    }

    // Concatenates all elements of codeArr into one string
    escapeCode = codeArr.join("");

    return escapeCode

}

generateEscapeCode(4);