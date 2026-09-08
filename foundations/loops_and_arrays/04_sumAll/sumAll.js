const sumAll = function(a, b) {
    
    if (a < 0 || b < 0) {
        return 'ERROR';
   
    } if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
        return 'ERROR';

    } 
        
    const arr = [];
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    for (let i = min; i <= max; i++) {
            arr.push(i);
        }
    

    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum;
    }

// Do not edit below this line
module.exports = sumAll;
