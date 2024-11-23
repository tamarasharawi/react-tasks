//task 2
function SumAndAvg(numbers) {
    if (numbers.length === 0) {
        return { sum: 0, average: 0 }; 
    }

    const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = totalSum / numbers.length;

    return { sum: totalSum, average: average };
}

const numbers = [10, 20, 30, 40];
const result = calculateSumAndAverage(numbers);
console.log(result); 


//task 3 >> time Complexity cant be constant

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const array = ["apple", "banana", "apple", "orange", "banana"];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);
