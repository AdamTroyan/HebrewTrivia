module.exports = {
    trivia: function(obj, ) {
        const TriviaOptions = {"Easy": true, "Medium": true, "Hard": true}
        const trivia = require("./Data/trivia.json");

        if(obj.difficulty in TriviaOptions == false){
            throw '\x1b[31mType error. Please choose valid difficulty!\x1b[m'
        } else {
            trivia = Object.values(trivia).filter((value) => value.difficulty = obj.difficulty);
        }
        
        let t = trivia[Math.floor(Math.random() * trivia.length)];
        return t;
    },

    trivia: function() {
        const trivia = require("./Data/trivia.json");
        let t = trivia[Math.floor(Math.random() * trivia.length)];
        return t;
    }
}