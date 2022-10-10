const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

// Filter int numbers using arrow function
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squaredIntegers
}

// optional paramter = value
const increment = (function() {
    return function increment(number, value = 1){
        return number + value
    }
})

// convert the parameter into an array
const sum = (function() {
    return function sum(...args){
        const args = [x, y, z]
        return args.reduce((a, b) => a + b, 0)
    }
})()

console.log(sum(1, 2, 3))