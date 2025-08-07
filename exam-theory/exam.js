var textbox = document.getElementById('textbox');
var counter = document.getElementById('counter');

textbox.addEventListener("input", () => {
    var length = textbox.value.length;
    counter.textContent = length;

    if (length > 100) {
        document.getElementById('counter').style.color = "red"
    } else {
        document.getElementById('counter').style.color = "white"
    }
})


// var arr = [Darasimi];
// var reversedArray = [];

// for (var i = arr.length - 1; i >= 0; i--){
//     reversedArray.push(arr[i]);
// }
// console.log(reversedArray);


const sentence = "Hello world from JavaScript";
const words = sentence.split(" ");
const reversedWords = [];

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}

const reversedSentence = reversedWords.join(" ");

console.log(reversedSentence);




function countWords() {
var text = document.getElementById("textInput").value;

// Step 1: Remove punctuation by keeping only letters and spaces
var simpleText = "";
for (var i = 0; i < text.length; i++) {
    var char = text[i];
    if (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    char === " "
    ) {
    simpleText += char;
    }
}

// Step 2: Split into words
var words = simpleText.split(" ");

// Step 3: Count the words
var wordCount = {};

for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word !== "") {
    if (wordCount[word]) {
        wordCount[word] = wordCount[word] + 1;
    } else {
        wordCount[word] = 1;
    }
    }
}

// Step 4: Display the result
var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "";

for (var word in wordCount) {
    var p = document.createElement("p");
    p.innerText = word + ": " + wordCount[word];
    resultsDiv.appendChild(p);
}
}