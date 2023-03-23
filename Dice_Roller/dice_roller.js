// A function that allows a user to roll a die. 
// The console log allows the one die to become 
// a pair without adding to the function.

function rollDice(sides){
    return Math.ceil(Math.random() * sides)
    }
    
    console.log("You rolled: " + rollDice(6) + ' and ' + rollDice(6))