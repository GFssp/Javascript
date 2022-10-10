var findLastTerm = function(a1, r, n){
    an = a1 + (n - 1) * r 
    return an
}

var findTermSum = function(a1, an, n){
    sn = (a1 + an) * n / 2
    return sn
}

module.exports = findLastTerm
module.exports = findTermSum

