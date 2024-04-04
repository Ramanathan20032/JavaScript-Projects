function countWords() {
    // Get the input text from the textarea
    var inputText = document.getElementById('input').value;

    // Split the input text into an array of words
    var wordsArray = inputText.trim().split(/\s+/);

    // Filter out any empty strings from the array
    var nonEmptyWordsArray = wordsArray.filter(function(word) {
        return word.length > 0;
    });

    // Get the count of words
    var wordCount = nonEmptyWordsArray.length;

    // Display the word count in the result section
    var result = document.getElementById('result')
    result.innerText = "Word count: " + wordCount;
}