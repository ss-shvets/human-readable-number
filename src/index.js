module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    const tens = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    const numString = number.toString();
    if (number < 0) throw new Error('Negative numbers are not supported.');
    if (number === 0) return 'zero';
    if (number < 20) {
        return ones[number];
    }
    if (numString.length === 2) {
        if (numString[1] === '0') {
            return tens[numString[0]]
        }
        return tens[numString[0]] + ' ' + ones[numString[1]];
    }
    if (numString.length === 3) {

        if (numString[1] === '0' && numString[2] === '0') {
            return ones[numString[0]] + ' hundred';
        }
        if(numString[2] === '0') {
            return ones[numString[0]] + ' hundred ' + tens[numString[1]]
        }
        else {
            return ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
        }
    }


}
