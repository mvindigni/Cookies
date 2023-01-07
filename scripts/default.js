const min = -100;
const max = 100;

async function genProblem() {
    let problem = document.getElementById("problem");

    while(true) {
        problem.innerHTML = 
        "\(" + randomInt(min, max) + " + " + randomInt(min, max) + "\)" //weird formatting for MathJax
        
        await sleep(3000);
    }
}

function randomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


