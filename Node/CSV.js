const matchFunction = require("./matchFunction");
const csv = require('csv-parser');
const fs = require('fs');

let males = new Map();
let females = new Map();

let malesSorted = new Map();
let femalesSorted = new Map();

fs.truncate('output.txt', 0, function () {
    console.log('Results can be found in output.txt')
});

fs.createReadStream('Names.csv')
    .pipe(csv())
    .on('data', (row) => {
        // console.log(row.Name);
        if (row.Gender === 'm') {
            males.set(row.Name, row.Gender);
        } else {
            females.set(row.Name, row.Gender);
        }

        malesSorted = new Map([...males.entries()].sort());
        femalesSorted = new Map([...females.entries()].sort());

    })
    .on('end', () => {
        for (let [maleKey, value] of malesSorted) {
            for (let [femaleKey, value] of femalesSorted) {
                let resultString = matchFunction.match(maleKey, femaleKey);

                fs.appendFileSync('output.txt', resultString, function (err) {
                    if (err) return console.log(err);
                });
            }
        }
    });




