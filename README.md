Hebrew Trivia NPM Package

A simple npm package that provides trivia questions in Hebrew with different difficulty levels. The package returns random trivia questions and their associated options and answers.

Features
--------

- Retrieve random Hebrew trivia questions
- Choose difficulty levels: Easy, Medium, or Hard

Installation
------------

To install the package, use npm:

    npm install hebrew-trivia

Usage
-----

To use the package in your Node.js project:

```javascript
const trivia = require('hebrew-trivia');

// Get a random trivia question with difficulty level
const questionWithDifficulty = trivia.trivia({ difficulty: "Easy" });

console.log(questionWithDifficulty);

// Get a random trivia question without specifying difficulty
const randomQuestion = trivia.trivia();

console.log(randomQuestion);
