const min = -100;
const max = 100;


async function genProblem() {
    let problem = document.getElementById("problem");

    while(true) {
        problem.innerHTML = 
        mathTime(min, max)
        await sleep(3000);
    }
}

function randomInt(min, max, stringFlag) {
    switch (stringFlag){
        case 0:
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        case 1:
            return (Math.floor(Math.random() * (max - min + 1)) + min).toString(); 
    }
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/*
Four types of math problems:
Addition - two numbers between -100 and 100
Multiplication - two numbers between -20 and 20
Subtraction - two numbers between -100 and 100
Division - multiply two numbers between -20 and 20 then return the following string: product / first factor
*/

function mathTime(min, max){
    switch (randomInt(0, 3, 0)){
        case 0: //Addition
            return  "\(" + randomInt(min, max, 1) + " + " + randomInt(min, max, 1) + "\)"; //weird formatting for MathJax
        
        case 1: //Subtraction
            return "\(" + randomInt(min, max, 1) + " - " + randomInt(min, max, 1) + "\)" ;

        case 2: //Multiplication
            return "\(" + randomInt(min/5, max/5, 1)  + " * " + randomInt(min/5, max/5, 1) + "\)";
        
        case 3: //Division
            var a = randomInt(min/5, max/5, 0);
            var b = randomInt(min/5, max/5, 0);
            return "\(" + (a*b).toString()  + " / " + a.toString()  + "\)";
    }
}