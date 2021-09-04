const matchFunction = require("./matchFunction");
const prompt = require('prompt');

prompt.start();
let answer = '';

prompt.get(['name', 'nameComparison'], function (err, result) {
    answer = matchFunction.match(result.name, result.nameComparison);

    if (answer !== undefined) {
        console.log(answer);
    }

});

