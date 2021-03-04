function add() {
    return Number + Number
}
function subtract() { 
    return Number - Number 
}
function multiply() { 
    return Number * Number 
}
function divide() { 
    return Number / Number 
}
function add(a, b) { 
    return (a += b) 
}
function subtract(a, b) { 
    return (a -= b) 
}
function multiply(a, b) { 
    return (a *= b) 
}
function divide(a, b) { 
    return (a /= b) 
}
function increment(n) {
  var number = 1;
  return (n += number) }
function decrement(n) { 
    var number = 1; return (n -= number)
}
function makeInt(n) { 
    return parseInt(n, 10) 
}
function preserveDecimal(n) { 
    return parseFloat(n, 10) 
}