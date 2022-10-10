const findLastTerm = require('./ProgressionFormulas')
const findTermSum = require('./ProgressionFormulas')
var readlineSync = require('readline-sync')
console.log("WELCOME TO MY FIRST NODE PROGRAM! - Progression")
terms = ["Find Last Term", "Find Term Sum"]
index = readlineSync.keyInSelect(terms, "Which of these do you want to find: ")
index = index + 1

if (index == 1){
    var first_term = parseInt(readlineSync.question("First term> ")) 
    var ratio = parseInt(readlineSync.question("Ratio> "))
    var number_of_terms = parseInt(readlineSync.question("Number of terms> "))
    console.log(findLastTerm(first_term, ratio, number_of_terms))
}

else if (index == 2){
    console.log(index)
    var first_term = parseInt(readlineSync.question("First Term> ")) 
    var last_term = parseInt(readlineSync.question("Last term> "))
    var number_of_terms = parseInt(readlineSync.question("Number of terms> "))
    console.log(findTermSum(first_term, ratio, number_of_terms))
}


