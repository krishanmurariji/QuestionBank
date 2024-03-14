let sentence = `Write a program to cyclically rotate an array by one.`;
let newSentence = '';

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
        newSentence += '_';
    } else {
        newSentence += sentence[i];
    }
}

console.log(newSentence);