// let scores = [10, 20, 10]; // increasing all scores by 1 console.log('Scores
// Array BEFORE:', scores); // using a while loop let i = 0; while(i <
// scores.length) {   scores[i]++;   i++; } console.log('Scores Array AFTER:',
// scores); let scores = [10, 20, 10]; console.log('Scores Array BEFORE:',
// scores); // using a for loop for(i = 0; i < scores.length; i++){ scores[i]++;
// } console.log('Scores Array AFTER:', scores); console.log(scores); let scores
// = [10, 20, 10]; console.log('Scores Array BEFORE:', scores);
// scores.forEach(function (entry, index, scores) {     scores[index]++; });
// console.log('Scores Array AFTER:', scores);

let catalog = [
    {
        title: 'JS for Beginners',
        author: 'Zenva',
        copies: 1
    }, {
        title: 'HTML for Beginners',
        author: 'Zenva',
        copies: 1
    }, {
        title: 'CSS for Beginners',
        author: 'XYZ',
        copies: 1
    }
];

console.log('Catalog BEFORE:', catalog);

catalog.forEach(function (entry) {
    if (entry.author == 'Zenva') {
        entry.copies++;
    }
});
console.log('Catalog AFTER:', catalog);
