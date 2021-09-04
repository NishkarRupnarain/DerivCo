function match(name, nameComparison) {
    name = name.toString().trim();
    name = name.split(' ').join('');

    nameComparison = nameComparison.toString().trim();
    nameComparison = nameComparison.split(' ').join('');

    if (/[^a-zA-Z]/.test(name) && /[^a-zA-Z]/.test(nameComparison)) {
        console.log('Error! Invalid input');
    } else {
        let comparison = name.toLowerCase() + "matches" + nameComparison.toLowerCase(); //no blank spaces and converted to lowercase;
        let array = comparison.split('');
        const counts = {};
        array.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        let numberString = Object.values(counts).join("");
        let leftCounter = 0;
        while (numberString.length !== 3) {
            numberString = numberString.replace(Number(numberString.charAt(leftCounter)), Number(numberString.charAt(leftCounter)) + Number(numberString.charAt(numberString.length - 1)));
            leftCounter++;
            numberString = numberString.substring(0, numberString.length - 1);
            if ((leftCounter) === (numberString.length - 1)) {
                leftCounter = 0;
            }
        }
        numberString = numberString.replace(Number(numberString.charAt(0)), Number(numberString.charAt(0)) + Number(numberString.charAt(numberString.length - 1)));
        numberString = numberString.substring(0, numberString.length - 1);
        if (numberString.length >= 3) {
            numberString = numberString.replace(Number(numberString.charAt(0)), Number(numberString.charAt(0)) + Number(numberString.charAt(numberString.length - 1)));
            numberString = numberString.substring(0, numberString.length - 1);
        }

        let displayString = null;

        if (Number(numberString) >= 80) {
            displayString = name + " matches " + nameComparison + " " + numberString + "%, good match\n";
        } else {
            displayString = name + " matches " + nameComparison + " " + numberString + "%\n";
        }

        return displayString;
    }
}

module.exports = {match}