// console.log("I learned how to output in javascript");
// window.alert("I Love javascript");

let answer=Math.floor(Math.random()*10+1);
let guesses=0;
document.getElementById("guessBtn").onclick=function(){
    let guess=document.getElementById("guess").value;
    guesses+=1;
    if(guess==answer){
        alert(`It took you ${guesses} no of guesses`);
    }
    else if(guess>answer){
        alert("Too large");
    }
    else if(guess<answer){
        alert("Too small");
    }
    else{
        console.log("You are Not subscribed!");
    }
}
